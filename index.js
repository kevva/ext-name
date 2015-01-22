'use strict';

var endsWith = require('ends-with');
var extList = require('ext-list');
var sortKeysLength = require('sort-keys-length');

/**
 * Get the file extension and MIME type from a file
 *
 * @param {String} str
 * @api public
 */

module.exports = function (str) {
	var obj = sortKeysLength.desc(extList());
	var ext = Object.keys(obj).filter(endsWith.bind(null, str));

	if (!ext.length) {
		return null;
	}

	return { ext: ext[0], mime: obj[ext[0]] };
};
