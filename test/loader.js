/**
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/utf8-buffer-size
 *
 */

let utf8BufferSize;

// Browser bundle
if (process.argv[3] == '--min') {
	console.log('min tests');
    global.window = {};
    require('../dist/utf8-buffer-size.min.js');
    utf8BufferSize = window.utf8BufferSize;

// UMD bundle
} else if (process.argv[3] == '--umd') {
	console.log('umd tests');
	utf8BufferSize = require('../dist/utf8-buffer-size.umd.js');

// CommonJS dist
} else if (process.argv[3] == '--cjs') {
	console.log('cjs tests');
	utf8BufferSize = require('../dist/utf8-buffer-size.cjs.js');
	utf8BufferSizeDefault = require('../dist/utf8-buffer-size.cjs.js').default;
	if (utf8BufferSize !== utf8BufferSizeDefault) {
		throw new Error('CJS build should export as default and as .default');
	}

// ES6 dist
} else if (process.argv[3] == '--esm') {
	require = require("esm")(module);
	global.module = module;
	console.log("esm");
	utf8BufferSize = require('../dist/utf8-buffer-size.js').default;

// Source
} else {
	require = require("esm")(module);
	global.module = module;
	console.log('Source tests');
	utf8BufferSize = require('../main.js').default;
}

module.exports = utf8BufferSize;
