module.exports = coffee;

function coffee ( code, options ) {
	var compiled;

	options.sourceMap = options.sourceMap !== false;
	compiled = require( 'coffee-script' ).compile( code, options );

	return {
		code: options.sourceMap ? compiled.js : compiled,
		map: compiled.v3SourceMap
	};
}

coffee.defaults = {
	accept: '.coffee',
	ext: '.js'
};
