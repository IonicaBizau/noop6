# noop6

This module should be avoided at all costs. It will just add more unnecessary clutter to your node_modules and is completely useless. Node.js is already not perfect and with the increasing count in downloads for this module, I recommend you read this.

The module exports as:

```js
"use strict";
module.exports = () => {};
```

which means that if you want to use this in your project, you're better off doing:

```js
var noop = (()={});
```

or in the depricated example as an in-line:

```js
let square = (x, cb) => {
    cb = cb || (()=>{});
    cb(x * x);
};
```

and that's all there is to it...

Thank you for understanding.
