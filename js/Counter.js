// @flow
import { h, render } from "../web_modules/preact.js";
import typeof {
  h as HType,
  render as RenderType,
} from "../web_modules/preact.js";
import { useState } from "../web_modules/preact/hooks.js";
import typeof { UseStateType } from "../web_modules/preact/hooks.js";
import htm from "../web_modules/htm.js";
import typeof HtmType from "../web_modules/htm.js";
// import { createStyles } from "../web_modules/simplestyle-js.js";
// import typeof { createStyles as CreateStylesType } from "../web_modules/simplestyle-js.js";

const html /*: HtmType */ = htm.bind(h);

/*::
type Props = {
  count: typeof Number
};
*/
const Counter = (props /*: Props */) /*: HtmType */ => {
  const [count, setCount] = useState(parseInt(props.count));
  console.log(props.count.isInteger());
  return html`
    <div>
      <h1>${count}</h1>
      <button onClick=${e => setCount(count - 1)}>Decrement</button>
      <button onClick=${e => setCount(count + 1)}>Increment</button>
    </div>
  `;
};

export default Counter;
