/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview rollup configuration file.
 * @see https://github.com/rochars/utf8-buffer-size
 */

import closure from 'rollup-plugin-closure-compiler-js';
import fs from 'fs';

// Externs
const externsFile = fs.readFileSync('./externs/utf8-buffer-size.js', 'utf8');

// Legal
const license = '/*!\n'+
  ' * Copyright (c) 2018 Rafael da Silva Rocha.\n'+
  ' */\n';

export default [
  // cjs bundle, es bundle
  {
    input: 'main.js',
    output: [
      {
        file: 'dist/utf8-buffer-size.cjs.js',
        name: 'utf8-buffer-size',
        format: 'cjs',
        footer: 'module.exports.default = utf8BufferSize;'
      },
      {
        file: 'dist/utf8-buffer-size.js',
        format: 'es'
      }
    ]
  },
  // umd bundle
  {
    input: 'main.js',
    output: [
      {
        file: 'dist/utf8-buffer-size.umd.js',
        name: 'utf8BufferSize',
        format: 'umd'
      }
    ]
  },  
  // browser bundle
  {
    input: 'main.js',
    output: [
      {
        file: 'dist/utf8-buffer-size.min.js',
        name: 'utf8buffersize',
        format: 'iife',
        banner: license,
        footer: 'window.utf8BufferSize=utf8buffersize;'
      }
    ],
    plugins: [
      closure({
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'ADVANCED',
        warningLevel: 'VERBOSE',
        externs: [{src: externsFile}]
      })
    ]
  }
];
