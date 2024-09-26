//14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

let numeroprimo = 13; 
let esnumeroprimo = true;
for (let i = 2; i < numeroprimo/2; i++)
{
if(numeroprimo % i === 0)
{
    esnumeroprimo = false;
}
}
if (esnumeroprimo)
{
    console.log("si es un numero primo", numeroprimo);
}
else
{
console.log("no es un numero primo", numeroprimo);
}
