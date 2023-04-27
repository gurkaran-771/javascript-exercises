// let b = Math.floor(Math.random() * 1000)
const repeatString = function(a,b) {
  
    
    if (b < 0) { return 'ERROR'}
  let result = ''; //here we are initialising a variable that will hold the value of arguement.
  for(let i=0; i<b;i++) //this determines the number of times a loop will run
{
   result = result+a // here everytime loop runs the arguement a keeps getting added to the result variable we initialised
}
return result // we return the final value of functon here.
};
repeatString('', 10)
// Do not edit below this line
module.exports = repeatString;
