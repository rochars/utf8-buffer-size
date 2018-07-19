# utf8-buffer-size
Copyright (c) 2018 Rafael da Silva Rocha.  
https://github.com/rochars/utf8-buffer-size

[![NPM version](https://img.shields.io/npm/v/utf8-buffer-size.svg?style=for-the-badge)](https://www.npmjs.com/package/utf8-buffer-size) [![Docs](https://img.shields.io/badge/docs-online-blue.svg?style=for-the-badge)](https://rochars.github.io/utf8-buffer-size/) [![Tests](https://img.shields.io/badge/tests-online-blue.svg?style=for-the-badge)](https://rawgit.com/rochars/utf8-buffer-size/master/test/browser.html)  
[![Codecov](https://img.shields.io/codecov/c/github/rochars/utf8-buffer-size.svg?style=flat-square)](https://codecov.io/gh/rochars/utf8-buffer-size) [![Unix Build](https://img.shields.io/travis/rochars/utf8-buffer-size.svg?style=flat-square)](https://travis-ci.org/rochars/utf8-buffer-size) [![Windows Build](https://img.shields.io/appveyor/ci/rochars/utf8-buffer-size.svg?style=flat-square&logo=appveyor)](https://ci.appveyor.com/project/rochars/utf8-buffer-size) [![Scrutinizer](https://img.shields.io/scrutinizer/g/rochars/utf8-buffer-size.svg?style=flat-square&logo=scrutinizer)](https://scrutinizer-ci.com/g/rochars/utf8-buffer-size/)

Return how many bytes are needed to serialize a UTF-8 string.

- **No dependencies**
- **MIT licensed**
- **Use it out of the box in the browser**
- **Use it out of the box in Node**
- **Use it out of the box with [TypeScript](https://www.typescriptlang.org/)**
- **Less than 1KB!**

## Install
```
npm install utf8-buffer-size
```

You can also download the UMD dist file in the *./dist* folder:  
https://github.com/rochars/utf8-buffer-size/tree/master/dist

## Use

### Node
If you installed via [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com), **import utf8BufferSize from utf8-buffer-size**:
```javascript
import utf8BufferSize from 'utf8-buffer-size';
let bufferSize = utf8BufferSize('Some string');
```

Or **require**:
```javascript
const utf8BufferSize = require('utf8-buffer-size');
let bufferSize = utf8BufferSize('輸輸笠߹~$輸abcd');
```

### Browser
Use the compiled file in the */dist* folder of this package:
```html
<script src="./dist/utf8-buffer-size.umd.js"></script>
<script>
  var bufferSize = utf8BufferSize('輸輸笠߹~$輸abcd');
</script>
```

Or get it from the [jsDelivr](https://cdn.jsdelivr.net/npm/utf8-buffer-size) CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/utf8-buffer-size"></script>
```

Or get it from [unpkg](https://unpkg.com/utf8-buffer-size):
```html
<script src="https://unpkg.com/utf8-buffer-size"></script>
```

Or load it as a module using [jspm](https://jspm.io):
```html
<script type="module">
  import utf8BufferSize from 'https://dev.jspm.io/utf8-buffer-size';
  let bufferSize = utf8BufferSize('輸輸笠߹~$輸abcd');
</script>
```

## API
```javascript
/**
 * Returns how many bytes are needed to serialize a UTF-8 string.
 * @see https://encoding.spec.whatwg.org/#utf-8-encoder
 * @param {string} str The string to pack.
 * @return {number} The number of bytes needed to serialize the string.
 */
export default function utf8BufferSize(str) {}
```

## Distribution
This library is a ES module also distributed as a UMD module. It works out of the box in Node when installed with ```npm install utf8-buffer-size```. It includes a [TypeScript](https://www.typescriptlang.org/) definition file: **./main.d.ts**.

### If you are using this lib in a browser:

You can load **./dist/utf8-buffer-size.umd.js** in the browser with ```<script>``` tags. You can load it via the https://unpkg.com and https://www.jsdelivr.com/ CDNs:

[unpkg](https://unpkg.com/utf8-buffer-size):
```html
<script src="https://unpkg.com/utf8-buffer-size"></script>
```

[jsDelivr](https://cdn.jsdelivr.net/npm/utf8-buffer-size):
```html
<script src="https://cdn.jsdelivr.net/npm/utf8-buffer-size"></script>
```

## Contributing
**utf8-buffer-size** welcomes all contributions from anyone willing to work in good faith with other contributors and the community. No contribution is too small and all contributions are valued.

### Style guide
**utf8-buffer-size** code should follow the Google JavaScript Style Guide:  
https://google.github.io/styleguide/jsguide.html

### Code of conduct
This project is bound by a code of conduct: The Contributor Covenant, version 1.4, available at https://www.contributor-covenant.org/version/1/4/code-of-conduct.html

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting rocha.rafaelsilva@gmail.com.

## LICENSE
Copyright (c) 2018 Rafael da Silva Rocha.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
