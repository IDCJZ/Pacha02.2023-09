//13 
function objetoAMatriz(objeto)
{
    return Object.entries(objeto);
}

const miObjeto = { clave1: "valor1", clave2: "valor2", clave3: "valor3" };
const matrizResultado = objetoAMatriz(miObjeto);

console.log(matrizResultado);
