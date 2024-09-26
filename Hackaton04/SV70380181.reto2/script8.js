//8
function obtenerMayoresDeCadaSubmatriz(matriz) 
{
    const mayores = matriz.map(submatriz => Math.max(...submatriz));
    return mayores;
}

  const matrizDeMatrices =
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const mayoresDeCadaSubmatriz = obtenerMayoresDeCadaSubmatriz(matrizDeMatrices);
  console.log("Mayores de cada submatriz:", mayoresDeCadaSubmatriz);
  