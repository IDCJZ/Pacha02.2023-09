//40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

   // Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
   function nilakantha(n) {
    let sum = 3;
    let sign = 1;
    for (let i = 2; i <= n; i++) {
      let term = sign * (4 / (i * (i + 1) * (i + 2)));
      sum += term;
      sign *= -1;
    }
    return sum;
  }
  
  console.log(nilakantha(1000000));
  