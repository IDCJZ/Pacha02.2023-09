//Cree una función que capitalice la última letra de cada palabra.
//capLast("hello") ➞ "hellO"
function capLast(str) {
    let words = str.split(" ");
    let newWords = words.map(word => word.slice(0, -1) + word.slice(-1).toUpperCase());
    return newWords.join(" ");
}
const str = "hello";
const result = capLast(str);
console.log(result); // "hellO"
