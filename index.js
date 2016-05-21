'use strict';
const endsWith = require('ends-with');
const extList = require('ext-list');
const sortKeysLength = require('sort-keys-length');

module.exports = str => {
	const obj = sortKeysLength.desc(extList());
	const ext = Object.keys(obj).filter(x => endsWith(str, x));

	if (!ext.length) {
		return null;
	}

	return {
		ext: ext[0],
		mime: obj[ext[0]]
	};
};
