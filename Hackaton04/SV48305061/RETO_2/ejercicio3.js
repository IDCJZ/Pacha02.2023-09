/*Crear una funcion que me retorne el tipo de valor entregado, invocar la función
 para los distintos tipos de js
*/
function tipo_de_datos() {
    let dato = prompt("Por favor ingrese un dato: ");
    let tipo= typeof dato ;
    console.log("El tipo de dato "+dato+" es: "+tipo);
    if (dato = null) {
      console.log("No ingreso un dato");
    }
    return tipo
}
tipo_de_datos();