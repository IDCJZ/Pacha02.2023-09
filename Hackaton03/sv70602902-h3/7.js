//7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento 
//por compra a sus clientes con membresía dependiendo de su tipo, 
//sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento

let membresía1 = prompt("ingrese el tipo de membresia")
if (membresía1==="A" || membresía1 === "a"){
    console.log(" memebresia de tipo A, tienes 10% de descuento")
}
else {
    if (membresía1 === "B" || membresía1 === "b"){
        console.log(" memebresia de tipo B, tienes 15% de descuento")
    }
    else {
        if(membresía1==="C" || membresía1 === "c"){
            console.log(" memebresia de tipo C, tienes 20% de descuento")
        }
        else{
            console.log(" solo exiten membresias de tipo A, B o C")
        }
    }
}
    


