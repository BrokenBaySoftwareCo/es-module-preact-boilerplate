# es-module-preact-boilerplate

This is a combination of Preact with ES6 modules and [HTML5Boilerplate](https://html5boilerplate.com/).

## Preact w/ ES Modules

The React peoples are still [messing around deciding what to do about es6 modules](https://github.com/facebook/react/issues/11503), which is pretty weird in 2020.

I'm using Preact because it already has ES modules and [Snowpack](https://www.snowpack.dev/) to copy them up to the `/web_modules` directory for accessibility from the front end.

```
  "scripts": {

	...

    "snowpack": "snowpack install --clean",

	...

  },

  ...

  "snowpack": {
    "webDependencies": [
      "htm",
      "preact",
      "preact/hooks"
	  "preact-render-to-string"
    ],
    "dedupe": []
  },
```

Importing them in the client component scripts from `/web_modules`:

```
import { h, render } from '../web_modules/preact.js'
import { useState } from '../web_modules/preact/hooks.js'
```

## `htm` - "JSX-like syntax in plain JavaScript - no transpiler necessary"

```
import htm from '../web_modules/htm.js'
```

## Build

At the moment the build script is just a placeholder that puts all the front end code into the `/dist` directory.
For the moment, the files in `dist` are just copies but later I may use Babel to transpile away things like `htm` away for the dist build.

```
    "build": "cp -r *.html *.txt *.png *.xml css img js site.webmanifest dist/",
```

Actually it probably doesn't work yet because there's no `web_manifest` dir...

## To Do

[1] Get the build script to tell Snowpack put production versions of packages into the `dist/web_manifest`
[2] Use [this Babel plugin](https://github.com/developit/htm/tree/master/packages/babel-plugin-htm) to compile the `htm` module out of existence.

