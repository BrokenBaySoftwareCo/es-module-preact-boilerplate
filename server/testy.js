// @flow
import shouldFunction from "../web_modules/should/as-function.js";

export { shouldFunction as should };

/*::
  type promiseFunction = (any) => Promise<any>;
*/
export const test = (
  message /*: string */,
  testFunction /*: function */,
) /*: void */ => {
  try {
    testFunction();
  } catch (e) {
    console.group(message);
    console.error("FAIL:", e.message);
    console.groupEnd();
  }
};

export const testPromise = (
  message /*: string */,
  testFunction /*: promiseFunction */,
) /*: void */ => {
  testFunction().catch(e => {
    console.group(message);
    console.error("FAIL:", e.message);
    console.groupEnd();
  });
};
