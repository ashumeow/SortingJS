  var QuickSort = function () {
  'use strict';
    function compare(a, b) {
      return a - b;
    }
    function partition(array, left, right, compare) {
      var cmp = array[right - 1],
          minEnd = left,
          maxEnd;
      for (maxEnd = left; maxEnd < right - 1; maxEnd += 1) {
        if (compare(array[maxEnd], cmp) < 0) {
          swap(array, maxEnd, minEnd);
          minEnd += 1;
        }
      }
      swap(array, minEnd, right - 1);
      return minEnd;
    }
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      return array;
    }
    function quickSort(array, left, right, cmp) {
      if (left < right) {
        var p = partition(array, left, right, cmp);
        quickSort(array, left, p, cmp);
        quickSort(array, p + 1, right, cmp);
      }
      return array;
    }
    return function (array, cmp) {
      cmp = cmp || compare;
      return quickSort(array, 0, array.length, cmp);
    };
  };
