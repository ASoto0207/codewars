//Factorials are often used in probability and are used as an introductory problem for looping constructs. In this kata you will be summing together multiple factorials.
// In this kata you will be given a list of values that you must first find the factorial, and then return their sum.

// For example if you are passed the list [4, 6] the equivalent mathematical expression would be 4! + 6! which would equal 744.
function sumFactorial(arr){
    // for loop 
    let numbers = 0; 
    for(let num of arr){
      let fact = 1; 
      for(let i =1; i <= num; i++){
        fact *= i ;
      }
      numbers += fact; 
    }
    return numbers 
  }
  console.log(sumFactorial([4,6]));