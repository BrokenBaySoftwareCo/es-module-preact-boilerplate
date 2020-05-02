// @flow
import { test, testPromise, should } from "./testy.js";
import http from "http";

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
          resolve({ res, body });
        });

      res.on("error", error => {
        reject(error);
      });
    });
    req.end();
  });
};

const options /*: http$requestOptions */ = {
  hostname: "localhost",
  port: 4000,
  method: "GET",
  path: "/",
};

testPromise("Testing server route /", () => {
  options.path = "/";
  return requestPromise(options)
    .then(({ res, body }) => {
      should(res.statusCode).be.exactly(200);
      should(body).match(/\[App\]/);
    })
    .catch(e => {
      throw e;
    });
});

testPromise("Testing server route /counter", () => {
  options.path = "/counter";
  return requestPromise(options)
    .then(({ res, body }) => {
      should(res.statusCode).be.exactly(200);
      should(body).match(/\[Counter\]/);
      should(body).match(/<h1>1<\/h1>/);
    })
    .catch(e => {
      throw e;
    });
});

testPromise("Testing server route /counter/", () => {
  options.path = "/counter/";
  return requestPromise(options)
    .then(({ res, body }) => {
      should(res.statusCode).be.exactly(200);
      should(body).match(/\[Counter\]/);
      should(body).match(/<h1>1<\/h1>/);
    })
    .catch(e => {
      throw e;
    });
});
