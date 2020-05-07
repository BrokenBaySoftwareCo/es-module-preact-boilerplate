# es-module-preact-boilerplate

No WebPack. No build. Built-in static site generation.

## Getting Started

[1] Clone the repo

```
git clone git@github.com:k7n4n5t3w4rt/es-module-preact-boilerplate.git > mysite
```

[2] Remove `/.git`

```
cd mysite && rm -rf .git
```

[3] Install NodeJS modules

```
npm i
```

[4] Update the ES modules with Snowpack

```
npm run snowpack
```

[5] Test

```
npm run test
```

[6] Code (or don't if you're just trying it out)

```
Your code here.
```

[7] Preview your site dynamically at <http://localhost:4000> during development

```
npm start
```

NOTE: Ctrl+C will stop the NodeJS server.

[8] Generate your static site for GitHub pages, S3, etc.

```
npm run generate
```

[9] Test it locally with Browsersync

```
npm run browsersync
```

[10] `git init` etc. and push your code up to GitHub or somewhere with great, free hosting for static sites.


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

At the moment there's no build script. At some point the build script could generate minified JS. Right now there's tree-shaking going on with Snowpack so I don't know if it's worth it for the library code.

## To Do

[1] Get the build script to tell Snowpack put production versions of packages into the `dist/web_manifest`
[2] Mayne use [this Babel plugin](https://github.com/developit/htm/tree/master/packages/babel-plugin-htm) to compile the `htm` module out of existence.
[3] The "Testy" test runner needs an "only" option

