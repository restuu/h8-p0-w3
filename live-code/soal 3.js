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

// No 3

function cutString(str) {
  return str.substr(0, 6);
}

cutString('malin kundang')
