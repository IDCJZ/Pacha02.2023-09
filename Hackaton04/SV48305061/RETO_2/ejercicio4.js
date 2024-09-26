/* Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
*/

function suma (...n){

console.log("los  argumentos digitados son: ",...n);
let total=0;
for (const suma of n ){
total+=suma;

}
console.log(total)
return total;
}
//let cantidad=prompt("ingrese la cantidad que quieres ingresar: ") 
//for (i=1; i<=cantidad; i++){
//   suma(prompt("digite el ",i,"º numero"));
//}
suma(1,2,3,4,5,6,7,8)



