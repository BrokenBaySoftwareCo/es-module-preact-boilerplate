import { h, render } from "../web_modules/preact.js";
import { useState } from "../web_modules/preact/hooks.js";
import { css } from "../web_modules/emotion.js";
import Counter from "./Counter.js";
import htm from "../web_modules/htm.js";
const html = htm.bind(h);

const someCssClass = css`
  font-size: 2em;
`;

const App = props => {
  return html`
    <h1 className="${someCssClass}">Look Ma! No script tags, no build step</h1>
    <${Counter} count="0" />
  `;
};

export default App;
