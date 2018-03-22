function tentukanDeretAritmatika(arr) {
  var gap = [];
  var bool = true;
  for (var i = 0; i < arr.length - 1; i++) {
    gap[i] = arr[i + 1] - arr[i];
    for (var j = 0; (j < gap.length) && (bool === true); j++) {       //use === to check the value
      bool = (gap[0] == gap[j]);
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

/*
SET var gap to store the difference of each element in arr;
SET var bool with the value of boolean true;
FOR every element of arr from the beginning to the last,
  calculate the difference of each element with the element next to it;
  SET the result as the value of var gap on each index;
  FOR every index of var gap from the beginning until tha last index,
  and as long as the value of var bool is true,
    check the value of indexed gap whether it is equal to first index of gap,
    STORE the value to var gap;
  END FOR;
END FOR;
RETURN the value of var bool.
