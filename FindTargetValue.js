// find taget value


const nums = [1, 2, 7, 1];
const target = 8;

     console.log("given array is : ",nums);
        console.log("targget value is: ",target)

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {

    if (nums[i] + nums[j] === target) {
    console.log("index number: ",[i,j],"values are : ", (nums[i]),"+",(nums[j]) ,"=",(nums[i]) + (nums[j]))
    }

  }
}

// for 3 

// const nums = [1, 3, 4, 5, 7];
// const target = 10;

// // ---------- Two Sum ----------
// console.log("Two Sum");

// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {

//     if (nums[i] + nums[j] === target) {
//       console.log(
//         `Indices: [${i}, ${j}]`,
//         `Values: ${nums[i]} + ${nums[j]} = ${target}`
//       );
//     }

//   }
// }

// // ---------- Three Sum ----------
// console.log("\nThree Sum");

// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     for (let c = j + 1; c < nums.length; c++) {

//       if (nums[i] + nums[j] + nums[c] === target) {
//         console.log(
//           `Indices: [${i}, ${j}, ${c}]`,
//           `Values: ${nums[i]} + ${nums[j]} + ${nums[c]} = ${target}`
//         );
//       }

//     }
//   }
// }




