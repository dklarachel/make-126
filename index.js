// import functions 
var math = require('./math');
var factorialize = math.factorialize;
var permRep = math.permRep;

var arrFuncs = require('./arrays');
var equalArrays = arrFuncs.equalArrays;

function permNoRep (n, r) {
  return ((factorialize(n))/(factorialize(n-r)));
}

// check if items in an array repeats
function repeats (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let a = i+1; a < arr.length; a++) {
      if (equalArrays(arr[i], arr[a])) {
        return 'repeat';
      }
    }
  }
  return 'no repeat';
}

/*
// check if function is imported
console.log(arrFuncs.equalArrays);

*/

var operations = ['+', '-', '/', '*'], opCombArr = []; 
var numbers = [200, 5, 4, 2, 6], numCombArr = [];
var expression = ''; 
var result; 
// var num, op; 

// get one combination
function makeComb (i, type, rep) {
  let item, index, combArr = [];
  for (let a = 0; a < type.length; a++) {
    index = Math.floor(Math.random() * type.length);
    item = type[index];
    if (!rep) {
      while (combArr.includes(item)) {
        index = Math.floor(Math.random() * type.length);
        item = type[index];
      }
    }
    combArr.push(item);
  }
  return combArr;
}

// check if arrray includes array
function includesArray (arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (equalArrays(arr[i], item)) {
      return true;
    }
  }
  return false;
}

function opCombs () {
  let comb, repeated;
  for (let i = 0; i < permRep(4, 4); i++) {
    // dont' repeat combinations
    comb = makeComb(i, operations, true);
    while (includesArray(opCombArr, comb)) {
      comb = makeComb(i, operations, true);
    }
      opCombArr.push(comb);
    }
  //console.log(repeats(opCombArr), opCombArr);
  return opCombArr;
}

function numCombs () {
  let comb, repeated;
  for (let i = 0; i < permNoRep(5, 5); i++) {
    // dont' repeat combinations
    comb = makeComb(i, numbers, false);
    while (includesArray(numCombArr, comb)) {
      comb = makeComb(i, numbers, false);
    }
      numCombArr.push(comb);
    }
  //console.log(repeats(numCombArr), numCombArr);
  return numCombArr;
}


/*
1. for loop through opCombArr
2. for every possible operation combination, loop through all of numCombs
3. add items from each array into a new empty string
4. un string the string

EXAMPLE

var one = [1, 2, 3, 4];
var two = ['+', '-', '/'];

var string = '';
var ex;

  for (let a = 0; a < one.length; a++) {
    var oplength = two.length;
    var char ;
    char = one[a];
    string += char;
    if (a < oplength) {
      char = two[a];
      string += char;
    }
  }

  ex = eval(string);

console.log(ex);

//opCombs();
//numCombs();

*/



function make126 (){
  opCombs();
  numCombs();
  let opArr, numArr, char;
  let opLength = 4;
  for (let i = 0; i < opCombArr.length; i++) {
    opArr = opCombArr[i];
    for (let a = 0; a < numCombArr.length; a++) {
      numArr = numCombArr[a];
      for (let x = 0; x < numArr.length; x++) {
        char = numArr[x];
        expression += char;
        if (x < opLength) {
          char  = opArr[x];
          expression += char;
        }
      }
      result = eval(expression);
      if (result == 126) {
        console.log(expression);
      }
      expression = '';
    }
  }
}

make126();
