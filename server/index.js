// @flow
import http from "http";
import fs from "fs";
import finalHandler from "finalhandler";
import serveStatic from "serve-static";
import { h } from "../web_modules/preact.js";
import htm from "../web_modules/htm.js";
import render from "../web_modules/preact-render-to-string.js";
import App from "../js/App.js";
import { readFromCache, writeToCache } from "./cache.js";
import { cacheTtl, cachedUrls } from "./cache_config.js";

const html /*: HtmType */ = htm.bind(h);

// Flow
/*::
import typeof {readFromCache as ReadFromCacheType, writeToCache as WriteToCacheType} from "./cache.js";
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

// CONFIG
const PORT /*: number */ = 4000;

var serveAsStatic = serveStatic(".", {
  index: false,
});

const requestHandler = (req, res) => {
  req.url = req.url.replace(/\/$/, "");
  // NOTE: The trailing "/" doesn't seem to matter
  // to `preact-router` when `/js/App.js` is being
  // rendered server-side
  if (req.url.match(/.+\..+$/) !== null) {
    // console.log("Static: ", req.url);
    serveAsStatic(req, res, finalHandler(req, res));
  } else if (cacheTtl > 0 && cachedUrls.indexOf(req.url) !== -1) {
    const output = readFromCache(req.url, cacheTtl);
    if (output !== false) {
      console.log("Cache: ", req.url);
      res.end(output);
    } else {
      const output = renderToString(req.url);
      writeToCache(req.url, output);
      console.log("Rendered: ", req.url);
      res.end(output);
    }
  } else {
    const output = renderToString(req.url);
    console.log("Rendered: ", req.url);
    res.end(output);
  }
};

const renderToString = (url /*: string */) /*: string */ => {
  const index /*: string */ = fs.readFileSync(
    "./server/index_template.html",
    "utf8",
  );
  // [1] Swap the placeholder copy with the rendered output
  let renderedContent = index.replace(
    /<\!-- TRUTH...BEAUTY...LOVE -->/g,
    render(App({ url }), {}, { pretty: true }),
  );
  // [2] Turn off the hash-based history in `preact-router`
  // because we're rendering server-side
  return renderedContent.replace(
    /USE_HASH_HISTORY \= true/g,
    "USE_HASH_HISTORY = false",
  );
};

const server = http.createServer(requestHandler);

server.listen(PORT, err => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${PORT}`);
});
