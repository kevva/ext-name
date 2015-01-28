# ext-name [![Build Status](http://img.shields.io/travis/kevva/ext-name.svg?style=flat)](https://travis-ci.org/kevva/ext-name)

> Get the file extension and MIME type from a file

## Install

```bash
$ npm install --save ext-name
```

## Usage

```js
var extname = require('ext-name');

console.log(extname('foobar.tar'));
//=> { 'ext': 'tar', 'mime': 'application/x-tar' }
```

## CLI

```bash
$ npm install --global ext-name
```

```bash
$ extname --help

Usage
  $ extname <file>

Example
  $ extname file.tar.gz
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
