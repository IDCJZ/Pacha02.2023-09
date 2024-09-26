//31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.
function calcularMediaParesImpares(numeros) {
    let sum_pares = 0;
    let sum_impares = 0;
    let num_pares = 0;
    let num_impares = 0;
  
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        sum_pares += numeros[i];
        num_pares++;
      } else {
        sum_impares += numeros[i];
        num_impares++;
      }
    }
  
    const media_pares = sum_pares / num_pares;
    const media_impares = sum_impares / num_impares;
  
    return { media_pares, media_impares };
  }
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const medias = calcularMediaParesImpares(numeros);
  
  console.log(medias);
  