#!/usr/bin/env node
'use strict';

var extname = require('./');
var meow = require('meow');

/**
 * Initialize CLI
 */

var cli = meow({
	help: [
		'Usage',
		'  extname <file>',
		'',
		'Example',
		'  extname file.tar.gz'
	].join('\n')
});

/**
 * Check for arguments
 */

if (!cli.input.length) {
	console.error([
		'Specify a file',
		'',
		'Example',
		'  extname file.tar.gz'
	].join('\n'));

	process.exit(1);
}

/**
 * Run
 */

console.log(extname(cli.input[0]));
