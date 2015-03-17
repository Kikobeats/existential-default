# existential-default

[![Coverage Status](http://img.shields.io/coveralls/Kikobeats/existential-default/master.svg?style=flat)](https://coveralls.io/r/Kikobeats/existential-default?branch=master)
[![Dependency status](http://img.shields.io/david/Kikobeats/existential-default.svg?style=flat)](https://david-dm.org/Kikobeats/existential-default)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/existential-default.svg?style=flat)](https://david-dm.org/Kikobeats/existential-default#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/existential-default.svg?style=flat)](https://www.npmjs.org/package/existential-default)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

> Check for the existential value of a variable. Assign value by default.

## Install

```bash
npm install existential-default
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install existential-default --save
```

and later link in your HTML:

```html
<script src="bower_components/existential-default/dist/existential-default.js"></script>
```

## Usage

```js
var existsDefault = require('existential-default');
var hello = null;
hello = existsDefault(hello, 'world');
console.log(hello);
// => 'world'
```

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
