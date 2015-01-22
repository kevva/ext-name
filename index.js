'use strict';

var endsWith = require('underscore.string').endsWith;
var extList = require('ext-list');
var path = require('path');
var sortKeysLength = require('sort-keys-length');

/**
 * Get the file extension and MIME type from a file
 *
 * @param {String} str
 * @api public
 */

module.exports = function (str) {
	var obj = {};
	var keys = Object.keys(sortKeysLength.desc(extList()));

	keys.forEach(function (key, i) {
		obj[keys[i]] = extList()[keys[i]];
	});

	var ext = Object.keys(obj).filter(function (key) {
		return endsWith(str, key);
	})[0] || path.extname(str);

	if (!ext || !obj[ext]) {
		return null;
	}

	return { ext: ext, mime: obj[ext] };
};
