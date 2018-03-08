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
