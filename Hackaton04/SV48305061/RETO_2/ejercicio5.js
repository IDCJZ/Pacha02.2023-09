/*Crear una función que reciba un array de valores y filtre los valores que no son string

*/
function dato(...rest){

console.log("Filtro de valores que no son String ")
let datos=[...rest];
console.log(datos)
console.log("============================================")
for ( i = 0; i <=rest.length; i++) {
    const tipo_de_datos= typeof datos[i];

   if(tipo_de_datos=="string"){
    const dato_string=datos[i]
    console.log(" Estos valores son String:  " +dato_string)
   } else if (tipo_de_datos=="number"){
    const dato_Number= datos[i];
    
   }
}
    return datos;

}
dato(1,2,3,4,"1","o2","pablo")



