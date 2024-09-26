//5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento 
//para vender al mayor, esta dependerá del número de zapatos que se compren.
// Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; 
//si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
//y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
 let number_zap = prompt(" ingrese el numero de zapataos")
 let total_pagar = number_zap*80
 if(isNaN(number_zap)){
    console.log(" error ")
 }
 else{
    if (number_zap > 10 && number_zap <= 20){
        console.log("por tu compra tienes un 10% dsct. el total a pagar es de: $", (total_pagar - (total_pagar*0.1)))
    }
    else {
        if (number_zap > 20 && number_zap < 30){
            console.log("por tu compra tienes un 20% dsct. el total a pagar es de: $", (total_pagar - (total_pagar*0.2)))
        }
        else{
            if(number_zap >= 30){
                console.log("por tu compra tienes un 40% dsct. el total a pagar es de: $", (total_pagar - (total_pagar*0.4)))
            }
            else{
                if(number_zap<=10){
                    console.log("el total a pagar es de: $"+(total_pagar))
                }
            }
        }
    }
 }