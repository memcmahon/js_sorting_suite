function bubbleSort(array) {
  for(var i = 0; i < array.length; i++) {
    for(var current = 0; current < (array.length - i - 1); current++) {
      if(array[current] > array[current+1]) {
        var holder = array[current];
        array[current] = array[current+1];
        array[current+1] = holder;
      };
    };
  };

  return(array);
};

module.exports = bubbleSort
