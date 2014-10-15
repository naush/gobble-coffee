module.exports = coffee;

function coffee ( code, options ) {
	var compiled;

	options.sourceMap = true;
	compiled = require( 'coffee-script' ).compile( code, options );

	return {
		code: compiled.js,
		map: compiled.v3SourceMap
	};
}

coffee.defaults = {
	accept: '.coffee',
	ext: '.js'
};
