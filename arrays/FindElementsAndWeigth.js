//  Find two elements in an array that add up to a numner.

function findSum(arr, weight) {
   for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === weight) {
        return [i, j];
      }
    }
  }
  return -1;
}

function findSumBetter(arr, weight) {
  const hashtable = {};

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let difference = weight - currentElement;

    // check the right one already exists
    if(hashtable[difference] != undefined) {
      return [i, hashtable[difference]];
    } else {
      // store index
      hashtable[currentElement] = i;
    }
  }
  return -1;
}

const arr = [4, 2, 7, 5, 1];
const weight = 9;
const result = findSumBetter(arr, weight);
const resultn2 = findSum(arr, weight);
console.log("Result: ", result);
console.log("Result n2: ", resultn2);