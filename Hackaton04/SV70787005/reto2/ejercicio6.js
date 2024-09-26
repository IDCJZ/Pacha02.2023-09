// Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

const minMax = (arr) => {
    if (arr.length === 0) {
        return [undefined, undefined]; // Devolver valores indefinidos si el array está vacío
      }
    
      const minimo = Math.min(...arr);
      const maximo = Math.max(...arr);
    
      return [minimo, maximo];
}
console.log(minMax([5,4,3,3,2,1]))