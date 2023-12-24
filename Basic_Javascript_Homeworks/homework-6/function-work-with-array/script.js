function givenArrayOfStrings(arrayOfStrings) {
    if (!Array.isArray(arrayOfStrings)) {
      return "Input is not an array.";
    }
  
    let resultString = "";
  
    for (let i = 0; i < arrayOfStrings.length; i++) {
      resultString += arrayOfStrings[i];
      if (i < arrayOfStrings.length - 1) {
        resultString += " ";
      }
    }
  
    return resultString;
  }
  
  let inputArray = ["Hello", "there", "students", "of", "SEDC", "!"];
  let result = givenArrayOfStrings(inputArray);
  console.log(result);