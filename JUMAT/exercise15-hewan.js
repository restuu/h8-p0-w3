function groupAnimals(animals) {
  animals.sort();
  var group = [[animals[0]]];     //there must be an array within array,
  // console.log(animals);        //because it'll be grouped within an array
  // console.log(group);
  var element = 0;                // to declare which index array within group[] to put into
  for (var i = 1; i < animals.length; i++) {
    if (animals[i - 1].charAt(0) !== animals[i].charAt(0)) {
      element++;
      group[element] = [];        //if next element is diff.,
    }                             //then close the current index array then creat new array in front
    group[element].push(animals[i]);
  }
  return group;;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
