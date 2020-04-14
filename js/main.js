import { h, hydrate } from '../web_modules/preact.js'
import App from './App.js';
import htm from '../web_modules/htm.js'
const html = htm.bind(h)

hydrate(
	html`
    <${App} />
  `,
	document.getElementById('main-container')
)
