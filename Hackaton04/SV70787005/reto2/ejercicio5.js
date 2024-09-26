// Crear una función que reciba un array de valores y filtre los valores que no son string
function filtrarCadenas(arr) {
    return arr.filter(valor => typeof valor === 'string');
}
console.log(filtrarCadenas([1999, "separador","de", 23, "texto"]));
  