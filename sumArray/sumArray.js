function sum (numbers) {
    "use strict";
  if(numbers===[]){
    return 0
  }
  let sum =0
    for(let i = 0; i < numbers.length; i++){
      sum=sum + numbers[i] 
    }
    return sum
    
  
    
    
};