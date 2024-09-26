console.log("Esto es una funcion");

function suma(primer_numero, segundo_numero){
    let resultado = primer_numero + segundo_numero;
    return resultado;
}

let primera_suma = suma(22,33);
let segunda_suma = suma(44,99);

console.log(primera_suma);
console.log(segunda_suma);

function division(primer_numero, segundo_numero=1){
    let resultado = primer_numero/segundo_numero;
    return resultado;
}

console.log(division(33));

const arrow_suma =(primer_numero,segundo_numero)=>{
     console.log(primer_numero + segundo_numero);
}

const arrow_resta = (primer_numero,segundo_numero)=> console.log(primer_numero-segundo_numero);
arrow_suma(33,44);
arrow_resta(44,88)
arrow_suma("uno",2)

function numeros_primos(a, b, ...rest){
    console.log(a)
    console.log(b)
    console.log(rest)
}



numeros_primos(1,3,5,7,11,13)

function numeros_pares(a,b,c){
    console.log(a,b,c)
}
let arr_numeros_pares = [4,6,8]
numeros_pares(2,4,6)
numeros_pares(...arr_numeros_pares)


/*
gato =  color: blanco con gris
        sexo:  hembra
        nombre:selina
        peso:  4.6 kg
        comer()
        ronronear()
        cazar()

gato2 = color: atigrado
        sexo:   macho
        nombre: pancho
        peso:   3.8 kg
        comer()
        ronronear()
        cazar()
*/

function gato(sexo, color,nombre,peso){
    return{
        nombre,
        sexo,
        color,
        peso
    }
}

let gato_1 = gato("Hembra","Blanco con gris","Selina",4.6);

console.log(gato_1.nombre)
console.log(gato_1.color)

class Gatos{
    constructor(nombre, color, peso, sexo){
        this.nombre = nombre;
        this.color = color;
        this.peso = peso;
        this.sexo = sexo;
    }
    comer(kg_comida){
        console.log(`${this.nombre} esta comiendo`);
        this.peso += kg_comida
        console.log(`El gato aumento de peso, su peso actual es de ${this.peso}`)
    }
    ronronear(){
        console.log(`${this.nombre} esta ronroneando`);
    }
    cazar(){
        console.log(`${this.nombre} esta cazando`)
    }
}

let Selina = new Gatos("Selina", "Blanco", 4.6, "Hembra")

Selina.cazar()
Selina.comer(0.01)

let Pancho = new   Gatos("Pancho", "Atigrado", 3.8, "Macho")

Pancho.ronronear()
console.log(Pancho.nombre)
console.log(Pancho.sexo)
Pancho.comer(0.02)
console.log(Pancho.peso)