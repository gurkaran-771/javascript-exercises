const reverseString = function(string) {
    let stringArray = string.split("") //split basically converts strings to array
    stringArray = stringArray.reverse().join('')//reverse() reverses the string characters and join converts array to string again
    return (stringArray)
  
  };
  
  reverseString('')

// Do not edit below this line
module.exports = reverseString;
