// @flow
import { appPaths } from "./cache_config.js";
import requestPromise from "./request_promise.js";
/*::
import typeof { appPaths as AppPathsType } from "./cache_config.js";
import RequestPromiseType from "./request_promise.js";
*/

appPaths().forEach((url /*: string */) /*: Promise<any> */ =>
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
