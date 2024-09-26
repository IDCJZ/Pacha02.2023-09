export function mostrarCliente(dni){
    const pagos = JSON.parse(localStorage.getItem('pagos'));
    const telefonos = JSON.parse(localStorage.getItem('telefonos'));
    if(telefonos !== null) {
        telefonos.forEach((telefono)=>{
            if(telefono.cliente.dni === dni){
                if(telefono.cliente.filtro == true){
                    if(telefono.diagnostico === 'Sin diagnostico'){
                        const fila = document.createElement('tr');
                        fila.classList.add('table-warning');
                        const informacion = `<th scope="row">${telefono.id}</th>
                                        <td>${telefono.marca}</td>
                                        <td>${telefono.so}</td>
                                        <td>${telefono.imei}</td>
                                        <td>${telefono.n_serie}</td>
                                        <td>${telefono.estado}</td>
                                        <td>${telefono.diagnostico}</td>
                                        <td>Sin precisar</td>
                                        <td>Sin precisar</td>
                                        <td>${telefono.tecnico}</td>
                                        `
                        fila.innerHTML = informacion;
                        document.getElementById('tabla-clientes').appendChild(fila);
                        
                    }else{
                        pagos.forEach(pago => {
                            if(pago.n_serie == telefono.n_serie){
                                const fila = document.createElement('tr');
                                fila.classList.add('table-warning');
                                const informacion = `<th scope="row">${telefono.id}</th>
                                        <td>${telefono.marca}</td>
                                        <td>${telefono.so}</td>
                                        <td>${telefono.imei}</td>
                                        <td>${telefono.n_serie}</td>
                                        <td>${telefono.estado}</td>
                                        <td>${telefono.diagnostico}</td>
                                        <td>${pago.costo}</td>
                                        <td>${pago.cancelado}</td>
                                        <td>${telefono.tecnico}</td>
                                        `
                                fila.innerHTML = informacion;
                                document.getElementById('tabla-clientes').appendChild(fila);
                            }
                        })
                        
                    }
                    
                }else{
                    console.log('No se puede mostrar')
                }
            }
        })
    }
    if(document.getElementById('tabla-clientes').children.length > 0){
        const div = document.createElement('div');
        div.innerHTML = `<button class="btn btn-primary mb-3" type="submit" id="formulario-pagar">Pagar</button>`;
        document.getElementById('celulares-cliente').appendChild(div); 
        const formulario_pagar = document.getElementById('formulario-pagar');
        if(pagos == null){
            formulario_pagar.disabled = true;
        }else{
            formulario_pagar.addEventListener('click',guardarPago);
        }
    
    };   
}

function guardarPago(){
    const div = document.createElement('div');
    div.id = 'formulario-pago';
    div.innerHTML = `<div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label" >Numero de serie</label>
                    <input type="text" class="form-control" id="serie" placeholder="Ingresar serie"></div>
                    <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label" >Pagar</label>
                    <input type="text" class="form-control" id="pagar" placeholder="Ingresar pago"></div>
                    <button type="button" class="btn btn-success" id="guardar-pago">Guardar</button>`;
    const celulares_cliente = document.getElementById('celulares-cliente');
    celulares_cliente.appendChild(div);
    const guardar_pago = document.getElementById('guardar-pago');
    guardar_pago.addEventListener('click',()=>{
        const pagos = JSON.parse(localStorage.getItem('pagos'));
        const serie = document.getElementById('serie').value;
        const pagar = parseInt(document.getElementById('pagar').value);
        if(pagar === '' || serie === ''){
            const div1 = document.createElement('div');
            div1.innerHTML = `<div class="alert alert-success mt-3" role="alert">
                                Debe llenar todos los campos
                                </div>`
            celulares_cliente.appendChild(div1);
            setTimeout(() => {
                div1.remove();
            }, 3000);
        }else{
            let encontrado = false;
            if(pagos !== null){
                pagos.forEach(p => {
                    if(p.n_serie === serie && p.cancelado < p.costo){
                        encontrado = true;
                        p.cancelado += pagar;
                        window.location.href = 'cliente.html';
                    }
                })
                localStorage.setItem('pagos',JSON.stringify(pagos));
                if(encontrado == false){
                    console.log('La serie no se encontro');
                }
            }
        }
    })
}

 


