//39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

function calcularPi(n)
 {
    let piAproximado = 0;
    let signo = 1;
  
    for (let i = 0; i < n; i++) 
    {
      piAproximado += signo * (1 / (2 * i + 1));
      signo = -signo; 
    }
  
    return 4 * piAproximado;
  }
  
  const cantidadTerminos = 100000; 
  
  const aproximacionPi = calcularPi(cantidadTerminos);
  
  console.log(`Aproximación de pi con ${cantidadTerminos} términos: ${aproximacionPi}`);
  
