function balikString(string) {
  var balikStr = '';
  for (var i = (string.length - 1); i >= 0; i--) {
    balikStr += string[i];
  }
  return balikStr;
}

balikString('Hello World!');
