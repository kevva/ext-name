import test from 'ava';
import m from './';

test('ext', t => {
	t.is(m('foobar.tar').ext, 'tar');
	t.is(m('foobar.tar').mime, 'application/x-tar');
	t.is(m('foobar.gif').ext, 'gif');
	t.is(m('foobar.gif').mime, 'image/gif');
	t.is(m('foobar.pnm').ext, 'pnm');
	t.is(m('foobar.pnm').mime, 'image/x-portable-anymap');
});

test('mime', t => {
	t.is(m.mime('application/x-tar').ext, 'tar');
	t.is(m.mime('image/gif').ext, 'gif');
	t.is(m.mime('image/x-portable-anymap').ext, 'pnm');
});
