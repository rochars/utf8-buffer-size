/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview Test the utf8BufferSize function.
 * @see https://github.com/rochars/utf8-buffer-size
 */

var utf8BufferSize = utf8BufferSize || require('../../test/loader.js');
var assert = assert || require('assert');

// utf8BufferSize
describe('utf8BufferSize UTF-8 strings, 4 bytes', function() {
    it('count with BOM', function() {
        let chars = '\ufeff輸';
        assert.equal(utf8BufferSize(chars), 7);
    });
    it('count with BOM in the middle of the string', function() {
        let chars = '輸\ufeff輸';
        assert.equal(utf8BufferSize(chars), 11);
    });
    it('count a single char', function() {
        let chars = '輸';
        assert.equal(utf8BufferSize(chars), 4);
    });
    it('count 2 chars', function() {
        let chars = '輸輸';
        assert.equal(utf8BufferSize(chars), 8);
    });
    it('count multiple chars', function() {
        let chars = '輸輸笠߹~$';
        assert.equal(utf8BufferSize(chars), 15);
    });
    it('count multiple chars', function() {
        let chars = '輸輸笠߹~$輸';
        assert.equal(utf8BufferSize(chars), 19);
    });
});
