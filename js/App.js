import { h, render } from "../web_modules/preact.js";
import { useState } from "../web_modules/preact/hooks.js";
import { createStyles } from "../web_modules/simplestyle-js.js";
import Counter from "./Counter.js";
import htm from "../web_modules/htm.js";
const html = htm.bind(h);

const [styles] = createStyles({
  someCssClass: {
    fontSize: "2em",
  },
});

const App = props => {
  return html`
    <h1 className="${styles.someCssClass}">
      Look Ma! No script tags, no build step
    </h1>
    <${Counter} count="0" />
  `;
};

export default App;
