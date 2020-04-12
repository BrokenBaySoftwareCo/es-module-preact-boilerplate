import { React, ReactDOM } from './vendor/es-react/index.js';
import htm from './vendor/htm.module.js'
const html = htm.bind(React.createElement)


const Counter = props => {
  const [count, setCount] = React.useState(parseInt(props.count))
  return html`
    <div>
      <h1>${count}</h1>
      <button onClick=${e => setCount(count - 1)}>Decrement</button>
      <button onClick=${e => setCount(count + 1)}>Increment</button>
    </div>
  `
}

ReactDOM.render(
  html`
    <h1>Look Ma! No script tags, no build step</h1>
    <${Counter} count=0 />
  `,
  document.body
)
