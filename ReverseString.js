// Write a Program to reverse a string in JavaScript.

const str = "vansh";

const reversestr = str.split("").reverse().join("");

console.log("actual value: ",str);
console.log("reversed value: ",reversestr);

console.log("===============================================================================");

// more than one string
const strr = "vansh dhalor"

const reversestrr = strr.split(" ").map(word => word.split("").reverse().join("")).join(" ");

console.log("actual value: ",strr);
console.log("reversed value: ",reversestrr);

