var SortingJS = function() {
	'use strict';

// Selection Sort

var SelectionSort = function() {

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
};

// Buuble Sort

var BubbleSort = function() {

function comparator(a, b) {
  return a - b;
}
module.exports = function (arr, cmp) {
  cmp = cmp || comparator;
  var temp;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j > 0; j--) {
      if (cmp(arr[j], arr[j - 1]) < 0) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}; };

// Merge Sort

var MergeSort = function() {
    function compare(a, b) {
      return a - b;
    }
    function mergesort(array, start, end, cmp) {
      if (Math.abs(end - start) <= 1) {
        return [];
      }
      var middle = Math.ceil((start + end) / 2);
      mergesort(array, start, middle, cmp);
      mergesort(array, middle, end, cmp);
      return merge(array, start, middle, end, cmp);
    }
    function merge(array, start, middle, end, cmp) {
      var left = [],
          right = [],
          leftSize = middle - start,
          rightSize = end - middle,
          maxSize = Math.max(leftSize, rightSize),
          size = end - start,
          i;
      for (i = 0; i < maxSize; i += 1) {
        if (i < leftSize) {
          left[i] = array[start + i];
        }
        if (i < rightSize) {
          right[i] = array[middle + i];
        }
      }
      i = 0;
      while (i < size) {
        if (left.length && right.length) {
          if (cmp(left[0], right[0]) > 0) {
            array[start + i] = right.shift();
          } else {
            array[start + i] = left.shift();
          }
        } else if (left.length) {
          array[start + i] = left.shift();
        } else {
          array[start + i] = right.shift();
        }
        i += 1;
      }
      return array;
    }
    return function(array, cmp) {
      cmp = cmp || compare;
      return mergesort(array, 0, array.length, cmp);
    };
  };

  // Insertion Sort

  var insertionSort = function(array, cmp) {
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
};

// Heap Sort

var heapSort = function() {
    function comparator(a, b) {
      return a - b;
    }
    function heapify(array, index, heapSize, cmp) {
      var left = 2 * index + 1,
          right = 2 * index + 2,
          largest = index;
      if (left < heapSize && cmp(array[left], array[index]) > 0) {
        largest = left;
      }
      if (right < heapSize && cmp(array[right], array[largest]) > 0) {
        largest = right;
      }
      if (largest !== index) {
        var temp = array[index];
        array[index] = array[largest];
        array[largest] = temp;
        heapify(array, largest, heapSize, cmp);
      }
    }
    function buildMaxHeap(array, cmp) {
      for (var i = Math.floor(array.length / 2); i >= 0; i -= 1) {
        heapify(array, i, array.length, cmp);
      }
      return array;
    }
    return function(array, cmp) {
      cmp = cmp || comparator;
      var size = array.length,
          temp;
      buildMaxHeap(array, cmp);
      for (var i = array.length - 1; i > 0; i -= 1) {
        temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        size -= 1;
        heapify(array, 0, size, cmp);
      }
      return array;
    };
  };

  // QuickSort

    var QuickSort = function () {
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
  //The End
};
