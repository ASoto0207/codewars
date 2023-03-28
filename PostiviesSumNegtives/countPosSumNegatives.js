function countPositivesSumNegatives(numbers){
    if(!numbers || numbers.length === 0){
      return[];
     
    }
    let positiveNumber= 0;
    let negativeNumber=0;
    for (let i=0; i < numbers.length; i++){
      if(numbers[i]>0){
        positiveNumber++;
      }
      else if(numbers[i]<0){
        negativeNumber += numbers[i]
  }
      
    }
    return[positiveNumber,negativeNumber]; 
  }