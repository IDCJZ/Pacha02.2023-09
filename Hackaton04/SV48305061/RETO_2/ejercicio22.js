/*Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO"

*/
function capLast(palabra) {
let result = [];
let words = palabra.split(" ");
   
    for (let word of words) {
    
      let len = word.length;
     
      let last = word[len - 1].toUpperCase();
      
      let rest = word.slice(0, len - 1);
      
      result.push(rest + last);
    }
    return result.join(" ");
  } 
  console.log(capLast("hello"));