


var possibleHex = [1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F];

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


function getNewColor() {
  var hex = '';
  for (var i = 0; i < 6; i++ ) {
    hex += `${possibleHex[getRandomIndex(possibleHex)]}`
  }
}
