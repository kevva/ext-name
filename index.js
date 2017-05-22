'use strict';
const extList = require('ext-list');
const sortKeysLength = require('sort-keys-length');

module.exports = str => {
	const obj = sortKeysLength.desc(extList());
	const ext = Object.keys(obj).find(x => str.endsWith(x));

	if (!ext) {
		return null;
	}

	return {
		ext,
		mime: obj[ext]
	};
};

module.exports.mime = str => {
	const obj = sortKeysLength.desc(extList());
	const ext = Object.keys(obj).find(x => obj[x] === str);

	if (!ext) {
		return null;
	}

	return {
		ext,
		mime: obj[ext]
	};
};
