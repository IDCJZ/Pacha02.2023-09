// Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

const formatPhoneNumber = (arr) => {
    if (arr.length !== 10) {
        return "La matriz debe contener exactamente 10 números.";
      }
    let areaCode = arr.slice(0, 3).join('');
    let firstPart = arr.slice(3, 6).join('');
    let secondPart = arr.slice(6).join('');
    return `(${areaCode}) ${firstPart}-${secondPart}`;
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const numeroDeTelefono = formatPhoneNumber(numeros);
console.log(numeroDeTelefono);