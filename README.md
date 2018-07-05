# spectraa-cons
[![Build status][travis-badge]][travis-url] ![Size][size-badge] [![Version][tag-badge]][releases-url] [![Published][webcomponents-badge]][webcomponents-url]

Spectraa is a construction firm

## Installation & usage

Install spectraa-cons with Bower

```sh
$ bower i https://github.com/rvijayarajan/spectraa-cons --save
```

Import it into the `<head>` of your page

```html
<link rel="import" href="/bower_components/spectraa-cons/spectraa-cons.html">
```

Then use spectraa-cons in your project

```html
<spectraa-cons></spectraa-cons>
```

### Polyfills for cross-browser support

spectraa-cons relies on emerging standards, for full cross-browser support include the [WebComponentsJS](https://github.com/webcomponents/webcomponentsjs) polyfill on your page.

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^1.0.0/webcomponents-loader.js"></script>
```

### Transpiling for IE11 support

Web Components like spectraa-cons are distributed as ES6 classes, which are supported in all evergreen browsers. To support Internet Explorer 11 you should transpile spectraa-cons to ES5 and use the `webcomponentsjs` `custom-elements-es5-adapter.js` shim. 

The easiest way to do this is by including [polymer-build][polymer-build] in your buildstep of choice. Then just include the ES5 adapter on your page

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^1.0.0/custom-elements-es5-adapter.js"></script>
```

***

MIT © Vijay

[tag-badge]: https://img.shields.io/github/tag/https://github.com/rvijayarajan/spectraa-cons.svg
[releases-url]: https://github.com/https://github.com/rvijayarajan/spectraa-cons/releases
[travis-badge]: https://img.shields.io/travis/https://github.com/rvijayarajan/spectraa-cons.svg
[travis-url]: https://travis-ci.org/https://github.com/rvijayarajan/spectraa-cons
[size-badge]: http://img.badgesize.io/https://github.com/rvijayarajan/spectraa-cons/master/props.name .html?compression=gzip&label=size%20%28unminified%29
[webcomponents-badge]: https://img.shields.io/badge/webcomponents.org-published-blue.svg
[webcomponents-url]: https://www.webcomponents.org/element/https://github.com/rvijayarajan/spectraa-cons
[polymer-build]: https://github.com/Polymer/polymer-build
