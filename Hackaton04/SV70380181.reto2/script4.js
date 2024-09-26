//4
function sumaDeArgumentos(...argumentos) 
  {
    return argumentos.reduce((acumulador, valor) => acumulador + valor, 0);
  }
  
  console.log(sumaDeArgumentos(1, 2, 3)); // 6
  console.log(sumaDeArgumentos(10, 20, 30, 40, 50)); // 150
  console.log(sumaDeArgumentos(2, -3, 5, 7, -1)); // 10
  