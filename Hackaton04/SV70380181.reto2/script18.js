//18
function filtrarEnteros(matriz) 
{
    return matriz.filter (elemento => { return Number.isInteger(parseInt(elemento, 10) ) } );
}

const miMatriz = ["1", "2", "tres", "4", "cinco", "6"];
const resultado = filtrarEnteros(miMatriz);
console.log("Matriz original:", miMatriz);
console.log("Matriz filtrada de enteros:", resultado);
