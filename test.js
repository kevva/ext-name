'use strict';

var test = require('ava');
var extName = require('./');

test('return file extension and MIME type', function (t) {
	t.assert(extName('foobar.tar').ext === 'tar', extName('foobar.tar').ext);
	t.assert(extName('foobar.tar').mime === 'application/x-tar', extName('foobar.tar').mime);
	t.assert(extName('foobar.gif').ext === 'gif', extName('foobar.gif').ext);
	t.assert(extName('foobar.gif').mime === 'image/gif', extName('foobar.gif').mime);
	t.assert(extName('foobar.pnm').ext === 'pnm', extName('foobar.pnm').ext);
	t.assert(extName('foobar.pnm').mime === 'image/x-portable-anymap', extName('foobar.pnm').mime);
	t.end();
});
