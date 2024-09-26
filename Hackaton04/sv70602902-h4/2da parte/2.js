//Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

function sumOfCubes(...numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += Math.pow(numeros[i], 3);
    }
    return suma;
  }
  
  let numeros = [];
  let continuar = true;
  
  while (continuar) {
    let numero = prompt("Ingresa un número o presiona S para detenerte");
    if (numero === "S") {
      continuar = false;
    } else {
      numeros.push(parseInt(numero));
    }
  }
  
  console.log(sumOfCubes(...numeros));