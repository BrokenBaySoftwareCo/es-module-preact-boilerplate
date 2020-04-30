// @flow
import { h, render } from "../web_modules/preact.js";
import typeof { h as H, render as Render } from "../web_modules/preact.js";
import { createStyles } from "../web_modules/simplestyle-js.js";
import typeof { createStyles as CreateStyles } from "../web_modules/simplestyle-js.js";
import htm from "../web_modules/htm.js";
import typeof Htm from "../web_modules/htm.js";
import Counter from "./Counter.js";
// import { useState } from "../web_modules/preact/hooks.js";
// import typeof { useState as UseState } from "../web_modules/preact/hooks.js";

const html = htm.bind(h);

const [styles] /*: CreateStyles */ = createStyles({
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
const App /*: function */ = (props /*: Props */) /*: Htm */ => {
  return html`
    <h1 className="${styles.someCssClass}">
      Look Ma! No script tags, no build step
    </h1>
    <${Counter} count="0" />
  `;
};

export default App;
