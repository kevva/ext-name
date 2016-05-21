#!/usr/bin/env node
'use strict';
const meow = require('meow');
const extName = require('./');

const cli = meow(`
	Usage
	  $ ext-name <file>

	Example
	  $ ext-name file.tar.gz
`);

if (cli.input.length === 0) {
	console.error('Specify a file');
	process.exit(1);
}

console.log(extName(cli.input[0]));
