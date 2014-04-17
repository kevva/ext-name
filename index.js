'use strict';

var extList = require('ext-list');
var invert = require('lodash').invert;
var map = require('map-key');
var path = require('path');

/**
 * Get the file extension and MIME type from a file
 *
 * @param {String} str
 * @api public
 */

module.exports = function (str) {
    var obj = {};
    var key = Object.keys(extList).sort(function (a, b) {
        return b.length - a.length;
    });

    for (var i = 0; i < Object.keys(extList).length; i++) {
        obj[key[i]] = extList[key[i]];
    }

    var mime = map(obj, str);
    var ext = invert(obj)[mime] || path.extname(str);

    if (mime) {
        return { ext: ext, mime: mime };
    }

    return { ext: ext };
};
