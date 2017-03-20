
# noop6

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/noop6.svg)](https://www.npmjs.com/package/noop6) [![Downloads](https://img.shields.io/npm/dt/noop6.svg)](https://www.npmjs.com/package/noop6)

> No operation as a module using an arrow function.

## :cloud: Installation

```sh
$ npm i --save noop6
```


## :clipboard: Example



```js
const noop = require("noop6");

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
```

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`3abn`](https://github.com/IonicaBizau/3abn#readme)—A 3ABN radio client in the terminal.
 - [`assured`](https://github.com/IonicaBizau/assured#readme)—Combine promises and callbacks together.
 - [`asyncer.js`](https://github.com/IonicaBizau/asyncer.js#readme)—Run groups of (a)sync functions.
 - [`bloggify-ajs-renderer`](https://github.com/IonicaBizau/bloggify-ajs-renderer#readme)—ajs renderer for Bloggify.
 - [`bloggify-js-renderer`](https://github.com/IonicaBizau/bloggify-js-renderer#readme)—js renderer for Bloggify.
 - [`bloggify-pug-renderer`](https://github.com/IonicaBizau/bloggify-pug-renderer#readme)—pug renderer for Bloggify.
 - [`bloggify-redirect`](https://github.com/Bloggify/redirect#readme)—A Bloggify plugin to handle the link redirects.
 - [`custom-return`](https://github.com/IonicaBizau/custom-return#readme)—Generate a function that returns a constant.
 - [`fn-wrap`](https://github.com/IonicaBizau/fn-wrap#readme)—Function wrapping utility.
 - [`fortran`](https://github.com/IonicaBizau/node-fortran)—Fortran bridge for Node.js which allows you to run Fortran code from Node.js.
 - [`function.name`](https://github.com/IonicaBizau/function.name#readme)—Function name shim (especially for supporting function names in Internet Explorer).
 - [`image-parser`](https://github.com/IonicaBizau/image-parser#readme)—An image parser that works.
 - [`lien`](https://github.com/LienJS/Lien)—Another lightweight NodeJS framework. Lien is the link between request and response objects.
 - [`lwipify`](https://github.com/IonicaBizau/lwipify#readme)—Convert images in lwip objects.
 - [`nodeice`](https://github.com/IonicaBizau/nodeice)—Another PDF invoice generator
 - [`pull-from-source`](https://github.com/IonicaBizau/pull-from-source#readme)—Pulls the changes from the source repository in the forked one.
 - [`rucksack`](https://github.com/IonicaBizau/rucksack-new#readme)—JavaScript and CSS bundler.
 - [`tithe`](https://github.com/IonicaBizau/tithe)—Organize and track the tithe payments.
 - [`transformer`](https://github.com/IonicaBizau/transformer#readme)—Transform data using synchronous and asynchronous functions.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
