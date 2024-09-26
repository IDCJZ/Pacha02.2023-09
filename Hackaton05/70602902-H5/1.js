//Se necesita crear un sistema que maneje las reparaciones de celulares en un local con varias sucursales Tomar en cuenta los siguientes casos de uso:

//El telefono ingresado debe tener numero de serie e IMEI que no esten reportados para acceder al servicio
//Un telefono primero debe pasar por una primera revision y se debe guardar el primer diagnostico
//Se debe tener la autorizacion escrita del usuario y el abono del 50% de la reparacion para que acceda al servicio
//Los tecnicos pueden tener uno o varios skills que se adecuen a la marca de telefono que se necesita acceder al servicio
//Los repuestos se agegaran a la reparacion de telefono
//Se debe mostrar el estado del equipo en sus diferentes estaciones de trabajo


const ServiciosArca =function(){
    let nombre;
    let ubicacion;
    let tecnicos=[];
    function configurar(){
        let titulo = document.getElementById("nombre_de_la_tienda");
        titulo.innerHTML = Nombre
        let sede = document.getElementById("ubicacion")
        sede.innerText = Ubicacion;
    }
    function eventos(){
        document.getElementById("registro").addEventListener("click", registro_clientes);
        document.getElementById("diagnostico").addEventListener("click", primera_revision);
        document.getElementById("asignacion_de_tecnico").addEventListener("click", asignar_tecnicos);
        document.getElementById("estado").addEventListener("click", ver_estado);
    }
    function registro_clientes() {
        let nombre= prompt("Ingresa tu nombre: ")
        let apellido= prompt("Ingresa tu apellido: ")
        let dni= prompt("Ingresa tu DNI: ")
        let marca_telefono= prompt("Ingresa la marca del telefono: ")
        let imei= prompt("Ingresa el codigo IMEI: ")
        if (imei!=="000000000000000"){
            let cliente= new clientes(nombre,apellido,dni,marca_telefono,imei)
            return cliente;
        } else{
            console.log("No puedes acceder al servicio")
        } 
    }

    function primera_revision() {
        let revison1= prompt("Digite los resultados de la diagnosticacion: ")
        let diagnostico1= new diagosntico(revison1);
        return diagnostico1;
    }

    function registro_pagos(){
        let pago=  prompt("digite el pago que tiene que realizar el cliente: ");
        let pago_cliente= prompt ("digite el pago del cliente")
        let abono= pago*0.5
        if (pago_cliente >= abono) {
            let pago_realizado= new pagos(pago, pago_cliente);

            return pago_realizado;
        } else {
            console.log("El pago que realizo con es suficiente, no puede acceder al servicio")
        }
    }

    function asignar_tecnicos(){
        let marca_asignada=registro_clientes.marca_telefono;
        let total_apagar_cliente;
        switch (marca_asignada) {
            case marca_asignada=="nokia":
                let tecnico1= prompt ("Digite los costos agregado de la reparacion: ");
                total_apagar_cliente= new tecnicos(tecnico1)+pagos.pago
                return total_apagar_cliente;
                break;
            case marca_asignada=="sangsum":
                let tecnico2= prompt ("Digite los costos agregado de la reparacion: ");
                total_apagar_cliente= new tecnicos(tecnico2)+pagos.pago
                return total_apagar_cliente;
                break;
            case marca_asignada=="apple":
                let tecnico3= prompt ("Digite los costos agregado de la reparacion: ");
                total_apagar_cliente= new tecnicos(tecnico3)+pagos.pago
                return total_apagar_cliente;
                break;
            case marca_asignada=="huewei":
                let tecnico4= prompt ("Digite los costos agregado de la reparacion: ");
                total_apagar_cliente= new tecnicos(tecnico4)+pagos.pago
                return total_apagar_cliente;
                break;
            case marca_asignada=="huewei":
                let tecnico5= prompt ("Digite los costos agregado de la reparacion: ");
                total_apagar_cliente= new tecnicos(tecnico5)+ pagos.pago
                return total_apagar_cliente;
                break;
            default:
                console.log("Tecnico no disponible para la marca "+registro_clientes.marca_telefono)
                break;
        }
    }

    function ver_estado() {
        if (registro_clientes.clientes!= null) {
            console.log("Se registro existosamente")
        } else if (primera_revision.diagnostico1!=null){
            console.log("Su telefono se realizo su primer diagnostico")
        } else if (registro_pagos.pago_realizado!=null){
            console.log("Se registro existosamente su pago")
        } else if (asignar_tecnicos.total_apagar_cliente!= null){
            console.log("Se realizo la reparacion del telefono ")
            if (registro_pagos.pago_cliente<= asignar_tecnicos.total_apagar_cliente) {
                console.log("Realice el pago faltante de " (asignar_tecnicos.total_apagar_cliente-registro_pagos.pago_cliente))
            }
        }
    }


    return {
        init: function (parametros) {
            Nombre = parametros.Nombre;
            Ubicacion=parametros.Ubicacion;
            configurar();
            eventos();
        },
    };
}();
class clientes{
    constructor(nombre,apellido,dni,marca_telefono,imei){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni
        this.marca_telefono=marca_telefono;
        this.imei=imei;
    }
};
class diagosntico{
    constructor(revison1){
        this.revison1=revison1;
    }
}
class pagos{
    constructor(pago,pago_cliente){
        this.pago=pago
        this.pago_cliente=pago_cliente;
    }
};
class tecnicos {
    constructor(tecnico1,tecnico2,tecnico3,tecnico4,tecnico5 ){
        this.tecnico1=tecnico1;
        this.tecnico2=tecnico2;
        this.tecnico3=tecnico3;
        this.tecnico4=tecnico4;
        this.tecnico5=tecnico5;
    }
}
