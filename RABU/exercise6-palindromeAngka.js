function angkaPalindrome(num) {
  var strNum = num.toString();
  var revNum = '';
  for (var i = 0; strNum != revNum; i++){
    num++;
    strNum = num.toString();

    var backStr = '';       //var ini agar loop nya ter reset
    for (var j = strNum.length - 1; j >= 0; j--) {
      backStr += strNum[j];
      revNum = backStr;     //masukkan hasilnya ke variable yg global
    }
  }
  return parseInt(revNum)
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

/*
change num to string type element;
SET var strNum to store the changed value;
SET var revNum to store new 'string-type' element;
FOR every value of strNum that is not equal to revNum,
  add the value of num by one,
  store the new string value of num into strNum,
  SET var backStr to store 'string-type' element,
  FOR every char of strNum START from the back UNTIL the front,
    ADD the char into backStr START from the front;
    STORE the result into var revNum;
  END FOR;
END FOR;
RETURN the value of revNum that has been changed into interger;
