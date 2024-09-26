//22
function capitalizarUltimaLetra(cadena) 
{
    const palabras = cadena.split(" ");

    for (let i = 0; i < palabras.length; i++) 
    {
        const palabra = palabras[i];
        if (palabra.length > 0) 
        {
            const primeraParte = palabra.slice(0, palabra.length - 1);
            const ultimaLetra = palabra.slice(-1).toUpperCase();
            palabras[i] = primeraParte + ultimaLetra;
        }
    }

    return palabras.join(" ");
}

const cadena = "esto es un ejemplo";
const resultado = capitalizarUltimaLetra(cadena);
console.log(resultado);
