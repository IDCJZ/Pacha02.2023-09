//9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, 
//se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
//si generaba menos de $2000 su aumento será de un 10%.

let sueldo = prompt(" ingrese el monto ")
let aumento1 = (sueldo*0.05)+(parseFloat(sueldo))
let aumento2 = (sueldo*0.1)+(parseFloat(sueldo))

if (sueldo <= 2000){
    console.log(" el pago de este mes sera de $" + aumento2)
}
else{
    console.log(" el pago de este mes sera de $" + aumento1)

}