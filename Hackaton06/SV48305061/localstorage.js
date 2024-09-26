window.onload = guardado;

function guardado() {
    let boton = document.getElementById("boton");
    boton.addEventListener("click", registrar);
    let boton_pago = document.getElementById("boton_pago");
    boton_pago.addEventListener("click", pagos);
    let boton_diagnostico = document.getElementById("insertar_diagnostico");
    boton_diagnostico.addEventListener("click", asignar_diagnosticos);
    let boton_tecnico = document.getElementById("insertar_tecnico");
    boton_tecnico.addEventListener("click", asginar_tecnico)
    let boton_calidar_imei = document.getElementById("validacion_imei");
    boton_calidar_imei.addEventListener("click", validar_imei);
    let boton_verdiagnostico = document.getElementById("vdiagnostico");
    boton_verdiagnostico.addEventListener("click", mostrar_diagnostico)
    let boton_repuestos = document.getElementById("irepuestro");
    boton_repuestos.addEventListener("click", cobro_adicional)
    let boton_vdeudas=document.getElementById("vdeuda");
    boton_vdeudas.addEventListener("click", ver_cobro)
    let boton_pdeuda=document.getElementById("ideuda");
    boton_pdeuda.addEventListener("click",p_deuda)


}
function registrar() {
    let nombre = document.getElementById("nombres");
    let apellido = document.getElementById("apellidos");
    let dni = document.getElementById("dnis");
    let marca = document.getElementById("marcas");
    let imei = document.getElementById("imeis");

    let lista_nombre = [];
    let lista_apellido = [];
    let lista_dni = [];
    let lista_marca = [];
    let lista_imei = [];
    lista_nombre.push(nombre.value)
    lista_apellido.push(apellido.value)
    lista_dni.push(dni.value)
    lista_marca.push(marca.value)
    lista_imei.push(imei.value)
    localStorage.nombre = lista_nombre;
    localStorage.apellido = lista_apellido;
    localStorage.dni = lista_dni;
    localStorage.marca = lista_marca;
    localStorage.imei = lista_imei;

    mostra_registro();
}
function mostra_registro() {
    let nombre = document.getElementById("registro_nombre");
    nombre.innerHTML = "Nombres: " + localStorage.nombre;
    let apellido = document.getElementById("registro_apellido");
    apellido.innerHTML = "Apellidos: " + localStorage.apellido;
    let dni = document.getElementById("registro_dni");
    dni.innerHTML = "DNI: " + localStorage.dni;
    let marca = document.getElementById("registro_marca");
    marca.innerHTML = "Marca de telefono: " + localStorage.marca;
    let imei = document.getElementById("registro_imei");
    imei.innerHTML = "IMEI: " + localStorage.imei;
}

function asignar_diagnosticos() {
    let diagnostico = document.getElementById("diagnostico1");
    let lista_diag = [];
    lista_diag.push(diagnostico.value);
    localStorage.diagnostico = lista_diag;
    
}

function mostrar_diagnostico() {
    let diagnosticos = document.getElementById("diagnostico");
    diagnosticos.innerHTML= localStorage.diagnostico;
    asignar_diagnosticos();
}

function pagos() {
    let pago = document.getElementById("pago1");
    let pago_cliente = document.getElementById("pago_cliente");
    let lista_pago = [];
    let lista_pagocliente = [];
    lista_pago.push(pago.value)
    lista_pagocliente.push(pago_cliente.value)
    localStorage.pago = lista_pago;
    localStorage.pago_cliente = lista_pagocliente;
    mostra_pago();

}

function mostra_pago() {
    let abonado = Number(localStorage.pago) * 0.5;
    let pago_pagar;
    let pagar_cliente;
    let deuda=(parseInt(localStorage.pago) - parseInt(localStorage.pago_cliente));
    if (parseInt(localStorage.pago_cliente) >= abonado && parseInt(localStorage.pago_cliente) < parseInt(localStorage.pago)) {
        pago_pagar = document.getElementById("registro_pago");
        pago_pagar.innerHTML = "Primer pago de : " + localStorage.pago_cliente;
        pagar_cliente = document.getElementById("registro_pago_cliente")
        pagar_cliente.innerHTML = "Tiene una deuda de : " + deuda;
    } else if (parseInt(localStorage.pago_cliente) < abonado) {
        pago_pagar = document.getElementById("registro_pago");
        pago_pagar.innerHTML = "El pago del cliente no realizado, tiene que ser mayor o igual al 50%";
        pagar_cliente = document.getElementById("registro_pago_cliente")
        pagar_cliente.innerHTML = "";
    } else if (parseInt(localStorage.pago_cliente) == parseInt(localStorage.pago)) {
        pago_pagar = document.getElementById("registro_pago");
        pago_pagar.innerHTML = "Se pago  totalmente (Se le cobrar un extra por los materiales de la reparacion)";
        pagar_cliente = document.getElementById("registro_pago_cliente")
        pagar_cliente.innerHTML = "";
    }


}

function asginar_tecnico() {
    let tecnico;
    if (localStorage.marca == "sangsum") {
        tecnico = document.getElementById("ver_tecnico")
        tecnico.innerHTML = "Tecnico asignado Roberto experto en " + localStorage.marca;
    } if (localStorage.marca == "lg") {
        tecnico = document.getElementById("ver_tecnico")
        tecnico.innerHTML = "Tecnico asignado Arturo experto en " + localStorage.marca;
    } if (localStorage.marca == "apple") {
        tecnico = document.getElementById("ver_tecnico")
        tecnico.innerHTML = "Tecnico asignado Jose experto en " + localStorage.marca;
    } if (localStorage.marca == "huewei") {
        tecnico = document.getElementById("ver_tecnico")
        tecnico.innerHTML = "Tecnico asignado Juan experto en " + localStorage.marca;
    } if (localStorage.marca == "motorola") {
        tecnico = document.getElementById("ver_tecnico")
        tecnico.innerHTML = "Tecnico asignado Juan experto en " + localStorage.marca;
    }
}


function validar_imei() {
    const imei_robado = [123456, 245611, 147852, 245895, 654321, 159753, 369852, 258963, 987456, 654789, 456321];
    const imei_invalido = imei_robado.find((Element) => Element === parseInt(localStorage.imei));
    console.log(imei_invalido)
    if (imei_invalido == parseInt(localStorage.imei)) {
        let validar_imei = document.getElementById("mirar_imei");
        validar_imei.innerHTML = "Este telefono es robado"
    } else {
        let validar_imei = document.getElementById("mirar_imei");
        validar_imei.innerHTML = "Este telefono no esta registrado como robado"
    }
}

function cobro_adicional() {
    let cobrorepuesto=document.getElementById("pagar_repuestos");
    cobro_repu=[];
    cobro_repu.push(cobrorepuesto.value)
    localStorage.deuda=(parseInt(localStorage.pago) - parseInt(localStorage.pago_cliente)) + parseInt(cobro_repu);
}

function ver_cobro() {
    let vcobro=document.getElementById("deuda")
    vcobro.innerHTML= "La deuda es de s/"+localStorage.deuda;
}

function p_deuda() {
    let pdeuda=document.getElementById("pagar_deuda")
    let deudap=[];
    deudap.push(pdeuda.value);
    localStorage.pagar_deuda=deudap;
    let verdeuda=document.getElementById("verdeuda");
    verdeuda.innerHTML="Se cancelo toda la deuda"
}
