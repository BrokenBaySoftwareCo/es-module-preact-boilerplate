// @flow
import { test, testPromise, should } from "./testy.js";
import http from "http";
import cachedUrls from "./cache_config.js";

// A handy http.request that returns a promise
const requestPromise = (
  options /*: http$requestOptions */,
) /*: Promise<any> */ => {
  return new Promise((resolve, reject) => {
    const req = http.request(options, res => {
      let chunks /*: Array<Buffer> */ = [];
      res
        .on("data", chunk => {
          chunks.push(chunk);
        })
        .on("end", () => {
          const body /*: string */ = Buffer.concat(chunks).toString(); // at this point, `body` has the entire response body stored in it as a string
          console.log(`Done: [`, options.path, `]`);
          resolve({ res, body });
        });

      res.on("error", error => {
        reject(error);
      });
    });
    req.end();
  });
};

cachedUrls.forEach((url /*: string */) /*: Promise<any> */ =>
  requestPromise({
    hostname: "localhost",
    port: 4000,
    method: "GET",
    path: url,
  }));
