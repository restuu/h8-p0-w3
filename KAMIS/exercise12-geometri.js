function tentukanDeretGeometri(arr) {
  var gap = [];
  var bool = true;
  for (var i = 0; i < arr.length - 1; i++) {
    gap[i] = arr[i + 1] / arr[i];
    for (var j = 0; (j < gap.length) && (bool === true); j++) {
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


/*
SET var gap to store the difference of each element in arr;
SET var bool with the value of boolean true;
FOR every element of arr from the beginning to the last,
  divide each element with the element next to it;
  SET the result as the value of var gap on each index;
  FOR every index of var gap from the beginning until tha last index,
  and as long as the value of var bool is true,
    check the value of indexed gap whether it is equal to first index of gap,
    STORE the value to var gap;
  END FOR;
END FOR;
RETURN the value of var bool.
