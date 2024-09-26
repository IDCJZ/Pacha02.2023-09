/*
Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena 
en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

*/
function nro_telefono(...rest){
//let numero_de_telefono=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let numero_de_telefono=[...rest];
letra= numero_de_telefono.toString();
letra1 = letra.replace(/,/g, '');

parectisis1="(";
posicion1= 0;
parectisis2=")";
posicion2=3
espacio=" ";
posicion3=3;
raya="-";
posicion4= 6;
telefono_fijo=letra1.slice(0,posicion1)+parectisis1+letra1.slice(posicion1,posicion2)+parectisis2+letra1.slice(posicion2,posicion3)+espacio+letra1.slice(posicion3,posicion4)+raya+letra1.slice(posicion4);
console.log(telefono_fijo);
return telefono_fijo
}
nro_telefono(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)