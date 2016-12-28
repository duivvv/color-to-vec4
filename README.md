# color-to-vec4

> :white_square_button: a color (rgb, rgba, hex) to vec4 convertor

![Node](https://img.shields.io/node/v/color-to-vec4.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/color-to-vec4.svg?style=flat-square)](https://www.npmjs.com/package/color-to-vec4)
[![Travis](https://img.shields.io/travis/duivvv/color-to-vec4/master.svg?style=flat-square)](https://travis-ci.org/duivvv/color-to-vec4)
[![David](https://img.shields.io/david/duivvv/color-to-vec4.svg?style=flat-square)](https://david-dm.org/duivvv/color-to-vec4)
[![Coverage Status](https://img.shields.io/coveralls/duivvv/color-to-vec4.svg?style=flat-square)](https://coveralls.io/github/duivvv/color-to-vec4)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)

### Usage

```js

import colorToVec4 from 'color-to-vec4';

const color = colorToVec4(`#FF00FF`);
console.log(color); // [1, 0, 1, 1]

const color2 = colorToVec4(`rgba(255, 0, 0, .3)`);
console.log(color2); // [1, 0, 0, .3]

const color3 = colorToVec4(`rgb(200, 255, 0)`);
console.log(color3); // [0.7843137254901961, 1, 0, 1]

```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add color-to-vec4 (--dev)

or npm

	npm install color-to-vec4 (--save-dev)

### Examples

See [`example`](example/script.js) folder

### Builds

If you don't use a package manager, you can [access `color-to-vec4` via unpkg (CDN)](https://unpkg.com/color-to-vec4/), download the source, or point your package manager to the url.

`color-to-vec4` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
  -9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `color-to-vec4` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/color-to-vec4/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/color-to-vec4) on your page. The UMD builds make `color-to-vec4` available as a `window.colorToVec4` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).
