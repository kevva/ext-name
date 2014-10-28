'use strict';

var extname = require('./');
var test = require('ava');

test('return file extension and MIME type', function (t) {
	t.plan(6);

	t.assert(extname('foobar.tar').ext === 'tar');
	t.assert(extname('foobar.tar').mime === 'application/x-tar');
	t.assert(extname('foobar.gif').ext === 'gif');
	t.assert(extname('foobar.gif').mime === 'image/gif');
	t.assert(extname('foobar.pnm').ext === 'pnm');
	t.assert(extname('foobar.pnm').mime === 'image/x-portable-anymap');
});
