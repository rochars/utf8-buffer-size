/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview utf8-buffer-size loader for tests.
 * @see https://github.com/rochars/utf8-buffer-size
 */
let utf8BufferSize;

// UMD bundle
if (process.argv[3] == '--umd') {
	console.log('umd tests');
	utf8BufferSize = require('../dist/utf8-buffer-size.umd.js');

// Source
} else {
	require = require("esm")(module);
	global.module = module;
	console.log('Source tests');
	utf8BufferSize = require('../main.js').default;
}

module.exports = utf8BufferSize;
