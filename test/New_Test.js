var TrySorting = require('SortingJS');

Selectionsort([6,4,9,3,1,7]); 
// => [1,3,4,6,7,9]

Selectionsort([5, 1, 12, -5, 16, 2, 12, 14]);
// => [-5, 1, 2, 5, 12, 12, 14, 16]

Selectionsort([6,4,9,3,1,7], function(a, b) { return b - a; }); 
// => [9,7,6,4,3,1]
