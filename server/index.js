// @flow
import http from "http";
import typeof HttpType from "http";
import fs from "fs";
import typeof FsType from "fs";
import finalHandler from "finalhandler";
import typeof FinalHandlerType from "finalhandler";
import serveStatic from "serve-static";
import typeof ServeStaticType from "serve-static";
import { h } from "../web_modules/preact.js";
import typeof { h as HType } from "../web_modules/preact.js";
import render from "../web_modules/preact-render-to-string.js";
import typeof RenderType from "../web_modules/preact-render-to-string.js";
import App from "../js/App.js";
import typeof AppType from "../js/App.js";

const port = 4000;
const index = fs.readFileSync("./index.html", "utf8");

var serveAsStatic = serveStatic(".", {
  index: false,
});

const requestHandler = (req, res) => {
  console.log(req.url);
  if (req.url != "/index.html" && req.url != "/") {
    serveAsStatic(req, res, finalHandler(req, res));
  } else {
    var result = index.replace(
      /<\!-- TRUTH...BEAUTY...LOVE -->/g,
      render(App(), {}, { pretty: true }),
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
