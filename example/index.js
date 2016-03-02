"use strict";

const noop = require("../lib");

noop();
// Nothing happened, yay!

let square = (x, cb) => {
    cb = cb || noop;
    cb(x * x);
};

square(42, r => {
    console.log(r);
    // => 1764
});

// No error, even we don't send the callback function
square(42);
