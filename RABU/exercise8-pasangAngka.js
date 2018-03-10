function pasanganTerbesar(num) {
  var strNum = String(num);
  var arrPair = [];
  for (var i = 0; i < strNum.length - 1; i++) {
    arrPair[i] = parseInt(strNum.slice(i, i + 2));
  }
  arrPair.sort(function (value1, value2) {return value2 > value1});
  return arrPair[0];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

/*
turn element of num into String;
SET var strNum to store the result;
SET var arrPair to store [array-type] element;
FOR every element of var strNum from the first element UNTIL the last,
  set each index of array arrPair as every two element of strNum then turn each element into interger;
END FOR;
SORT arrPair in descending order;
RETURN arrPair;
