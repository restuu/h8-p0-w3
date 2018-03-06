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


drawSymbolicColsBox(3);
drawSymbolicColsBox(5);
drawSymbolicColsBox(1);
