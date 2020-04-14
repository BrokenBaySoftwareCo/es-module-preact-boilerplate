import { h, render } from '../web_modules/preact.js'
import { useState } from '../web_modules/preact/hooks.js'
import htm from '../web_modules/htm.js'
const html = htm.bind(h)

const Counter = props => {
	const [count, setCount] = useState(parseInt(props.count))
	return html`
    <div>
      <h1>${count}</h1>
      <button onClick=${e => setCount(count - 1)}>Decrement</button>
      <button onClick=${e => setCount(count + 1)}>Increment</button>
    </div>
  `
}

export default Counter;