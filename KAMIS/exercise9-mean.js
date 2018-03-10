function cariMean(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return Math.round(total / arr.length);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

/*
SET var total to store any interger value;
FOR every element of array arr, START from the beginning TO the last,
  ADD var total with every element;
END FOR;
divide total with the length of array arr;
RETURN rounded number of total;
