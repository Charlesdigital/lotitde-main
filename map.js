const words = ["ground", "control", "to", "major", "tom"];

const assertArraysEqual  = function(actual, expected) {
    if (eqArrays(actual, expected)) {
          console.log( `✅✅✅ Assertion Passed ${actual} === ${expected}`);
      } else {console.log(`🛑🛑🛑 Assertion failed ${actual} !== ${expected}`)};
};

function eqArrays(array1, array2) {
    if(array1.length !== array2.length) {
        return false
    }
    for(let i = 0; i < array1.length; i++) {
      if(array1[i] !== array2[i]) {
          return false
      }
    }
    return true;
}

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
    results.push(callback(item));
    }
    return results
}
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1,["g","c","t","m","t"])


