module.exports = {
  equalArrays: function (arr1, arr2) {
    let counter = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] == arr2[i]) {
        counter++;
      }
    }
    if (counter == arr1.length) {
      return true;
    } else {
      return false;
    }
  },
}

