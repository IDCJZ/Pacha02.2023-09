// Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
const toArray = (objeto) => {
    const matriz = [];

    for (const clave in objeto) {
        if (objeto.hasOwnProperty(clave)) {
        matriz.push([clave, objeto[clave]]);
        }
    }

    return matriz;
}
const resultado = toArray({ a: 1, b: 2});
console.log(resultado);