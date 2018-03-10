function perkalianUnik(arr) {
  var arrCut = [];   //temporary store arr element
  var arrTime = [];
  for (var i = 0; i < arr.length; i++) {
    arrCut[0] = parseInt(arr.splice(i, 1));
    var timer = 1;
    for (var j = 0; j < arr.length; j++) {
      timer *= arr[j];
    }
    arrTime[i] = timer;
    arr.splice(i, 0, arrCut[0]);
  }
  return arrTime;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]



//short method

function calculationTimes(arr1) {
  var arrTime = [];
  for (var i = 0; i < arr1.length; i++) {
    var anchor =  arr1[i];
    var timer = 1;
    for (var j = 0; j < arr1.length; j++) {
      if (anchor !== arr1[j]) {
        timer *= arr1[j];
      };
    };
    arrTime[i] = timer;
  }
  return arrTime;
}

console.log(calculationTimes([2, 4, 6])); // [24, 12, 8]


/*
SET var arrTime to store array-type element;
FOR every element of arr1, START from the beginning to the last,
  SET var anchor as indexed element of arr1;
  SET var timer as 1 to calculate multiplication;
  FOR every element of arr1, START from the beginning to the last,
    IF anchor is not equal to indexed arr1, THEN
    multiply timer with every indexed arr1's element;
  END FOR;
  set each element of arrTime with the result of multiplication;
END FOR;
RETURN the value of arrTime;
