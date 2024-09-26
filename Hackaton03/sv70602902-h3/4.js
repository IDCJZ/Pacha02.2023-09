//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
let numero1 = prompt("ingrese el priemr nuemro");
if (isNaN(numero1)){
    console.log( " solo nuemros ")
}
else {
    let numero2 = prompt("ingrese el segundo nuemro");
    if (isNaN(numero2)){
        console.log( " solo nuemros ")
    }
    else {
        let numero3 = prompt("ingrese el tercer nuemro");
        if (isNaN(numero3)){
            console.log("solo numeros")
        }
        else {
            if (numero1 < numero2 && numero2 < numero3 ){
                console.log("el orden es ", numero1 , numero2, numero3)
            }
            else {
                if (numero1 <= numero2 && numero3 <= numero1 ){
                    console.log("el orden es ", numero3 , numero1, numero2)
                }
                else {
                    if (numero1 >= numero2 && numero2 >= numero3 ){
                        console.log("el orden es ", numero3 , numero2, numero1)
                    }
                    else {
                        if (numero1 >= numero2 && numero1 <= numero3 ){
                            console.log("el orden es ", numero2 , numero1, numero3)
                        }
                        else {
                            if (numero1 < numero3 && numero3 < numero2 ){
                                console.log("el orden es ", numero1 , numero3, numero2)
                            }
                            else {
                                if (numero1 > numero3 && numero3 > numero2 ){
                                    console.log("el orden es ", numero2 , numero3, numero1)
                                }
                        }
                    }
                }

        }


}
    
}

    }


}
