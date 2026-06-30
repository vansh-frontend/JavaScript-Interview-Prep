// Write a Program to check whether a string is a palindrome string.

const value = "hello"
const palindrome = value.split("").reverse().join("");
if(value === palindrome){
    console.log("value is plaindrom",value,"==",palindrome);
}
else{
    console.log("value is not plaindrome: ",value,"==",palindrome);
}