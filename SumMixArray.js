function sumMix(x){
    let sum = 0; 
    for(let i = 0; i < x.length; i++){
      sum += Number(x[i]); 
    }
     return sum; 
  
  }
  let x = [200, '100', 75,'56',13,'45']; 
  let result = sumMix(x); 
  console.log(result); 
  // total is 489. 