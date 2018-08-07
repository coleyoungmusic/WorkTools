function lowerCase(id) {
  // Use the .toLowerCase() call
  var string = document.getElementById(id).value;
  var converted = document.getElementById(id).value = string.toLowerCase();
}

function titleCase(id) {
  var string = document.getElementById(id).value.toLowerCase().split(' ');
  for (var i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    var converted = document.getElementById(id).value = string.join(' ');
  }
}
