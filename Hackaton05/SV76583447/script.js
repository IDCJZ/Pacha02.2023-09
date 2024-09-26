window.addEventListener('DOMContentLoaded',extraerInformacion);
const reporte = document.getElementById('reporte');
const ingresar_informacion = document.getElementById('llenar_datos');
ingresar_informacion.addEventListener('click',agregarCliente);
reporte.addEventListener('click',obtenerReporte);

let clientes = [];

const errores = {
    'altavoz': 100,
    'microfono': 150,
    'pantalla': 200,
    'conector de carga': 250,
    'camara': 350,
    'bateria': 250,
    'placa base': 400
}

function extraerInformacion(){
    if(clientes.length !== 0){
        console.log('esta lleno');
    }else{

    }
}

function obtenerReporte(){
    let numero = Math.floor(Math.random()*2);
    if(numero == 0){
        const detalle_reporte = document.getElementById('inf-reporte');
        const llenar_datos = document.getElementById('llenar_datos');
        llenar_datos.classList.remove('ocultar');
        detalle_reporte.classList.remove('ocultar');
        setTimeout(() => {
            detalle_reporte.classList.add('ocultar');
        }, 3000);
    }
}

function agregarCliente(){
    let nombre,apellido,dni;
    nombre = prompt('Ingresar nombre');
    apellido = prompt('Ingresar apellido');
    dni = prompt('Ingresar dni');
    const cliente = new Cliente(nombre,apellido,dni);
    clientes.push(cliente)
    console.log(clientes);
}


class Servicio {
    constructor(abono){
        this.abono = abono;
        this.cliente = null;
    }
}

class Cliente {
    constructor(nombre,apellido,dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.autorizacion = 'Sin firma';
        this.telefono = null;
        this.pago = 'Sin pago';
        this.pagado = 0;
    }

    setTelefono(celular){
        this.telefono = celular;
    }

}

class Telefono {
    constructor(marca,so,imei,num_serie){
        this.marca = marca;
        this.so = so;
        this.imei = imei;
        this.num_serie = num_serie;
        this.diagnostico = null;
        this.revision = 0;
        this.estado = 'En revision';
    }
}

class Diagnostico {
    constructor(tipo,costo){
        this.tipo = tipo;
        this.costo = costo;
    }
}



