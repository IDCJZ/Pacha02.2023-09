//17
function diferenciaMaxMin(matriz) 
{
    if (matriz.length === 0)
    {
        return 0; 
    }

    const maximo = Math.max(...matriz);
    const minimo = Math.min(...matriz);

    return maximo - minimo;
}

const miMatriz = [3, 9, 1, 25, 6, 14];
const resultado = diferenciaMaxMin(miMatriz);
console.log("Diferencia entre el número más grande y el más pequeño:", resultado);
