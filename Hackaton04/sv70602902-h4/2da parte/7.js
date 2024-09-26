//Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
function formatPhoneNumber(numbers) {
    let areaCode = numbers.slice(0, 3).join('');
    let firstPart = numbers.slice(3, 6).join('');
    let secondPart = numbers.slice(6).join('');
    return `(${areaCode}) ${firstPart}-${secondPart}`;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const phoneNumber = formatPhoneNumber(numbers);
console.log(phoneNumber); // (123) 456-7890
