function findOutlier(numbers){
    const odd = numbers.filter(num => num %2 !== 0)
    const even = numbers.filter(num => num %2 === 0)
    return even.length === 1 ? even[0] : odd[0]
  }
  console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
  
  console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
  //should log odd 11 and even 160

  // git commit --amend --date="2023-04-22 10:30:00"