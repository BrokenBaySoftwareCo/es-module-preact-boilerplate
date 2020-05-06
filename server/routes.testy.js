// @flow
import { test, testPromise, should } from "./testy.js";
import http from "http";
import requestPromise from "./request_promise.js";
/*::
import typeof { test as TestType, testPromise as TestPromiseType, should as ShouldType } from "./testy.js";
import RequestPromiseType from "./request_promise.js";
*/

const options /*: http$requestOptions */ = {
  hostname: "localhost",
  port: 4000,
  method: "GET",
  path: "/",
};

testPromise("Testing server route /", () => {
  return requestPromise(options)
    .then(({ res, body }) => {
      should(res.statusCode).be.exactly(200);
      should(body).match(/<h1>0<\/h1>/);
    })
    .catch(e => {
      throw e;
    });
});
