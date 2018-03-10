function dataHandling(ID) {
  var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];
  // var biodata = '';
  for (var i = 0; i < input.length; i++) {
    if (ID === input[i][0]) {
      console.log('No ID : ' + input[i][0]);
      console.log('Nama Lengkap: ' + input[i][1]);
      console.log('TTL: ' + input[i][2] + ' ' + input[i][3]);
      console.log('Hobi: ' + input[i][4]);
    }
  }
  // return dataHandling;
}

dataHandling('0002');

/*
FOR every index of array input START from the first index UNTIL the last index,
  DISPLAY 'No ID: ' plus the FIRST element of indexed array;
  DISPLAY 'Nama Lengkap: ' plus the SECOND element indexed array;
  DISPLAY 'TTL: ' plus the THIRD and FOURTH element of indexed array separated with <space>;
  DISPLAY 'Hobi: ' plus the FIFTH element of indexed array;
END FOR;
