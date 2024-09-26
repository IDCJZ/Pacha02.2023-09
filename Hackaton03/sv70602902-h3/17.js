
let discos = prompt("ingrese las unidades compradas")
let ganancias = (8.25/100)
if (discos<10){
    let total1 = discos*10
    let ganancias_total = (total1*ganancias)
    console.log("el total a pagar es de $ " + total1)
    let opcion = prompt("si quieres ver las ganancias presiona 1 sino 0")
    if (opcion == 0){
        discos = false
    }
    else {
        console.log("las ganancias son $ " + ganancias_total.toFixed(2))

    }

}
else{
    if(discos>=10 && discos<=99){
        let total2 = discos*8
    let ganancias_total2 = (total2*ganancias)
    console.log("el total a pagar es de $ " + total2)
    let opcion = prompt("si quieres ver las ganancias presiona 1 sino 0")
    if (opcion == 0){
        discos = false
    }
    else {
        console.log("las ganancias son $ " + ganancias_total2.toFixed(2))

    }
    }
    else{
        if(discos>=100 && discos<=499){
            let total3 = discos*7
        let ganancias_total3 = (total3*ganancias)
        console.log("el total a pagar es de $ " + total3)
        let opcion = prompt("si quieres ver las ganancias presiona 1 sino 0")
        if (opcion == 0){
            discos = false
        }
        else {
            console.log("las ganancias son $ " + ganancias_total3.toFixed(2))
    
        }
        }
        else{
            if(discos>=500){
            let total4 = discos*6
            let ganancias_total4 = (total4*ganancias)
            console.log("el total a pagar es de $ " + total4)
            let opcion = prompt("si quieres ver las ganancias presiona 1 sino 0")
            if (opcion == 0){
                discos = false
            }
            else {
                console.log("las ganancias son $ " + ganancias_total4.toFixed(2))
        
            }
            }
        }
        
    }
}
        
    
