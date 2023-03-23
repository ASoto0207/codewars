function countPositivesSumNegatives(arr){
    if !arr(arr || arr.length ===0){
        return[]; 
    }
    let positiveCount =0;
    let negativeSum=0;

    for(let i=0; i < arr.length; i++){
        if(arr[i]>0){
            positiveCount++;
        }
        else if(arr[i]<0){
            negativeSum += arr[i];
        }
    }
    return[positiveCount, negativeSum]

}