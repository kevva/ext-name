import test from 'ava';
import m from './';

test(t => {
	t.is(m('foobar.tar').ext, 'tar');
	t.is(m('foobar.tar').mime, 'application/x-tar');
	t.is(m('foobar.gif').ext, 'gif');
	t.is(m('foobar.gif').mime, 'image/gif');
	t.is(m('foobar.pnm').ext, 'pnm');
	t.is(m('foobar.pnm').mime, 'image/x-portable-anymap');
});
