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
    console.log("PASS:", message, ":)");
  } catch (e) {
    console.log("FAIL:", message, ":(");
    console.error(e.message);
  }
};

export const testPromise = (
  message /*: string */,
  testFunction /*: promiseFunction */,
) /*: void */ => {
  testFunction()
    .then(() => {
      console.log("PASS:", message, ":)");
    })
    .catch(e => {
      console.log("FAIL:", message, ":(");
      console.error(e.message);
    });
};
