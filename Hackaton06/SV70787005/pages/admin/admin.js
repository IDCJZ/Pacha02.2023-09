const data = new Database();
// console.log(data.agregarImeiBloqueado("02840324", "choristar","robo"));
function cargar_celulares_bloqueados(){
    let row = data.get_celulares_bloqueados();
    let html = "";
    if (row.length > 0) {
        let contador = 1;
        row.forEach(item => {
            html += `
                    <tr>
                        <td>${contador}</td>
                        <td>${item.operador}</td>
                        <td>${item.imei}</td>
                        <td>${item.motivo}</td>
                        <td>
                        <div style="display:flex">
                            <button title="Editar" class="btn btn-sm btn-warning"><i class="fa fa-edit"></i></button>
                            <button title="Eliminar" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></button>
                        </div></td>
                    </tr>`;
            contador ++;
        })
    }else{
        html = `
        <tr>
            <td class="text-center" colspan="5">No se encontraron datos</td>
        </tr>`
    }
    document.getElementById("tbody_celulares_bloqueados").innerHTML = html
}
cargar_celulares_bloqueados()
$("#frm_agregar_imei").submit(function(e){
    e.preventDefault();
    let imei = document.getElementById("add_imei").value;
    let operador = document.getElementById("add_operador").value
    let motivo = document.getElementById("add_motivo").value;
    let res = data.agregarImeiBloqueado(imei,operador,motivo);
    if (res.state == 200) {
        cargar_celulares_bloqueados()
        Swal.fire({
            icon : "success",
            text : res.message
        })
    }
})