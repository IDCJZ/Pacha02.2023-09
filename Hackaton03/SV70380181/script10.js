//Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
let num1 = parseInt(prompt("ingrese numero 1"))
let num2 = parseInt(prompt("ingrese numero 2"))
let num3 = parseInt(prompt("ingrese numero 3"))
if (num1 > num2 && num1>num3)
{
    document.write(`${num1}es un numero mayor`)
}
else if (num2 > num1 && num2>num3)
{
    document.write(`${num2}es un numero mayor`)
}
else if (num3 > num1 && num3>num2)
{
    document.write(`${num3}es un numero mayor`)
}