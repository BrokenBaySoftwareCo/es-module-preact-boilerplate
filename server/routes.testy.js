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

options.port = 3000;

testPromise("Testing client-side route /", () => {
  options.path = "/";
  return requestPromise(options)
    .then(({ res, body }) => {
      should(res.statusCode).be.exactly(200);
    })
    .catch(e => {
      throw e;
    });
});

testPromise("Testing client-side route /counter", () => {
  options.path = "/counter";
  return requestPromise(options)
    .then(({ res, body }) => {
      should(res.statusCode).be.exactly(301);
    })
    .catch(e => {
      throw e;
    });
});

testPromise("Testing client-side route /counter/", () => {
  options.path = "/counter/";
  return requestPromise(options)
    .then(({ res, body }) => {
      should(res.statusCode).be.exactly(200);
    })
    .catch(e => {
      throw e;
    });
});

testPromise("Testing client-side route /#/", () => {
  options.path = "/#/";
  return requestPromise(options)
    .then(({ res, body }) => {
      should(res.statusCode).be.exactly(200);
    })
    .catch(e => {
      throw e;
    });
});

testPromise("Testing client-side route /#/counter", () => {
  options.path = "/#/counter";
  return requestPromise(options)
    .then(({ res, body }) => {
      should(res.statusCode).be.exactly(200);
    })
    .catch(e => {
      throw e;
    });
});

testPromise("Testing client-side route /#/counter/", () => {
  options.path = "/#/counter/";
  return requestPromise(options)
    .then(({ res, body }) => {
      should(res.statusCode).be.exactly(200);
    })
    .catch(e => {
      throw e;
    });
});
