//39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
function pi(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      let sign = i % 2 === 0 ? 1 : -1;
      let term = sign * (4 / (2 * i + 1));
      sum += term;
    }
    return sum;
  }
  
  console.log(pi(1000000));
  