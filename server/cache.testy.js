// @flow
import { test, should } from "./testy.js";

test("This is a test of the test", () => {
  should(5)
    .be.exactly(5)
    .and.be.a.Number();
});
