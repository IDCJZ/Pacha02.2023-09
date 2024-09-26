//16
function contarDesdeN(n)
{
    const resultado = [];
    
    for (let i = n; i >= 0; i--) 
    {
        resultado.push(i);
    }
    
    return resultado;
}

const numero = 5;
const resultado = contarDesdeN(numero);
console.log("Contando desde " + numero + " hasta 0:", resultado);
