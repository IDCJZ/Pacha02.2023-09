const database = new Database();
function cargar_tecnicos() {
    let html = ``;
    let row = database.get_tecnicos();
    if (row.length > 0) {
        let cont = 1;
        row.forEach(element => {
            html += `
            <tr>
                <td>${cont}</td>
                <td>${element.apellido}</td>
                <td>${element.nombre}</td>
                <td>${element.dni}</td>
                <td>`
            let skills = element.skills;
            if (skills.length > 0) {
                skills.forEach(skill => {
                    html += `
                    <span class="badge rounded-pill text-bg-primary">${skill}</span>
                    `
                });
            }else{
                html += `
                <span class="badge rounded-pill text-bg-secondary">No hay</span>
                `
            }
            html += `
                </td>
                <td><button class="btn btn-sm btn-warning"><i class="fa fa-edit"></i></button></td>`
                html +=
            `</tr>`;
            cont ++;
        });
    }else{
        html = `<tr><td colspan="6" class="text-center">No se encontraron datos</td></tr>`
    }
    $("#tbody_tecnicos").html(html)
}
cargar_tecnicos()
$("#frm_agregar_tecnico").submit(function(e){
    e.preventDefault()
    let nombres = document.getElementById("add_nombres").value;
    let apellidos = document.getElementById("add_apellidos").value;
    let dni = document.getElementById("add_dni").value;
    let skills = $("#add_skills").val();
    let res = database.agregarTecnico(nombres,apellidos,dni,skills);
    if (res.state == 200) {
        cargar_tecnicos()
        Swal.fire({
            icon : "success",
            text : res.message
        })
    }
})