import { h, render } from '../web_modules/preact.js'
import { useState } from '../web_modules/preact/hooks.js'
import Counter from './Counter.js';
import htm from '../web_modules/htm.js'
const html = htm.bind(h)

const App = props => {
	return html`
    <h1>Look Ma! No script tags, no build step</h1>
    <${Counter} count=0 />
  `
}

export default App;