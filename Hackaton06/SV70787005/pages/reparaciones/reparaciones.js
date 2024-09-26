const data = new Database();
$("#frm_validar_imei").submit(function(e){
    e.preventDefault();
    let nro_imei = $("#add_val_imei").val();
    const busqueda = data.buscarByImei(nro_imei);
    if (busqueda == false) { // este imei esta bloqueado
        $("#1r_diagnostico").click()
        Swal.fire({
            icon : "success",
            title : "OK",
            text : "IMEI disponible, registre el diagnostico"
        })
    }else{
        $("#add_val_imei").val("");
        Swal.fire({
            icon : "warning",
            title : "Error",
            text : "Este imei esta bloqueado"
        })
    }
})
function cargar_reparaciones(){
    let row = data.get_reparaciones();
    let html = ``;
    let cont = 1;
    if (row.length > 0) {
        row.forEach(item => {
            let dataTecnico = data.buscarTecnicoByDni(item.dni_tecnico);
            html += `
            <tr>
                <td>${cont}</td>
                <td>${item.tramite}</td>
                <td>${item.imei}</td>
                <td>${item.dni_tecnico}</td>
                <td>${dataTecnico[0].apellido} ${dataTecnico[0].nombre}</td>
                <td>${item.fecha_rep}</td>
                <td><button class="btn btn-sm btn-warning"><i class="fa fa-edit"></i></button></td>
            </tr>`;
            cont ++;
        })
    }else{
        html = `
        <tr>
            <td colspan="7" class="text-center">No se encontraron datos</td>
        </tr>`;
    }
    $("#tbody_servicios").html(html);
}
cargar_reparaciones()

$("#add_operador").change(function(res){
    let tecnicosDisponibles = data.buscarTecnicoBySkill(res.target.value);
    let html_options = "";
    if (tecnicosDisponibles.length > 0) {
        html_options = `<option value="" hidden>Seleccione</option>`;
        tecnicosDisponibles.forEach((element) => {
            let contador = 1;
            html_options += `<option value="${element.dni}" >${element.apellido} ${element.nombre} (`
            element.skills.forEach(skill => {
                if (contador > 1) {
                    html_options +=  `/ `+skill;
                }else{
                    html_options += skill;
                }
                contador ++;
            })
            html_options += `)</option>`
        })
    }else{
        html_options = `<option value="" hidden>No se encontraron tecnicos para esta marca</option>`;
    }
    $("#add_tecnico_disponible").html(html_options);
})
$("#frm_reg_diagnostico").submit(function (e) {
    e.preventDefault();
    $("#btn_pagos").click()
})
$("#frm_pago").submit(function(e){
    e.preventDefault();
    let imei = $("#add_val_imei").val();
    let diagnostico = $("#add_diagnostico").val();
    let operador = $("#add_operador").val();
    let tecnico = $("#add_tecnico_disponible").val();
    let monto = $("#add_monto").val();
    let fecha_pago = $("#add_fec_pag").val();
    let nro_ope = $("#add_nro_ope").val();
    let confirmacion = $("#add_confirmacion").val();
    if (confirmacion !== "SI") {
        Swal.fire({
            icon : "success",
            title : "Ups!",
            text : "Confirmación de usuario no Valido"
        })
    }else {
        // parametros : imei,operador,monto,fecpag,nro_ope,tecnico,diagnostico
        let res = data.agregarReparacion(imei,operador,monto,fecha_pago,nro_ope,tecnico,diagnostico);
        if (res.state == 200) {
            cargar_reparaciones()
            $("#mdladdServicio").modal("hide")
            Swal.fire({
                icon : "success",
                title : "Exito!",
                text : "Reparación agregada correctamente"
            })
        }
    }
    limpiar()
    $("#validarImeiTab").click()
})
function limpiar(){
    $("#add_val_imei").val("")
    $("#add_diagnostico").val("")
    $("#add_operador").val("")
    $("#add_tecnico_disponible").val("")
    $("#add_monto").val("")
    $("#add_fec_pag").val("")
    $("#add_nro_ope").val("")
    $("#add_confirmacion").val("")
}