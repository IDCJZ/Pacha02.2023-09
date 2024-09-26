//Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
//findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
function findNemo(str) {
    let words = str.split(" ");
    let index = words.indexOf("Nemo");
    if (index === -1) {
        return "No se encontró a Nemo.";
    } else {
        return `¡Encontré a Nemo en ${index + 1}!`;
    }
}
const str = "I am finding Nemo !";
const result = findNemo(str);
console.log(result); // "I found Nemo at 4!"
