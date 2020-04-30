// @flow
import { test, testPromise, should } from "./testy.js";
import http from "http";

testPromise("Testing server routes.", () => {
  // A handy http.request that returns a promise
  const requestPromise = (
    options /*: http$requestOptions */,
  ) /*: Promise<any> */ => {
    return new Promise((resolve, reject) => {
      const req = http.request(options, res => {
        resolve(res);
      });

      req.on("error", error => {
        reject(error);
      });
      req.end();
    });
  };
  // All the options except the options.path
  const options /*: http$requestOptions */ = {
    hostname: "localhost",
    port: 4000,
    method: "GET",
  };
  // Testing the "/" route
  options.path = "/";
  return requestPromise(options)
    .then(res => {
      should(res.statusCode).be.exactly(200);
    })
    .catch(e => {
      throw e;
    });
});
