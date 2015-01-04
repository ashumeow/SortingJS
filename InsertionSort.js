function insertionSort(array, cmp) {
  'use strict';
  function compare(a, b) {
    return a - b;
  }
  cmp = cmp || compare;
  var current, j;
  for (var i = 1; i < array.length; i += 1) {
    current = array[i];
    j = i - 1;
    while (j >= 0 && cmp(array[j], current) > 0) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = current;
  }
  return array;
}
