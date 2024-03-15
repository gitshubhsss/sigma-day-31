//find the largest numeber in an array with only positive number
let arr=[4,8,9,5,8,9,7];
const getMax=(prev,curr)=>Math.max(prev,curr);
let larg=arr.reduce(getMax);
console.log(larg);

//their could be another way using for loop

let nums=[4,98,895,8945,954,6548,654];
let largest=0;
for(i=0;i<nums.length;i++){
   if(largest<nums[i]){
    largest=nums[i];
   }
}
console.log(largest);