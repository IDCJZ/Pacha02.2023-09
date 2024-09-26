//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
let numerox = prompt("ingrese un numero")
if (isNaN(numerox)){
    console.log("error, solo numeros enteros")
}
else{
    if(numerox % 10 === 4){
        console.log("este numero termina en 4")
    }
    else{
        console.log(" este nuemro no termina en 4")
    }
}