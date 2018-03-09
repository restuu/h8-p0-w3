function tentukanDeretAritmatika(arr) {
  var gap = [];
  var bool = true;
  for (var i = 0; i < arr.length - 1; i++) {
    gap[i] = parseInt(arr[i + 1] - arr[i]);
    for (var j = 0; (j < gap.length) && (bool = true); j++) {
      bool = (gap[0] == gap[i]);
    }
  }
  return bool;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
