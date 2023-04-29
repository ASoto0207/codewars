//Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.


function smaller(nums) {
let small = nums.length;
let all = new Array(small).fill(0);
  
  for(let i = 0; i < small; i++){
    for(let d = i + 1; d < small; d++){
    if(nums[d] < nums[i]){
      all[i]++; 
    }
    }
  }
  return all
}