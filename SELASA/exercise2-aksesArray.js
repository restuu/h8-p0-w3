function balikString(string) {
  var balikStr = '';
  for (var i = (string.length - 1); i >= 0; i--) {
    balikStr += string[i];
  }
  return balikStr;
}

balikString('Hello World!');


/*SET var balikStr to store 'string-type' element;
FOR every index of var string start from the end,
  one by one until the first index',
  input index of balikStr from the beginning with the last index of string;
END FOR;
RETURN balikStr;
