// find taget index

const arr = [1, 2, 3, 4, 5];
const target = 3;

for(let i = 0;i<arr.length;i++){
    if(arr[i] === target){
        console.log("value",arr[i], "found at index:", i);
        break;
    }
}
