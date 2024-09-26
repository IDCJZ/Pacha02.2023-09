// Definir una clase para representar un teléfono
class Telefono {
  constructor(numeroSerie, IMEI, marca, modelo) {
    this.numeroSerie = numeroSerie;
    this.IMEI = IMEI;
    this.marca = marca;
    this.modelo = modelo;
    this.diagnostico = "";
    this.estado = "En revisión";
  }
}

// Definir una clase para representar un cliente
class Cliente {
  constructor(nombre, autorizacion, abono) {
    this.nombre = nombre;
    this.autorizacion = autorizacion;
    this.abono = abono;
  }
}

// Definir una clase para representar un técnico
class Tecnico {
  constructor(nombre, skills) {
    this.nombre = nombre;
    this.skills = skills;
  }
}

// Definir una clase para gestionar reparaciones
class Reparacion {
  constructor() {
    this.telefono = null;
    this.cliente = null;
    this.tecnico = null;
    this.repuestos = [];
  }

  asignarTelefono(telefono) {
    this.telefono = telefono;
    this.telefono.diagnostico = "Primera revisión realizada.";
  }

  asignarCliente(cliente) {
    this.cliente = cliente;
  }

  asignarTecnico(tecnico) {
    if (this.telefono && this.telefono.marca in tecnico.skills) {
      this.tecnico = tecnico;
    } else {
      console.log("El técnico no tiene las habilidades necesarias para este teléfono.");
    }
  }

  agregarRepuesto(repuesto) {
    this.repuestos.push(repuesto);
  }

  finalizarReparacion() {
    // Realizar la reparación y cambiar el estado del teléfono
    this.telefono.estado = "Reparado";
  }
}

// Ejemplo de uso
const telefono1 = new Telefono("123456", "IMEI123", "Samsung", "Galaxy S10");
const cliente1 = new Cliente("Juan Perez", true, 0.5);
const tecnico1 = new Tecnico("Técnico 1", { "Samsung": true, "Apple": false });
const reparacion1 = new Reparacion();

reparacion1.asignarTelefono(telefono1);
reparacion1.asignarCliente(cliente1);
reparacion1.asignarTecnico(tecnico1);

// Agregar repuestos
reparacion1.agregarRepuesto("Pantalla");
reparacion1.agregarRepuesto("Batería");

// Finalizar la reparación
reparacion1.finalizarReparacion();
console.log(telefono1.estado); 
