# ES6 React Boilerplate

This is a combination of React with ES6 modules and [HTML5Boilerplate](https://html5boilerplate.com/).

## ES6 React Modules

This setup uses these ES6 React package:

    <https://www.npmjs.com/package/es-react>

It's not official. Officially, the React peoples are still [fucking around deciding what to do about es6 modules](https://github.com/facebook/react/issues/11503), which is pretty weird in 2020:

NOTE: I'm installing the package locally, rather than reference it at the CDN. In `package.json`, there's some scripts that copy the package from the `node_modules` directory:

```
    "cp-2src-react": "cp -r node_modules/es-react/dev src/js/vendor/es-react",
    "cp-2dist-react": "cp -r node_modules/es-react dist/js/vendor/es-react",
```

## `htm` - "JSX-like syntax in plain JavaScript - no transpiler necessary"

## To Do

[1] Use [this Babel plugin](https://github.com/developit/htm/tree/master/packages/babel-plugin-htm) to compile the `htm` module out of existence.

