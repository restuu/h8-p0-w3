function tentukanDeretGeometri(arr) {
  var gap = [];
  var bool = true;
  for (var i = 0; i < arr.length - 1; i++) {
    gap[i] = parseInt(arr[i + 1] / arr[i]);
    for (var j = 0; (j < gap.length) && (bool = true); j++) {
      bool = (gap[0] == gap[i]);
    }
    // console.log(gap);
  }
  return bool;
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
