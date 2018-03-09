function targetTerdekat(arr) {
  var strO = arr.indexOf('o');
  var strX = arr.indexOf('x');
  var target = [];
  console.log(strX, strO);
  if (strO === -1 || strX === -1) {
    return 0;
  } else if (strX > strO) {
    target = arr.slice(strO, strX + 1)
    return target.length - 1;
  } else if (strO > strX) {
    target = arr.slice(arr.lastIndexOf('x'), strO + 1)
    return target.length - 1;
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
