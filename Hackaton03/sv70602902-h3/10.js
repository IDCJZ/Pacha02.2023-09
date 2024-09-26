//11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

let numero1 = prompt("ingresa el nuemro 1")
let numero2 = prompt("ingresa el nuemro 2")
let numero3 = prompt("ingresa el nuemro 3")
if (numero1>numero2 && numero1 > numero3){
    console.log("el mayor es " + numero1)
}
else{
    if(numero2>numero1 && numero2 > numero3) {
        console.log("el mayor es " + numero2)
    }
    else{
        if (numero3>numero1 && numero3 > numero2) {
            console.log("el mayor es " + numero3)
        }
    }
}

