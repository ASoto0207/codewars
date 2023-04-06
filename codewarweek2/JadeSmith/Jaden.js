// array map method 
//toUpperCase
// slice method
// join method
// charAt method 

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function () {
    const jaden = this.split(' '); 
    const capWords = jaden.map(jaden => jaden.charAt(0).toUpperCase()+ jaden.slice(1));
    return capWords.join(' ');
  };