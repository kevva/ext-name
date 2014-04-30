# extname [![Build Status](https://travis-ci.org/kevva/extname.svg?branch=master)](https://travis-ci.org/kevva/extname)

> Get the file extension and MIME type from a file

## Install

```bash
$ npm install --save extname
```

## Usage

```js
var extname = require('extname');

extname('foobar.tar');
// => { 'ext': 'tar', 'mime': 'application/x-tar' }
```

## CLI

```bash
$ npm install --global extname
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
