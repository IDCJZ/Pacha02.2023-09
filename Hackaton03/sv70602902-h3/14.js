//15. Hacer un algoritmo en JavaScript que 
//convierta centímetros a pulgadas y libras a kilogramos.
//console.log("si quieres convertir de cm a plg presiona 1")
//console.log("si quieres convertir de lb a kg presiona 2")
let conver = prompt(`si quieres convertir de cm a plg presiona 1
si quieres convertir de lb a kg presiona 2`)
if (conver == 1) {
    let cm = prompt(" ingrese los cm a convertir")
    let cm_plg = cm/2.54
    console.log( cm +" cm son " + (cm_plg.toFixed(2)) + " plg")
}
else{
    if (conver == 2) {
        let lb = prompt(" ingrese las libras a convertir")
        let lb_kg = lb*0.45
        console.log( lb +" lb son " + (lb_kg.toFixed(2)) + " kg")
    }
    else{
        console.log(" error ")
    }
}

