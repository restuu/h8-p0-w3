function drawSymbolicColsBox(height) {
  var symbol = '';
  for (var i = 1; i <= height*height; i++) {
    if ((i % 2 !== 0 && i % 3 === 0) || (i % 2 === 0 && i % 3 === 0)) {
        symbol += '*';
      } else if (i % 2 !== 0) {
        symbol += '@';
      } else if (i % 2 === 0) {
        symbol += '$';
      }
  }
  var rowSymbol = '';
  for (var j = 1; j <= symbol.length; j++){
    if (j % height === 0){
      rowSymbol += symbol[j-1]+'\n';
    } else {
      rowSymbol += symbol[j-1]+' ';
    }
  }
  console.log(rowSymbol);
}

function drawSymbolicColsBox(height) {
  var number = 0;                             //number di luar maka perhitungan dilanjutkan
  for (var i = 0; i < height; i++) {
    var str = '';                             //str di luar agar loop 'i' selanjutnya perhitungan di reset
    for (var j = 0; j < height; j++) {
      number ++;
      if (number % 3 === 0) {
        str += '* ';
      } else if (number % 2 === 0) {
        str += '$ ';
      } else {
        str += '@ ';
      }
    }
    console.log(str);
  }



drawSymbolicColsBox(3);
drawSymbolicColsBox(5);
drawSymbolicColsBox(1);
