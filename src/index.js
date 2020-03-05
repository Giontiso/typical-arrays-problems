exports.min = function min (array) {
  if (!array || array.length === 0) { return 0; }
  var min_v = array[0];
  for (var i = 0; i < array.length; i++) {
      if (min_v > array[i]) min_v = array[i];
  }
  return min_v;
}

exports.max = function max (array) {
  if (!array || array.length === 0) { return 0; }
  var max_v = array[0];
  for (var i = 0; i < array.length; i++) { 
      if (max_v < array[i]) max_v = array[i]; 
  }
  return max_v;
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) { return 0; }
  var avg_v =  0;
  for (var i = 0; i < array.length; i++) { 
    avg_v += array[i];
  }

  return avg_v == 0 ? avg_v : avg_v / array.length;
}
