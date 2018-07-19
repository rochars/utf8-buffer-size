/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview rollup configuration file.
 * @see https://github.com/rochars/utf8-buffer-size
 */

import { terser } from "rollup-plugin-terser";
import fs from 'fs';

// Load polyfill only in UMD dist
const codePointAtPolyfill = fs.readFileSync(
  './node_modules/string.prototype.codepointat/codepointat.js', 'utf8');

// Legal
const license = '/*!\n'+
  ' * Copyright (c) 2018 Rafael da Silva Rocha.\n'+
  ' */\n';

// Exports as default and as .default so it do not break in TypeScript
let UMDHeader = "(function (global, factory) {" +
  "typeof exports === 'object' && typeof module !== 'undefined' ? " +
  "(module.exports = factory(), module.exports.default = factory())  :" +
  "typeof define === 'function' && define.amd ? define(factory) :" +
  "(global.utf8BufferSize = factory());" +
  "}(this, (function () { 'use strict';";
let UMDFooter = "return utf8BufferSize;})));";

export default [
  // umd bundle includes polyfill for String.codePointAt by @mathiasbynens
  // @see https://www.npmjs.com/package/string.prototype.codepointat
  {
    input: 'main.js',
    output: [
      {
        file: 'dist/utf8-buffer-size.umd.js',
        name: 'utf8BufferSize',
        format: 'iife',
        banner: license + codePointAtPolyfill + UMDHeader,
        footer: UMDFooter
      }
    ],
    plugins: [
      terser({
        output: {
          comments: function(node, comment) {
            var text = comment.value;
            var type = comment.type;
            if (type == "comment2") {
              // multiline comment
              return /@preserve|!|@license|@cc_on/i.test(text);
            }
          }
        }
      })
    ]
  }
];
