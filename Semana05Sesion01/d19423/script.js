class ObrasDeArte{
    constructor(nombre, autor, fecha, tipo){
        this.nombre = nombre;
        this.autor = autor;
        this.fecha = fecha;
        this.tipo = tipo;
    }

    exponer(lugar, fecha){
        console.log(`La obra ${this.nombre} se está exponiendo en ${lugar} desde el ${fecha}`)
    }
}

class Cuadros extends ObrasDeArte{
    mantenimiento = true;
    constructor(nombre, autor, fecha, tipo, tecnica){
        super(nombre, autor, fecha, tipo);
        this.tecnica = tecnica;
    }
    
    get mantenimiento(){
        return this.mantenimiento;
    }
    set mantenimiento(newValue){
        this.mantenimiento = newValue
    }

    exponer(fecha, lugar){
        if(!this.mantenimiento){
            console.log(`El cuadro ${this.nombre} se está exponiendo en ${lugar} desde el ${fecha} utilizando la tecnica de ${this.tecnica}`);
        }
        else{
            console.log(`No se puede exponer ya que el cuadro ${this.nombre} esta en mantenimiento`)
        }
    }
}

let cuadro1 = new Cuadros("Monaliza","Leonardo DaVinci","1503-01-01","Pintura", "Pintura al Oleo");
let cuadro2 = new Cuadros("Venus de Milo", "Alejandro de Antioquía", "130 a. C.-100 a. C.", "Escultura", "Cincelado en Marmol");
let cuadro3 = new Cuadros("Monaliza","Leonardo DaVinci","1503-01-01","Pintura", "Pintura al Oleo");

cuadro1.exponer("2023-10-09", "Museo de Lima");
cuadro1.mantenimiento = false;
console.log(cuadro1.mantenimiento)
cuadro1.exponer("2023-10-12", "Museo de Chiclayo");

function crearFunc(){
    let nombre = "Mozilla";
    function mostrarNombre(){
        alert(nombre);
    }
    return mostrarNombre;
}

let miFun = crearFunc();
//miFun();


function saludar(nombre){
    alert(`Hola ${nombre}`)
}
function despedir(nombre){
    alert(`Ciao ${nombre}`)
}

function procesar_entrada_usuario(callback){
    let nombre = prompt("Escribe tu nombre");
    callback(nombre);
}

//procesar_entrada_usuario(saludar)
//procesar_entrada_usuario(despedir)

function Calcular(monto){
    this.sumar = x =>{
        monto = monto + x;
        return this;
    };
    this.restar = x =>{
        monto = monto - x;
        return this;
    };
    this.multiplicar = x =>{
        monto = monto * x;
        return this;
    };
    this.dividir = x =>{
        monto = monto / x;
        return this;
    };
    this.total = callback =>{
       callback(monto)
        return this;
    }
    
}

new Calcular(1000)
    .sumar(100)
    .restar(200)
    .multiplicar(1.18)
    .dividir(4)
    .total(function(total){
        console.log(`El total es ${total}`)
    })