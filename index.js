'use strict';

var endsWith = require('underscore.string').endsWith;
var extList = require('ext-list');
var path = require('path');

/**
 * Get the file extension and MIME type from a file
 *
 * @param {String} str
 * @api public
 */

module.exports = function (str) {
    var obj = {};
    var keys = Object.keys(extList()).sort(function (a, b) {
        return b.length - a.length;
    });

    keys.forEach(function (key, i) {
        obj[keys[i]] = extList()[keys[i]];
    });

    var ext = Object.keys(obj).filter(function (key) {
        return endsWith(str, key);
    })[0] || path.extname(str);

    return obj[ext] ? { ext: ext, mime: obj[ext] } : { ext: ext };
};
