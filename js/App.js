// @flow
import { h, render } from "../web_modules/preact.js";
import typeof {
  h as HType,
  render as RenderType,
} from "../web_modules/preact.js";
import { createStyles } from "../web_modules/simplestyle-js.js";
import typeof { createStyles as CreateStylesType } from "../web_modules/simplestyle-js.js";
import htm from "../web_modules/htm.js";
import typeof HtmType from "../web_modules/htm.js";
import Counter from "./Counter.js";
import typeof CounterType from "./Counter.js";
// import { useState } from "../web_modules/preact/hooks.js";
// import typeof { useState as UseState } from "../web_modules/preact/hooks.js";

const html = htm.bind(h);

const [styles] /*: CreateStylesType */ = createStyles({
  someCssClass: {
    fontSize: "2em",
  },
});

/*::
type Props = {
  foo: number,
  bar: string,
};
*/
const App /*: function */ = (props /*: Props */) /*: HtmType */ => {
  return html`
    <h1 className="${styles.someCssClass}">
      Look Ma! No script tags, no build step
    </h1>
    <${Counter} count="0" />
  `;
};

export default App;
