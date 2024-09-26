// Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
const charIndex = (palabra, caracter) => {
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);

    if (primerIndice !== -1) {
        return [primerIndice, ultimoIndice];
    } else {
        return "El carácter no se encuentra en la palabra.";
    }
}
const resultado = charIndex("hello", "l");
console.log(resultado);

const resultado2 = charIndex("circumlocution", "c");
console.log(resultado2)