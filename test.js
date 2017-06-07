import test from 'ava';
import m from './';

test('ext', t => {
	t.is(m('foobar.tar')[0].ext, 'tar');
	t.is(m('foobar.tar')[0].mime, 'application/x-tar');
	t.is(m('foobar.gif')[0].ext, 'gif');
	t.is(m('foobar.gif')[0].mime, 'image/gif');
	t.is(m('foobar.pnm')[0].ext, 'pnm');
	t.is(m('foobar.pnm')[0].mime, 'image/x-portable-anymap');
});

test('mime', t => {
	t.is(m.mime('application/x-tar')[0].ext, 'tar');
	t.is(m.mime('image/gif')[0].ext, 'gif');
	t.is(m.mime('image/x-portable-anymap')[0].ext, 'pnm');
});
