//6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, 
//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
//pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

let horas1 = prompt("ingrese el numero de horas")
let sueldo1 = horas1*20
let extra1 = 800 + ((horas1-40)*(25))
if (horas1 < 41){
    console.log("por trabajar "+ horas1 + " horas, se te pagara: $" + sueldo1)
}
else {
        console.log("por trabajar "+ horas1 + " horas, se te pagara: $" + extra1)

    }
    