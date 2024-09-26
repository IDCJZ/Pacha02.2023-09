//Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...


function calcularPi(iteraciones) {
    let pi = 0;
    let denominador = 1;
    let suma = 0;
  
    for (let i = 0; i < iteraciones; i++) {
      if (i % 2 === 0) {
        suma += 4 / denominador;
      } else {
        suma -= 4 / denominador;
      }
  
      denominador += 2;
    }
  
    return suma;
  }
  
  // Define la cantidad de iteraciones para calcular una aproximación de pi.
  const iteraciones = parseInt(prompt("Ingresa la cantidad de iteraciones para calcular una aproximación de pi:"));
  
  // Calcula pi utilizando la serie de Gregory-Leibniz.
  const aproximacionPi = calcularPi(iteraciones);
  
  console.log(`Aproximación de pi con ${iteraciones} iteraciones: ${aproximacionPi}`);