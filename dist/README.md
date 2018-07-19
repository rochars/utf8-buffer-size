# Distribution
This library is a ES module also distributed as a CommonJS module, UMD module and a compiled script for browsers. It works out of the box in Node when installed with ```npm install utf8-buffer-size```. It includes a [TypeScript](https://www.typescriptlang.org/) definition file: **./main.d.ts**.

If you use the [Closure Compiler](https://github.com/google/closure-compiler), this package includes a externs file: **./externs/utf8-buffer-size.js**.

## If you are using this lib in a browser:

You may load both **./dist/utf8-buffer-size.umd.js** and **./dist/utf8-buffer-size.min.js** in the browser with ```<script>``` tags. Ideally you should use **utf8-buffer-size.min.js**. You can load it via the https://unpkg.com and https://www.jsdelivr.com/ CDNs:

[unpkg](https://unpkg.com/utf8-buffer-size):
```html
<script src="https://unpkg.com/utf8-buffer-size"></script>
```

[jsDelivr](https://cdn.jsdelivr.net/npm/utf8-buffer-size):
```html
<script src="https://cdn.jsdelivr.net/npm/utf8-buffer-size"></script>
```

## Explanation of the dist files:

- The **CommonJS** dist is **./dist/utf8-buffer-size.cjs.js**. It is the dist file used by Node. It is served in the "main" field of package.json and is the source you are running when you **npm install utf8-buffer-size**. It is not compiled or minified.

- The **UMD** module is **./dist/utf8-buffer-size.umd.js**. It is transpiled to ES5 and compatible with Node, AMD and browsers. It is served in the "browser" field of package.json.

- The **browser-only** dist is **./dist/utf8-buffer-size.min.js**. It is transpiled to ES5 and compiled. It is used in the "unpkg" and "jsdelivr" fields of package.json. It includes polyfills for ES6 methods so this lib can run in old browsers.

- The **ES6 bundle** is **./dist/utf8-buffer-size.js**, served as "es2015" in package.json. It is not compiled/minified.

- **./main.js** is served as "module" in package.json. This should be the entry point for bundlers.

If your module bundler is using "browser" as the entry point **your dist should work the same** but will be a larger file.

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
