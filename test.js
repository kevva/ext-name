/*global describe, it */
'use strict';

var assert = require('assert');
var extname = require('./');

describe('extname()', function () {
    it('should return a files extension and MIME type', function (cb) {
        assert.strictEqual(extname('foobar.tar').ext, 'tar');
        assert.strictEqual(extname('foobar.tar').mime, 'application/x-tar');
        cb();
    });
});
