//Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
//charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
function charIndex(str, char) {
    let firstIndex = str.indexOf(char);
    let lastIndex = str.lastIndexOf(char);
    return [firstIndex, lastIndex];
}
const str1 = "hello";
const char1 = "l";
const result1 = charIndex(str1, char1);
console.log(result1); // [2, 3]

const str2 = "circumlocution";
const char2 = "c";
const result2 = charIndex(str2, char2);
console.log(result2); // [0, 8]

