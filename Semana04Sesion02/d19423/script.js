/*\

ier número de DNI. Esta secuencia de cálculos matemáticos y operaciones lógicas pueden hacerse en excel y estos son los pasos que detallan en su página web:

Pasos para obtener el dígito de verificación del DNI
Tomaremos como ejemplo el DNI 17801146.
Separamos cada uno de los dígitos 1, 7, 8, 0, 1, 1, 4, 6.
Multiplicamos cada dígito por esta serie en el mismo orden 3, 2, 7, 6, 5, 4, 3, 2 de esta forma: 1 x 3, 7 x 2, 8 x 7, 0 x 6, 1 x 5, 1 x 4, 4 x 3, 6 x 2
Sumamos todos los productos dándonos el resultado de 106
Dividimos el resultado anterior entre 11 y tomamos el residuo: 106/11 = 9 sobrándonos 7 (9 x 11 = 99 para 106 nos faltaría 7)
Al valor 11 (por defecto) le restamos el resultado anterior 7 , lo que nos daría 4. *Excepción, si el resultado del punto 6 sería 11, es decir 11 – 0 = 11 (0 es el resultado del punto 5, es decir se trata de una división exacta que no tiene residuo) entonces el resultado sería 0 y no 11.
Al resultado anterior le sumamos 1, es decir 4 + 1 = 5 lo que significa que vamos a buscar la 5ta posición en la serie NUMERICA (por defecto) 6, 7, 8, 9, 0, 1, 1, 2, 3, 4, 5 ó la 5ta posición en la serie ALFABÉTICA (por defecto) K, A, B, C, D, E, F, G, H, I, J.
El dígito verificador o dígito de validación son los pintados en color azul.
*/

let DNI = prompt("Escribe tu DNI");
arr_dni = DNI.split("");
console.log(arr_dni);
let suma = 0;
const arr_multiplicador = [3, 2, 7, 6, 5, 4, 3, 2]
for (let index = 0; index < arr_dni.length; index++) {
    suma += arr_dni[index] * arr_multiplicador[index]
    console.log(suma)
}
let residuo = (suma % 11);
console.log(residuo)

let once = (11 - residuo);
const lista = [6, 7, 8, 9, 0, 1, 1, 2, 3, 4, 5]
console.log(lista[once])


