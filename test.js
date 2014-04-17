/*global describe, it */
'use strict';

var assert = require('assert');
var extname = require('./');

describe('extname()', function () {
    it('should return a files extension and MIME type', function (cb) {
        assert.strictEqual(extname('foobar.tar').ext, 'tar');
        assert.strictEqual(extname('foobar.tar').mime, 'application/x-tar');
        assert.strictEqual(extname('foobar.py').ext, 'py');
        assert.strictEqual(extname('foobar.py').mime, 'text/x-script.python');
        assert.strictEqual(extname('foobar.pnm').ext, 'pnm');
        assert.strictEqual(extname('foobar.pnm').mime, 'image/x-portable-anymap');
        assert.strictEqual(extname('foobar.tar.gz').ext, 'tar.gz');
        assert.strictEqual(extname('foobar.tar.gz').mime, 'application/x-tgz');
        cb();
    });
});
