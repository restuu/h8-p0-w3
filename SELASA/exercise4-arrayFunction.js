function dataHandling2(id) {
  var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

  if (id === 1) {
    input[1] = input[1] + 'Elsharawy';
    // input.splice(1, 1, nama);
    console.log(input);
  } else if (id === 2) {
    var ttl = input.slice(3, 4);

    switch (ttl[0].slice(3, 5)){
      case '01' :
        console.log('Januari'); break;
      case '02' :
        console.log('Februari'); break;
      case '03' :
        console.log('Maret'); break;
      case '04' :
        console.log('April'); break;
      case '05' :
        console.log('Mei'); break;
      case '06' :
        console.log('Juni'); break;
      case '07' :
        console.log('Juli'); break;
      case '08' :
        console.log('Agustus'); break;
      case '09' :
        console.log('September'); break;
      case '10' :
        console.log('Oktober'); break;
      case '11' :
        console.log('November'); break;
      case '12' :
        console.log('Desember'); break;
      default   :
        console.log('invalid');
    }
  } else if (id === 3) {
    var date = input[3].toString().split('/');
    var sortDate = [];
    for (var i = 0; i < date.length; i++) {
      sortDate[i] = parseInt(date[i], 10);
    }
    console.log(sortDate.sort(function(value1, value2){return value2 > value1}));
  } else if (id === 4) {
    var date = input[3].toString().split('/');
    var sortDate = [];
    for (var i = 0; i < date.length; i++) {
      sortDate[i] = parseInt(date[i], 10);
    }
    console.log(sortDate.join('-'));
  } else if (id === 5) {
    var nama = input[1];
    console.log(nama);
  }
}

dataHandling2(4);
