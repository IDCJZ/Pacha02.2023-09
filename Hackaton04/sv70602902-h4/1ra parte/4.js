//Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3
let base = prompt("ingrese la base del triangulo");
let altura = prompt("ingrese la altura del triangulo");
const arr_triarea=(base,altura) => {
    console.log((base*altura)/2)
}
arr_triarea(base,altura)
