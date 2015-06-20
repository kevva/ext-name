#!/usr/bin/env node
'use strict';

var meow = require('meow');
var extName = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ ext-name <file>',
		'',
		'Example',
		'  $ ext-name file.tar.gz'
	]
});

if (!cli.input.length) {
	console.error([
		'Specify a file',
		'',
		'Example',
		'  $ ext-name file.tar.gz'
	].join('\n'));

	process.exit(1);
}

console.log(extName(cli.input[0]));
