function palindrome(kata) {
  var balikKata = '';
  for (var i = kata.length - 1; i >= 0; i--) {
    balikKata += kata[i];
  }
  return kata === balikKata;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false


/*
SET var balikKata to store 'string-type' element;
FOR every element of array kata, START from the end UNTIL the first element,
  input the each element to var balikKata start from the beginning;
END FOR;
RETURN true when element of kata is equals with balikKata,
RETURN false when element of kata is different with balikKata; 
