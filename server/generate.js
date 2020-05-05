// @flow
import cachedUrls from "./cache_config.js";
import requestPromise from "./request_promise.js";
/*::
import typeof { cachedUrls as CachedUrlsType } from "./cache_config.js";
import RequestPromiseType from "./request_promise.js";
*/

cachedUrls.forEach((url /*: string */) /*: Promise<any> */ =>
  requestPromise({
    hostname: "localhost",
    port: 4000,
    method: "GET",
    path: url + "?generate=true",
  })
    .then(({ asdasd, dasdasd }) => {
      console.log(`Done: [`, url, `]`);
    })
    .catch(e => {
      console.log(e);
    }));
