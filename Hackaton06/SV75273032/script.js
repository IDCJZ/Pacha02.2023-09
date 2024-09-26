class Telefono {
    constructor(serial, imei, marca, modelo) {
      this.serial = serial;
      this.imei = imei;
      this.marca = marca;
      this.modelo = modelo;
      this.diagnostico = '';
      this.autorizacion = false;
      this.abono = 0;
      this.estado = 'En espera';
    }
  }
  
  class Tecnico {
    constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills;
    }
  }
// Variables para almacenar sucursales, técnicos y teléfonos
const sucursales = [];
const tecnicos = [];
const telefonos = [];678







// Función para registrar un teléfono
document.getElementById('phoneForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const serial = document.getElementById('serial').value;
  const imei = document.getElementById('imei').value;
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;

  const telefono = new Telefono(serial, imei, marca, modelo);
  telefonos.push(telefono);

  // Mostrar el estado del sistema
  mostrarEstadoSistema();
  event.target.reset();
});

// Función para registrar un técnico
document.getElementById('technicianForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const nombreTecnico = document.getElementById('nombreTecnico').value;
  const skillsTecnico = document.getElementById('skillsTecnico').value.split(',');

  const tecnico = new Tecnico(nombreTecnico, skillsTecnico);
  tecnicos.push(tecnico);

  // Mostrar el estado del sistema
  mostrarEstadoSistema();
  event.target.reset();
});

// Función para mostrar el estado del sistema
function mostrarEstadoSistema() {
  const systemStatus = document.getElementById('systemStatus');
  systemStatus.innerHTML = '';

  systemStatus.innerHTML += '<h3>Teléfonos Registrados:</h3>';
  telefonos.forEach((telefono) => {
    systemStatus.innerHTML += `<p>${telefono.serial} - ${telefono.marca} ${telefono.modelo} - Estado: ${telefono.estado}</p>`;
  });

  systemStatus.innerHTML += '<h3>Técnicos Registrados:</h3>';
  tecnicos.forEach((tecnico) => {
    systemStatus.innerHTML += `<p>${tecnico.nombre} - Skills: ${tecnico.skills.join(', ')}</p>`;
  });
}

// Inicialización de la interfaz
mostrarEstadoSistema();
