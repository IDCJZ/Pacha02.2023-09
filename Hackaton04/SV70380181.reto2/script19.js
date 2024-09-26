//19
function repetirElemento(elemento, veces) 
{
    if (veces <= 0)
    {
        return []; 
    }

    const resultado = [];
    for (let i = 0; i < veces; i++) {
        resultado.push(elemento);
    }
    return resultado;
}

const elemento = "Hola";
const veces = 3;
const resultado = repetirElemento(elemento, veces);
console.log("Resultado:", resultado);
