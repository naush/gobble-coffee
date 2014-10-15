# gobble-coffee

Compile CoffeeScript files with gobble. Creates sourcemaps automatically.

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-coffee
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'src' ).transform( 'coffee' );
```


## License

MIT. Copyright 2014 Rich Harris
