$("#frm_consultar_tramite").submit(function(e){
    e.preventDefault();
    let codigo = $("#inpt_cod_tram").val()
    Swal.fire({
        icon : "success",
        title : "Resultado de la Busqueda",
        text : `El tramite con codigo ${codigo} aun se encuentra en reparacion`
    })
})