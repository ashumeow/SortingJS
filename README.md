# [![Build Status][travis-image]][travis-url]
[travis-url]: https://travis-ci.org/ashumeow/SortingJS
[travis-image]: https://travis-ci.org/ashumeow/SortingJS.svg?branch=master

> <b>SortingJS</b> is based on Addy Osmani's works <a href="https://github.com/addyosmani/selectionsort">[1]</a>, <a href="https://github.com/addyosmani/bubblesort">[2]</a>

## Install

```sh
$ npm install --save SortingJS
```


## Usage

```js
var TrySorting = require('SortingJS');

Selectionsort([6,4,9,3,1,7]); 
// => [1,3,4,6,7,9]

Selectionsort([5, 1, 12, -5, 16, 2, 12, 14]);
// => [-5, 1, 2, 5, 12, 12, 14, 16]

Selectionsort([6,4,9,3,1,7], function(a, b) { return b - a; }); 
// => [9,7,6,4,3,1]
```

For more, refer [javascript-algorithms](https://github.com/mgechev/javascript-algorithms "Javascript Algorithms").

MIT © [Aswini S](https://twitter.com/ashumeow)
