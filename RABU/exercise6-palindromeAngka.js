function angkaPalindrome(num) {
  var strNum = num.toString();
  var revNum = '';
  for (var i = 0; strNum != revNum; i++){
    num++;
    strNum = num.toString();

    var backStr = '';
    for (var j = strNum.length - 1; j >= 0; j--){
      backStr += strNum[j];
      revNum = backStr;
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
