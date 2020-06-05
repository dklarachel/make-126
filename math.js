module.exports = {
  factorialize: function (x) {
    let result = 1;
    for (let i = 1; i < (x+1); i++) {
      result = result * i;
    }
    return result;
  },
  permRep: function (n, r) {
    return Math.pow(n, r);
  }
}