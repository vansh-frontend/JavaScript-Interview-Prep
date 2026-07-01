// found duplicacy in array
// custom array
const arr = [1,2,3,4,5];
console.log("actual array:",arr)

// filled duplicate values 10 at index 1 to 4
arr.fill(10, 1, 4);
console.log("added duplicated values:",arr)

// loop for finding duplicate values in array
for(let i = 0;i<arr.length;i++){
    for(let j = i + 1; j<arr.length;j++){
        if(arr[i] === arr[j]){
            console.log("duplicate value at index",[i,j],"value is: ",arr[i])
        }
    }
}
