let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

text = "We are the so-called \"Vikings\" from the north.";
console.log(text)

let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2)
text2 = text1.trimStart();
console.log(text2)
text2 = text1.trimEnd();
console.log(text2)
text = '55'
let padded = text.padStart(4,"0");
console.log(padded)
text = "rpinedaec83@gmail.com"
let arr_correo = text.split('@')
console.log(arr_correo)
let arr_dominio = arr_correo[1].split('.')
let primera_parte = arr_correo[0].slice(0,2)
let conteo_primera = arr_correo[0].length
let segunda_parte = arr_dominio[0].slice(-2)
let conteo_segunda = arr_dominio[0].length
console.log(primera_parte)
console.log(segunda_parte)
console.log(conteo_primera)
console.log(conteo_segunda)

console.log("Te enviamos un correo a la siguiente direccion:")
let paddedPrimera = primera_parte.padEnd(conteo_primera,'x')
let paddedSegunda  = segunda_parte.padStart(conteo_segunda,'x')

console.log(paddedPrimera)
console.log(paddedSegunda)

let correo_cifrado = paddedPrimera+'@'+paddedSegunda+'.'+arr_dominio[1]
console.log(correo_cifrado)

let x = 100 / "Apple";

console.log(isNaN(x))

 x = 9.656;
console.log(x.toFixed(0))
console.log(x.toFixed(2))
console.log(x.toFixed(4))
console.log(x.toFixed(6))

console.log(parseInt("10 20 30"))

const cars = ["Saab", "Volvo", "BMW"];

console.log(cars.length)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
console.log(fruits[0])
console.log(fruit)


document.getElementById("demo").innerHTML = fruits.join(" * ");

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
document.getElementById("demo").innerHTML = myChildren.join(" * ");


document.getElementById("demo").innerHTML = fruits.sort().join(" * ");
document.getElementById("demo").innerHTML = fruits.reverse().join(" * ");

let age = 20
let voteable = (age < 18) ? "Too young":"Old enough";


if(age < 18){
    console.log("Muy Joven")
}
else{
    console.log("Perfecto")
}

let numero1 = prompt("Escribe el primer numero")
let numero2 = prompt("Escribe el segundo numero")
let operacion = prompt(`Escribe la operacion a realizar: 
1 ---> suma
2 ---> resta
3 ---> multiplicacion
4 ---> division`)

/*
if(operacion == 1){
    alert("respuesta: "+ (parseInt(numero1)  + parseInt(numero2)).toString())
}else if(operacion == 2)
{
    alert("respuesta: "+ (parseInt(numero1)  - parseInt(numero2)).toString())
}else if(operacion == 3)
{
    alert("respuesta: "+ (parseInt(numero1)  * parseInt(numero2)).toString())
}else if(operacion == 4)
{
    alert("respuesta: "+ (parseInt(numero1)  / parseInt(numero2)).toString())
}

switch (operacion) {
    case "1":
        alert("respuesta: "+ (parseInt(numero1)  + parseInt(numero2)).toString())
        break;
    case "2":
        alert("respuesta: "+ (parseInt(numero1)  - parseInt(numero2)).toString())
        break;
    case "3":
        alert("respuesta: "+ (parseInt(numero1)  * parseInt(numero2)).toString())
        break;
    default:
        alert("respuesta: "+ (parseInt(numero1)  / parseInt(numero2)).toString())
        break;
}
*/

for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }

console.log(text)

const person = {fname:"John", lname:"Doe", age:25};

text = "";
for (let x in person) {
  text += person[x] + " - ";
}
console.log(text)


for(let x in cars){
    console.log(cars[x])
}
i =0
while (i < 10) {
    console.log("The number is " + i);
    i++;
  }

try {
    switch (operacion) {
        case "1":
            alert("respuesta: "+ (parseInt(numero1)  + parseInt(numero2)).toString())
            break;
        case "2":
            alert("respuesta: "+ (parseInt(numero1)  - parseInt(numero2)).toString())
            break;
        case "3":
            alert("respuesta: "+ (parseInt(numero1)  * parseInt(numero2)).toString())
            break;
        default:
            let res  = (parseInt(numero1)  / parseInt(numero2)).toString();
            if(res == Infinity)
                throw "Error de division por o"
            break;
    }
} catch (error) {
    console.log(error)
}