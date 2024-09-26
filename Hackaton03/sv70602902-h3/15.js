//16. Hacer un algoritmo en JavaScript que lea un número 
//y según ese número, indique el día que corresponde.

let dia = prompt(" ingrese un numero del 1 al 7")
if (dia == 1){
    console.log("es lunes")
}
else{
    if (dia == 2){
        console.log("es martes")
    }
    else{
        if (dia == 3){
            console.log("es miercoles")
        }
        else{
            if (dia == 4){
                console.log("es jueves")
            }
            else{
                if (dia == 5){
                    console.log("es viernes")
                }
                else {
                    if (dia == 6){
                        console.log("es sabado")
                    }
                    else{
                        if (dia == 7){
                            console.log("es domingo")
                        }
                        else{
                            console.log(" numero no valido")
                        }
                    }
                }
            }
        }
    }

}
