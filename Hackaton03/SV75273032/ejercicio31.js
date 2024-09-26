
//Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
// Define un objeto que almacene las ciudades y sus poblaciones.
const ciudades = {
    ciudad1: 100000,  // Ejemplo de población para ciudad1
    ciudad2: 150000,  // Ejemplo de población para ciudad2
    ciudad3: 80000,   // Ejemplo de población para ciudad3
    // ... Agrega las poblaciones de las otras ciudades
  };
  
  let ciudadMasPoblada = '';
  let poblacionMasGrande = 0;
  
  // Recorre el objeto de ciudades para encontrar la ciudad más poblada.
  for (const ciudad in ciudades) {
    if (ciudades[ciudad] > poblacionMasGrande) {
      poblacionMasGrande = ciudades[ciudad];
      ciudadMasPoblada = ciudad;
    }
  }
  
  console.log(`La ciudad con la población más grande es ${ciudadMasPoblada} con una población de ${poblacionMasGrande}.`)