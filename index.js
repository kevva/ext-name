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
    var mime = map(extList, str);
    var ext = invert(extList)[mime] || path.extname(str);

    if (mime) {
        return { ext: ext, mime: mime };
    }

    return ext;
};
