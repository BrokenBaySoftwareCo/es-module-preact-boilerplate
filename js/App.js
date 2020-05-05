// @flow
import { h, render } from "../web_modules/preact.js";
import htm from "../web_modules/htm.js";
import { createStyles } from "../web_modules/simplestyle-js.js";
import Counter from "./Counter.js";
import Router from "../web_modules/preact-router.js";
import { createHashHistory } from "../web_modules/history.js";
import { createBrowserHistory } from "../web_modules/history.js";

// Flow
/*::
import typeof { createHashHistory as CreateHashHistoryType } from '../web_modules/history.js';
import typeof { createBrowserHistory as CreateBrowserHistoryType } from '../web_modules/history.js';
import typeof { createStyles as CreateStylesType } from "../web_modules/simplestyle-js.js";
import typeof RouterType from "../web_modules/preact-router.js";
import typeof HtmType from "../web_modules/htm.js";
import typeof CounterType from "./Counter.js";
import typeof {
  h as HType,
  render as RenderType,
} from "../web_modules/preact.js";
*/

const html /*: HtmType */ = htm.bind(h);

/*::
type Props = {
  url?: string
};
*/
const App /*: function */ = (props /*: Props */) /*: HtmType */ => {
  /**
   *
   * Normal URLs
   * ===========
   * If we have some server-side smarts, like the node server in /server/index.js
   * or browsersync started with the --single flag,
   * we can use http://normal.urls/like/this
   */
  let history = undefined;
  /**
   * Hash History URLs - pure client-side
   * =================
   * If this is a purely client-side hosting environment, like
   * S3 or GitHub pages, AND we don't want to generate a static site:
   *
   *  $npm run generate
   *
   * Then we'll need to use http://hash.urls#/like/this:
   */
  // if (typeof window !== "undefined" && window.USE_HASH_HISTORY === true) {
  //   console.log("USE_HASH_HISTORY");
  //   history = createHashHistory();
  // }

  return html`
    <${Router} url="${props.url}" history=${history}>
      <${Counter} count="0" path="/" />
      <${Counter} count="6" path="/this/is/a/test/of/the/generate/script" />
    </${Router}>
  `;
};

export default App;
