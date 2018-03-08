// No 1

function addTittle(name1, name2, name3, name4) {
  return 'Mr. ' + name1 + ', ' + 'Mr. ' + name2 + ', ' + 'Mr. ' + name3 + ', ' + 'Mr. ' + name4 + ', '
}

addTittle('Arata Kaizaki', 'Hikigaya', 'Saika Totsuka', 'Hideyoshi')

// No 2

function changeSpaceWith(str, to) {
  var space = str.indexOf(' ');
  return str.substr(0, space) + to + str.substr(space + 1)
}

changeSpaceWith('Steve Fox', '-')

// Non-magic

function changeSpaceWith(str, to) {
  var word = '';
  for (var i = 0; i < str.length; i++) {
   if (str[i] === ' ') {
     word += to
   } else {
     word += str[i]
   }
  }
  return word;
}

changeSpaceWith('Steve Fox', '-')

// No 3

function cutString(str) {
  return str.substr(0, 6);
}

cutString('malin kundang')

// Non-magic

function cutString(str) {
  var cutWord = '';
  for (var i = 0; i < 6; i++) {
   cutWord += str[i];
  }
  return cutWord;
}

cutString('malin kundang')
