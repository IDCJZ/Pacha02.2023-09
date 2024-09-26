//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
let numero = parseInt(prompt("Ingresar Numero"));
if (numero == 0 )
{
    document.write(numero+ "es un numero neutro");
}
else if (numero > 0)
{
    document.write(numero + "es un numero positivo");
}
else
{
    document.write(numero+ " Es un numero negativo");
}