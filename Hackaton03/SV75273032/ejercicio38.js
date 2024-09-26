//Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

//Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...

function calcularPiNilakantha(iteraciones) {
    let pi = 3;
    let denominador = 2;
    let suma = 0;
  
    for (let i = 0; i < iteraciones; i++) {
      if (i % 2 === 0) {
        suma += 4 / (denominador * (denominador + 1) * (denominador + 2));
      } else {
        suma -= 4 / (denominador * (denominador + 1) * (denominador + 2));
      }
  
      denominador += 2;
    }
  
    return pi + suma;
  }
  
  // Define la cantidad de iteraciones para calcular una aproximación de pi.
  const iteraciones = parseInt(prompt("Ingresa la cantidad de iteraciones para calcular una aproximación de pi:"));
  
  // Calcula pi utilizando la serie de Nilakantha.
  const aproximacionPi = calcularPiNilakantha(iteraciones);
  
  console.log(`Aproximación de pi con ${iteraciones} iteraciones: ${aproximacionPi}`);