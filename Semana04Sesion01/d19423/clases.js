class Persona{
    constructor(nombre, apellido, tipo_documento, numero_documento, sexo, direccion, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo_documento = tipo_documento;
        this.numero_documento = numero_documento;
        this.sexo = sexo;
        this.direccion = direccion;
        this.telefono = telefono
    }   
    llamar_por_telefono(razon_llamada){
        if(this.telefono === undefined || this.telefono == null){
            console.log(`se esta llamando a ${this.nombre} ${this.apellido} pero no tiene registrado un numero`)
        }
        else{
            console.log(`se esta llamando a ${this.nombre} ${this.apellido} al numero ${this.telefono} por ${razon_llamada}`)
        }
    }
}

class Medico extends Persona{
    numero_licencia = null;
    constructor(nombre, apellido, tipo_documento, numero_documento, sexo, direccion, telefono){
        super(nombre, apellido, tipo_documento, numero_documento, sexo, direccion,telefono);
        
    }
    get numero_licencia(){
        return this.numero_licencia
    }
    
    set numero_licencia(nuevo_numero){
        this.numero_licencia = nuevo_numero;
    }
    operar(){
        if(this.numero_licencia!=null ){
            console.log(`El medico ${this.nombre} ${this.apellido} esta operando`)
        }
        else{
            console.log(`El medico ${this.nombre} ${this.apellido} no puede operar`)
        }
    }
}

class Enfermero extends Persona{
    constructor(nombre, apellido, tipo_documento, numero_documento, sexo, direccion,telefono,numero_matricula=null){
        super(nombre, apellido, tipo_documento, numero_documento, sexo, direccion,telefono);
        this.numero_matricula = numero_matricula;
    }
    operar(){
        if(this.numero_matricula!=null){
            console.log(`El enfermero ${this.nombre} ${this.apellido} esta ayudando en la operacion`)
        }else{
            console.log(`El enfermero ${this.nombre} ${this.apellido} no puede ayudar en la operacion`)
        }
    }
}

let med_Roberto = new Medico("Roberto","Pineda","CE","001575291","Masculino","Lima",null)
let enf_Karen = new Enfermero("Karen", "Lam", "DNI","43568256","Femenino","Chiclayo",null, "MT00945");

med_Roberto.operar()
med_Roberto.numero_licencia = "LIC00989";
med_Roberto.operar()
med_Roberto.llamar_por_telefono("Urgencia Medica")
med_Roberto.telefono = "916730940"
med_Roberto.llamar_por_telefono("Urgencia Medica")
enf_Karen.operar()
enf_Karen.llamar_por_telefono("Reporte de pacientes")