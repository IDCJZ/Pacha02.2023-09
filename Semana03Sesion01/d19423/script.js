/*console.log("Hola desde el script")
console.info("Info desde el script")
console.warn("Warning desde el script")
console.error("Un error desde el script")*/

var fecha_de_nacimiento;
var fecha_de_nacimiento = "1983-08-28"
console.log(fecha_de_nacimiento);
fecha_de_nacimiento = 123456;
console.log(fecha_de_nacimiento);

var uno, dos, tres;
var cuatro = 1, cinco = 12, seis = 10;

console.log(uno, dos, tres, cuatro, cinco, seis)
const PI = 3.1416;
console.log(PI);
//PI = 3.15;
//console.log(PI)
let numero1 = 10
let numero2 = 20
numero2 = 21
let resultado = numero1 + numero2;
console.log(resultado)

function suma(){
    let resultado = 20+33;
    console.log(resultado)
}

suma();



//tipos de variables

//caracteres
let nombre = "Roberto"
let apellido = 'Pineda'
let nombre_completo = `Roberto David


Pineda Lopez`

let suma_caracteres = nombre+apellido;
console.log(suma_caracteres)

let resta_caracteres = nombre-apellido;
console.log(resta_caracteres)
console.log(nombre_completo)

//numericas
let edad = 40
let estatura = 168.5

let res= edad + estatura;
console.log(res)
res = edad - estatura
console.log(res)
res = edad * estatura
console.log(res)
res = edad / estatura
console.log(res)
res = edad ** estatura
console.log(res)
res = edad % estatura
console.log(res)

//fecha
let fecha_nacimiento = new Date(1983, 7, 28)
console.log(fecha_nacimiento)

//booleanas
let estado_civil = false;
let habido = true;

//and

res = estado_civil && habido;
console.log(res)
// or
res = estado_civil || habido;
console.log(res)
// not
res = estado_civil &&  !habido;
console.log(res)

res = estado_civil ||  !habido;
console.log(res)

//arrays
let arr_hobies = ['aeromodelismo', 'gunpla', 'musica'];
let arr_mixto = [11, 'once', false]
console.log(arr_hobies)
arr_hobies.push("pintura")
console.log(arr_hobies)
arr_hobies.pop()
console.log(arr_hobies)
console.log(arr_hobies[2])

//objeto
let obj_estudio = {
    institucion: "Universidad Central del Ecuador",
    fecha: new Date(2004, 5, 30),
    titulo: "Ingeniero en Contabilidad y Auditoria"
}

console.log(obj_estudio.fecha)
console.log(obj_estudio.institucion)

let arr_estudios = [
    {
        institucion: "Universidad Central del Ecuador",
        fecha: new Date(2004, 5, 30),
        titulo: "Ingeniero en Contabilidad y Auditoria"
    },
    {
        institucion: "Universidad Metropolitana de Quito",
        fecha: new Date(2005, 11, 31),
        titulo: "Ingeniero en Sistemas"
    }
]

console.log(arr_estudios)
console.log(arr_estudios[1].titulo)


//Operadores comparacion

let tvLg = '55';
let tvSamsung = 55

console.log(typeof(tvSamsung))

console.log(tvLg === tvSamsung)

let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(result)


let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);

console.log(part)

 text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText)

apellido = apellido.toUpperCase();
console.log(apellido)

aoelldo = apellido.toLowerCase()

