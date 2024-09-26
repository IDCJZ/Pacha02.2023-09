//21
function encontrarNemo(cadenaDePalabras) 
{
    const palabras = cadenaDePalabras.split(" ");
    const posicionNemo = palabras.indexOf("Nemo");

    if (posicionNemo !== -1) 
    {
        return `¡Encontré a Nemo en la palabra número ${posicionNemo + 1}!`;
    } 
    else 
    {
        return "¡No pude encontrar a Nemo!";
    }
}

const cadena = "Este es un ejemplo de buscar a Nemo en una cadena de palabras";
const resultado = encontrarNemo(cadena);
console.log(resultado);
