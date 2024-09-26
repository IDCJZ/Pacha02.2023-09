/*Se necesita crear un sistema que maneje las reparaciones de celulares en un local con varias sucursales
Tomar en cuenta los siguientes casos de uso:
- El telefono ingresado debe tener numero de serie e IMEI que no esten reportados para acceder al servicio ||
- Un telefono primero debe pasar por una primera revision y se debe guardar el primer diagnostico
- Se debe tener la autorizacion escrita del usuario y el abono del 50% de la reparacion para que acceda al servicio ||
- Los tecnicos pueden tener uno o varios skills que se adecuen a la marca de telefono que se necesita acceder al servicio ||
- Los repuestos se agegaran a la reparacion de telefono ||
- Se debe mostrar el estado del equipo en sus diferentes estaciones de trabajo HTML */

const soporte = function ()
{
    let numero;
    let clientes;
    let empleado = [];
{
    //numero de serie 
    function configurar()
    {
        let numero_de_serie = document.getElementById("numero de serie");
        titulo.innerHTML = numero_de_serie
        let IMEI = document.getElementById("IMEI")
        sede.innerText = IMEI;
        acceso();
    }

    //revision
    function revision ()
    {
        revision1 = prompt("Describa su problema")
        diagnostico = diagnostico;
        fecha_adquisicion = prompt("Escriba la fecha de adquisicion")
        fecha_devolucion = prompt("Escriba la fecha de devolucion")
        let empleado = new empleado(nombre,skills,codigo)
        nueva_reserva.asignar_trabajador(trabajador[0]);
        nueva_reserva.asignar_trabajador_2(trabajador2[0]);
        nueva_reserva.asignar_trabajador_3(trabajador3[0]);
        nueva_reserva.asignar_trabajador_4(trabajador4[0]);
       
        dibujar_resultados(nueva_reserva)
    }

 //autorizacion
var total = parseFloat(prompt("Ingrese el monto total de la reparacion:"));

if (isNaN(total)) 
{
  alert("El monto ingresado no es válido. Por favor, ingrese un número válido.");
}
 else
{
  var abono = total * 0.5;

  var abonoIngresado = parseFloat(prompt("Ingrese el abono (50% del monto total es $" + abono + "):"));

  if (isNaN(abonoIngresado)) 
  {
    alert("El abono ingresado no es válido. Por favor, ingrese un número válido.");
  }
   else if (abonoIngresado === abono) 
  {
    alert("Pago autorizado. Se ha realizado un abono del 50%.");
  }
   else 
  {
    alert("Pago no autorizado. El abono debe ser del 50% del monto total.");
  }
}

    //tecnicos
    function empleado_de_local()
    {
        empleado1 = new empleado("Juanito Alimaña","Recuperacion de numero",235)
        empleados.push(trabajador1);
        empleado2 = new empleado("Pedro Navaja","Soporte Tecnico", 711)
        empleados.push(trabajador2)
        empleado3 = new empleado("Omar Arriola","Recuperacion de Datos", 720)
        empleados.push(trabajador3)
        empleado4 = new empleado("Leonel Messi","Reparaciones Generales", 100)
        empleados.push(trabajador4)

    }

    //repuestos
    var repuestos = prompt(parseFloat("Escriba el nombre del repuesto"))
    var tipo_de_repuesto = prompt(parseFloat("Escriba el tipo de repuesto"))
    
}
}();

class empleado
{
    constructor(nombre,skills,codigo)
    {
        this.nombre = nombre;
        this.skills = skills;
        this.codigo = codigo;
        this.habilitado = false;
        this.ocupado = 0;
        
    }
    asignar_trabajador(trabajador1)
    {
        this.trabajador = trabajador1;
    }
    asignar_trabajador_2 (trabajador2)
    {
      this.trabajador = trabajador2;
    }
    asignar_trabajador_3(trabajador3)
    {
        this.trabajador = trabajador3;
    }
    asignar_trabajador_4(trabajador4)
    {
        this.trabajador = trabajador4;
    }
}


