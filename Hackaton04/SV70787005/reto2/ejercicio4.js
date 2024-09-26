// Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
const suma = (...args) => {
    return args.reduce((total, current) => total + current, 0);
}
console.log(suma(1, 2, 3)); // Devuelve 6 (1 + 2 + 3)
console.log(suma(10, 20, 30, 40, 50)); // Devuelve 150 (10 + 20 + 30 + 40 + 50)
console.log(suma(5)); // Devuelve 5 (único argumento)
console.log(suma()); // Devuelve 0 (sin argumentos)