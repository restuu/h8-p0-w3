function dataHandling2(input) {
  input.splice(1, 1, 'Roman Alamsyah Elsharawi');
    // input.splice(1, 1, nama);
  console.log(input);

  var ttl = input.slice(3, 4);
  var bulan = '';
  // console.log(ttl);
  switch (ttl[0].slice(3, 5)){
    case '01' :
      bulan += 'Januari'; break;
    case '02' :
      bulan += 'Februari'; break;
    case '03' :
      bulan += 'Maret'; break;
    case '04' :
      bulan += 'April'; break;
    case '05' :
      bulan += 'Mei'; break;
    case '06' :
      bulan += 'Juni'; break;
    case '07' :
      bulan += 'Juli'; break;
    case '08' :
      bulan += 'Agustus'; break;
    case '09' :
      bulan += 'September'; break;
    case '10' :
      bulan += 'Oktober'; break;
    case '11' :
      bulan += 'November'; break;
    case '12' :
      bulan += 'Desember'; break;
    default   :
      bulan += 'invalid';
  }
  console.log(bulan);

  var date = input[3].toString().split('/');
  var sortDate = [];
  for (var i = 0; i < date.length; i++) {
    sortDate[i] = parseInt(date[i], 10);
  }
  console.log(sortDate.sort(function(value1, value2){return value2 > value1}));
  console.log(sortDate.join('-'));

  var nama = input[1].slice(0, 15);
  console.log(nama);
}

console.log(dataHandling2(["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]));
