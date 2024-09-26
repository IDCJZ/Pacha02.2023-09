//Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
function suma(a,b,...rest){
    let resultado = a + b;
    for(let i = 0; i<rest.length;i++){
        resultado += rest[i]
    }
    return resultado;
}
console.log(suma(1, 2,4,5,6)); // Output: 18