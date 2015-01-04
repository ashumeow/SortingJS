function SelectionSort() {
'use strict';

function compare(a, b) {
  return a - b;
}

module.exports = function (array, compareFunction) {

  var min = 0;
  var index = 0;
  var temp = 0;

  compareFunction = compareFunction || compare;

  for (var i = 0; i < array.length; i += 1) {
    index = i;
    min = array[i];

    for (var j = i + 1; j < array.length; j += 1) {
      if (compareFunction(min, array[j]) > 0) {
        min = array[j];
        index = j;
      }
    }

    temp = array[i];
    array[i] = min;
    array[index] = temp;
  }

  return array;
};
}
