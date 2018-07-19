/*!
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */
/*! https://mths.be/codepointat v0.2.0 by @mathias */
String.prototype.codePointAt||function(){"use strict";var t=function(){try{var t={},e=Object.defineProperty,r=e(t,t,t)&&e}catch(t){}return r}(),e=function(t){if(null==this)throw TypeError();var e=String(this),r=e.length,n=t?Number(t):0;if(n!=n&&(n=0),!(n<0||n>=r)){var o,i=e.charCodeAt(n);return i>=55296&&i<=56319&&r>n+1&&(o=e.charCodeAt(n+1))>=56320&&o<=57343?1024*(i-55296)+o-56320+65536:i}};t?t(String.prototype,"codePointAt",{value:e,configurable:!0,writable:!0}):String.prototype.codePointAt=e}(),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.utf8BufferSize=e()}(this,function(){"use strict";return function(t){let e=0;for(let r=0,n=t.length;r<n;r++){let n=t.codePointAt(r);n<128?e++:(n<=2047?e++:n<=65535?e+=2:n<=1114111&&(r++,e+=3),e++)}return e}});
