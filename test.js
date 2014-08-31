'use strict';

var extname = require('./');
var test = require('ava');

test('return file extension and MIME type', function (t) {
    t.plan(9);

    extname('foobar.tar', function (err, res) {
        t.assert(!err);
        t.assert(res.ext === 'tar');
        t.assert(res.mime === 'application/x-tar');

        extname('foobar.gif', function (err, res) {
            t.assert(!err);
            t.assert(res.ext === 'gif');
            t.assert(res.mime === 'image/gif');

            extname('foobar.pnm', function (err, res) {
                t.assert(!err);
                t.assert(res.ext === 'pnm');
                t.assert(res.mime === 'image/x-portable-anymap');
            });
        });
    });
});
