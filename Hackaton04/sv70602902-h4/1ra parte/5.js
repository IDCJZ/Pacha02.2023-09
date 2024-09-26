//Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), 
//y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

let n1 = prompt("ingresa el primer numero")
let n2 = prompt("ingresa el segundo numero")
let op = prompt("ingresa la operacion +,-,*,/ o %")
const arr_suma = (n1,n2) =>{console.log((parseFloat(n1))+(parseFloat(n2)))}
const arr_resta = (n1,n2) =>{console.log((parseFloat(n1))-(parseFloat(n2)))}
const arr_residuo = (n1,n2) =>{console.log((parseFloat(n1))%(parseFloat(n2)))}
const arr_multiplicacion = (n1,n2) =>{console.log((parseFloat(n1))*(parseFloat(n2)))}
const arr_division = (n1,n2) =>{console.log((parseFloat(n1))/(parseFloat(n2)))}

if (op === "+"){
    arr_suma(n1,n2)
}
else if (op==="-"){
    arr_resta(n1,n2)
}
else if (op==="*"){
    arr_multiplicacion(n1,n2)}
else if (op==="%"){
         arr_residuo(n1,n2)
        }
else if(op==="/" &&  n2 == 0){
           console.log("no se epuede dividir entre 0")}
    else{
        arr_division(n1,n2)}
     
        
