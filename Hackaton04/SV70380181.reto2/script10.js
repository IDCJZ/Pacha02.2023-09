//10
function objetoAMatriz(objeto) 
{
    return Object.entries(objeto);
}
  
  const miObjeto = { a: 1, b: 2 };
  const matrizResultado = objetoAMatriz(miObjeto);
  console.log(matrizResultado);
  