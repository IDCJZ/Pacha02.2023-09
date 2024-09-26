//17. Hacer un algoritmo en JavaScript donde se ingrese 
//una hora y nos calcule la hora dentro de un segundo.
let hora = prompt("ingrese una hora")
let min = prompt("ingrese los minutos")
let seg = prompt("ingrese los segundos")
let segundos_total = (hora*3600)+(min*60)+(parseFloat(seg))+1
let hora1 = (Math.trunc(segundos_total/3600))
let residuo1 = segundos_total % 3600
let minutos1 = (Math.trunc(residuo1/60))
let seg1 = residuo1 % 60
console.log(`la hora es ` + hora1 + " : " + minutos1 + " : " + seg1 )
