//Crear una función que reciba un array de valores y 
//filtre los valores que no son string
function filterStrings(arr) {
    return arr.filter(function(value) {
        return typeof value === 'string';
    });
}

const arr = [1, 'hello', 2,3, 'world',"hola " , true, false];
const filteredArr = filterStrings(arr);
console.log(filteredArr);
