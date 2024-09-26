//37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
function mcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return mcd(b, a % b);
    }
  }
  
  console.log(mcd(24, 36));
  