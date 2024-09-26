//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
let vocal = prompt("ingrese una letra")
if (isNaN(vocal)){
    if(vocal === "A" || vocal === "E" || vocal === "I" || vocal === "O" || vocal === "U" || vocal === "a" || vocal === "e" || vocal === "i" || vocal === "o" || vocal === "u" ){
        console.log(" es una vocal")
    }
    else{
        console.log(" no es una vocal")
    }

}
else{
    console.log("solo letras")
}