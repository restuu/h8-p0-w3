function hitungJumlahKata(kalimat) {
  var arr = kalimat.split(' ');
  return arr.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

/*
split var kalimat at the place of ' ';
SET var arr to store the result of the split;
RETURN the length of var arr;
