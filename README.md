# [![Build Status][travis-image]][travis-url]
[travis-url]: https://travis-ci.org/ashumeow/SortingJS
[travis-image]: https://travis-ci.org/ashumeow/SortingJS.svg?branch=master

> <b>SortingJS</b> is based on Addy Osmani's works <a href="https://github.com/addyosmani/selectionsort">[1]</a>, <a href="https://github.com/addyosmani/bubblesort">[2]</a>... For more, refer [javascript-algorithms](https://github.com/mgechev/javascript-algorithms "Javascript Algorithms").

## Install

```sh
$ npm install --save SortingJS
```


## Usage

```js
var SelectionSort = require('SortingJS');

Selectionsort([6,4,9,3,1,7]); 
// => [1,3,4,6,7,9]

Selectionsort([5, 1, 12, -5, 16, 2, 12, 14]);
// => [-5, 1, 2, 5, 12, 12, 14, 16]

Selectionsort([6,4,9,3,1,7], function(a, b) { return b - a; }); 
// => [9,7,6,4,3,1]
```

```js
var BubbleSort = require('SortingJS');

BubbleSort([6,4,9,3,1,7]); 
// => [1,3,4,6,7,9]

BubbleSort([5, 1, 12, -5, 16, 2, 12, 14]);
// => [-5, 1, 2, 5, 12, 12, 14, 16]

BubbleSort([6,4,9,3,1,7], function(a, b) { return b - a; }); 
// => [9,7,6,4,3,1]
```

```js
var MergeSort = require('SortingJS');

MergeSort([6,4,9,3,1,7]); 
// => [1,3,4,6,7,9]

MergeSort([5, 1, 12, -5, 16, 2, 12, 14]);
// => [-5, 1, 2, 5, 12, 12, 14, 16]

MergeSort([6,4,9,3,1,7], function(a, b) { return b - a; }); 
// => [9,7,6,4,3,1]
```

```js
var InsertionSort = require('SortingJS');

InsertionSort([6,4,9,3,1,7]); 
// => [1,3,4,6,7,9]

InsertionSort([5, 1, 12, -5, 16, 2, 12, 14]);
// => [-5, 1, 2, 5, 12, 12, 14, 16]

InsertionSort([6,4,9,3,1,7], function(a, b) { return b - a; }); 
// => [9,7,6,4,3,1]
```

```js
var HeapSort = require('SortingJS');

HeapSort([6,4,9,3,1,7]); 
// => [1,3,4,6,7,9]

HeapSort([5, 1, 12, -5, 16, 2, 12, 14]);
// => [-5, 1, 2, 5, 12, 12, 14, 16]

HeapSort([6,4,9,3,1,7], function(a, b) { return b - a; }); 
// => [9,7,6,4,3,1]
```

```js
var QuickSort = require('SortingJS');

QuickSort([6,4,9,3,1,7]); 
// => [1,3,4,6,7,9]

QuickSort([5, 1, 12, -5, 16, 2, 12, 14]);
// => [-5, 1, 2, 5, 12, 12, 14, 16]

QuickSort([6,4,9,3,1,7], function(a, b) { return b - a; }); 
// => [9,7,6,4,3,1]
```

MIT © [Aswini S](https://twitter.com/ashumeow)
