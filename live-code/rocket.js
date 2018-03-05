function drawSymbolicColsBox(height) {
  for (var i = 1; i <= height; i++) {
    var symbol = '';
    for (var j = 1; j <= height; j++) {
      if (j % 2 !== 0) {
        symbol += '@';
      } else if (j % 2 === 0) {
        symbol += '$';
      } else if (j % 3 === 0) {
        symbol += '*'
      }
    }
  }
  console.log(symbol);
}
