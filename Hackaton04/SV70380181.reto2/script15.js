//15
function multiplicarPorLongitud(matriz)
{
    const longitud = matriz.length;
    const resultado = [];
    
    for (let i = 0; i < longitud; i++) 
    {
        resultado.push(matriz[i] * longitud);
    }
    
    return resultado;
}

const miMatriz = [1, 2, 3, 4, 5];
const resultado = multiplicarPorLongitud(miMatriz);
console.log("Matriz original:", miMatriz);
console.log("Matriz resultante:", resultado);
