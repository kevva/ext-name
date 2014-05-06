/*global describe, it */
'use strict';

var assert = require('assert');
var extname = require('./');

describe('extname()', function () {
    it('should return a files extension and MIME type', function (cb) {
        extname('foobar.tar', function (err, res) {
            assert.strictEqual(res.ext, 'tar');
            assert.strictEqual(res.mime, 'application/x-tar');

            extname('foobar.gif', function (err, res) {
                assert.strictEqual(res.ext, 'gif');
                assert.strictEqual(res.mime, 'image/gif');

                extname('foobar.pnm', function (err, res) {
                    assert.strictEqual(res.ext, 'pnm');
                    assert.strictEqual(res.mime, 'image/x-portable-anymap');
                    cb();
                });
            });
        });
    });
});
