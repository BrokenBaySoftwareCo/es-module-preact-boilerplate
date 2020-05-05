// @flow
import fs from "fs";
import cachedUrls from "./cache_config.js";
import requestPromise from "./request_promise.js";
/*::
import typeof { cachedUrls as CachedUrlsType } from "./cache_config.js";
import RequestPromiseType from "./request_promise.js";
*/

cachedUrls.forEach((url /*: string */) /*: void */ => {
  fs.unlink(`.${url}/index.html`, () /*: void */ => {});
});
