// make a set of unique values from an array
// function uniqueValues(arr) {
//   return [...new Set(arr)];
// }
// console.log(uniqueValues([1, 2, 3, 4, 4, 5, 5, 6])); // [1, 2, 3, 4, 5, 6]


const arr = [1,2,2,3,4,4,5,4,5,6,7,8,9,10];
const set = [...new Set(arr)];
console.log(set.toString()); 