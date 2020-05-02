// @flow
import http from "http";
import fs from "fs";
import finalHandler from "finalhandler";
import serveStatic from "serve-static";
import { h } from "../web_modules/preact.js";
import htm from "../web_modules/htm.js";
import render from "../web_modules/preact-render-to-string.js";
import App from "../js/App.js";

const html /*: HtmType */ = htm.bind(h);

// Flow
/*::
import typeof AppType from "../js/App.js";
import typeof YabrType from "../web_modules/yabr.js";
import typeof RenderType from "../web_modules/preact-render-to-string.js";
import typeof { h as HType } from "../web_modules/preact.js";
import typeof HtmType from "../web_modules/htm.js";
import typeof ServeStaticType from "serve-static";
import typeof FinalHandlerType from "finalhandler";
import typeof FsType from "fs";
import typeof HttpType from "http";
*/

const port = 4000;
const index = fs.readFileSync("./index.html", "utf8");

var serveAsStatic = serveStatic(".", {
  index: false,
});

const requestHandler = (req, res) => {
  // The trailing "/" doesn't seem to matter
  // to `preact-router` when `/js/App.js` is being
  // rendered server-side
  // req.url = req.url.replace(/\/$/, "");
  if (req.url.match(/.+\..+$/) !== null) {
    console.log("Static: ", req.url);
    serveAsStatic(req, res, finalHandler(req, res));
  } else {
    console.log("Serving dynamic content: ", req.url);
    let result = index.replace(
      /<\!-- TRUTH...BEAUTY...LOVE -->/g,
      render(App({ url: req.url }), {}, { pretty: true }),
    );
    result = result.replace(
      /USE_HASH_HISTORY \= true/g,
      "USE_HASH_HISTORY = false",
    );
    res.end(result);
  }
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
