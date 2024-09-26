//14
function sumaDeCuadradosHastaN(n) 
{
    let suma = 0;
    for (let i = 1; i <= n; i++) 
    {
        suma += i * i;
    }
    return suma;
}

const numero = 5;
const resultado = sumaDeCuadradosHastaN(numero);
console.log("La suma de los cuadrados hasta " + numero + " es: " + resultado);