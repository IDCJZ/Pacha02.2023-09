
document.addEventListener('DOMContentLoaded',cargarData);

const tecnico1 = {
    nombre : 'Carlos',
    especialidad : 'Android'
}
const tecnico2 = {  
    nombre : 'Alvaro',
    especialidad : 'IOS'
}
const tecnico3 ={
    nombre : 'Renato',
    especialidad : 'IOS y Android'
}

const tecnicos = [tecnico1,tecnico2,tecnico3];




const reparar = document.getElementById('reparar');
const registrarse = document.getElementById('registrarse');
const logearse = document.getElementById('ingresar');
const usuarios = sessionStorage.getItem('usuario');
const reporte = document.getElementById('reporte');


if(reporte !== null){
    reporte.addEventListener('click',obtenerReporte);
}

if(logearse !== null){
    logearse.addEventListener('click',(e)=>{
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const clientes = JSON.parse(localStorage.getItem('clientes'));
        if(clientes !== null){
            clientes.forEach(cliente => {
                if(cliente.email === email && cliente.password === password){
                    const usuario = {
                        nombre : cliente.cliente.nombre,
                        apellido : cliente.cliente.apellido,
                        dni : cliente.cliente.dni
                    };
                    sessionStorage.setItem('usuario',JSON.stringify(usuario));
                    window.location.href = 'cliente.html';
                    return;
                }else{
                    console.log('usuario no encontrado');
                }
            });  
        }else{
            console.log('usuario no encontrado');
        }
    })
}


if(registrarse !== null){
    registrarse.addEventListener('click',(e)=>{
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const dni = document.getElementById('dni').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const arreglo = [nombre,apellido,dni,email,password];
        for (let index = 0; index < arreglo.length; index++) {
            if(arreglo[index] === ''){
                alert('Debe llenar todos los campos');
                e.preventDefault();
                return;
            }
        }
        const clientes = localStorage.getItem('clientes');
        let arreglo2 = [];
        if(clientes == null){
            const cliente = new Cliente(1,nombre,apellido,dni);
            const usuario = new Usuario(1,email,password);
            usuario.setCliente(cliente);
            arreglo2.push(usuario);
            localStorage.setItem('clientes',JSON.stringify(arreglo2));
        }else{
            arreglo2 = JSON.parse(localStorage.getItem('clientes'));
            const cliente = new Cliente(arreglo2.length + 1,nombre,apellido,dni);
            const usuario = new Usuario(arreglo2.length + 1,email,password);
            usuario.setCliente(cliente);
            arreglo2.push(usuario);
            localStorage.setItem('clientes',JSON.stringify(arreglo2));
        }
    })
}

function cargarData(){
    const reparaciones = {
        'usb' : 100,
        'audio' : 150,
        'placa' : 200
    };
    const tecnicos = {
        'android' : 'Perez',
        'ios' : 'Sotil'
    }
    localStorage.setItem('tecnicos',JSON.stringify(tecnicos));
    localStorage.setItem('reparaciones',JSON.stringify(reparaciones));
    const clientes = JSON.parse(localStorage.getItem('clientes'));
    const telefonos = JSON.parse(localStorage.getItem('telefonos'));
    const pagos = JSON.parse(localStorage.getItem('pagos'));
    if(clientes !== null){
        clientes.forEach((cliente)=>{
            if(cliente.cliente.filtro == true){
                const fila = document.createElement('tr');
                fila.classList.add('table-warning');
                const informacion = `<th scope="row">${cliente.cliente.id}</th>
                                    <td>${cliente.cliente.nombre}</td>
                                    <td>${cliente.cliente.apellido}</td>
                                    <td>${cliente.cliente.dni}</td>
                                    `
                                    
                fila.innerHTML = informacion;
                document.getElementById('tabla-clientes').appendChild(fila);
                
            }
            
        });
        const div = document.createElement('div');
        div.innerHTML = `<button class="btn btn-primary mb-3" type="submit" id="agregar-telefono">Agregar telefono</button>`;
        document.getElementById('clientes').appendChild(div);
        const agregar_telefono = document.getElementById('agregar-telefono');
        agregar_telefono.addEventListener('click',formularioTelefono);
    }
    if(telefonos !== null){
        
        telefonos.forEach(telefono => {
            const fila = document.createElement('tr');
            fila.classList.add('table-primary');
            const html = `<th scope="row">${telefono.id}</th>
                            <td>${telefono.marca}</td>
                            <td>${telefono.so}</td>
                            <td>${telefono.imei}</td>
                            <td>${telefono.n_serie}</td>
                            <td>${telefono.autorizacion}</td>
                            <td>${telefono.estado}</td>
                            <td>${telefono.revision}</td>
                            <td>${telefono.diagnostico}</td>
                            <td>${telefono.cliente.dni}</td>
                            <td>${telefono.tecnico}</td>`;
            fila.innerHTML = html;
            document.getElementById('tabla-telefonos').appendChild(fila);
        })
        const div = document.createElement('div');
        div.innerHTML = `<button type="button" class="btn btn-primary mb-3" id="diagnostico">Agregar diagnostico</button>
        <button type="button" class="btn btn-secondary mb-3" id="reparar">Mandar a reparacion</button>
        <button type="button" class="btn btn-secondary mb-3" id="finalizar-reparacion">Finalizar reparacion</button>`;
        document.getElementById('telefono').appendChild(div);
        document.getElementById('diagnostico').addEventListener('click',formularioDiagnostico);
        const reparar = document.getElementById('reparar');
        reparar.addEventListener('click',procesarCelular);
        const finalizar_reparacion = document.getElementById('finalizar-reparacion');
        finalizar_reparacion.addEventListener('click',terminarReparacion);
    }
    if(pagos !== null){
        pagos.forEach(pago => {
        const fila = document.createElement('tr');
        fila.classList.add('table-warning');
        const informacion = `<th scope="row">${pago.id}</th>
                                <td>${pago.n_serie}</td>
                                <td>${pago.diagnostico}</td>
                                <td>${pago.costo}</td>
                                <td>${pago.cancelado}</td>
                                `                              
        fila.innerHTML = informacion;
        document.getElementById('tabla-pagos').appendChild(fila);
        })
    }
}

function terminarReparacion(){
    const div_telefono = document.getElementById('telefono');
    const div = document.createElement('div');
    div.id = 'formulario-final';
    div.innerHTML = `<div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label" >Numero de serie</label>
                    <input type="text" class="form-control" id="serie" placeholder="Ingresar serie"></div>
                    <button type="button" class="btn btn-success" id="finalizar">Guardar</button>`;
    div_telefono.appendChild(div);
    const finalizar = document.getElementById('finalizar');
    finalizar.addEventListener('click',()=>{
        const serie = document.getElementById('serie').value;
        if(serie === ''){
            console.log('debe llenar los campos');
        }else{
            const telefonos = JSON.parse(localStorage.getItem('telefonos'));
            const pagos = JSON.parse(localStorage.getItem('pagos'));
            let encontrado = false;
            let cancelado = false;
            pagos.forEach(p => {
                if(p.n_serie === serie){
                    if(p.cancelado = p.costo){
                        cancelado = true;
                        telefonos.forEach(t => {
                            if(t.n_serie === serie){
                                encontrado = true;
                                t.estado = 'Concluido';
                                const array = [];
                                array.push(t);
                                localStorage.setItem('historial-telefonos',JSON.stringify(array));   
                            }
                        })
                    }
                }
            })
            localStorage.setItem('telefonos',JSON.stringify(telefonos));
            window.location.href = 'tecnico.html';
            if(encontrado == false){
                console.log('No existe la serie')
            }
        }
    })
}

function procesarCelular(){
    const pagos = JSON.parse(localStorage.getItem('pagos'));
    const div_telefono = document.getElementById('telefono');
    const div = document.createElement('div');
    div.id = 'formulario-reparacion';
    div.innerHTML = `<div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label" >Numero de serie</label>
                    <input type="text" class="form-control" id="serie" placeholder="Ingresar serie"></div>
                    <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label" >Autorizacion</label>
                    <input type="text" class="form-control" id="auto" placeholder="Ingresar autorizacion"></div>
                    <button type="button" class="btn btn-success" id="guardar-reparacion">Guardar</button>`;
    div_telefono.appendChild(div);
    const guardar_reparacion = document.getElementById('guardar-reparacion');
    guardar_reparacion.addEventListener('click',()=>{
        const telefonos = JSON.parse(localStorage.getItem('telefonos'));
        const serie = document.getElementById('serie').value;
        const autorizacion = document.getElementById('auto').value;
        if(serie === '' || autorizacion === ''){
            const div1 = document.createElement('div');
            div1.innerHTML = `<div class="alert alert-success mt-3" role="alert">
                                Debe llenar los campos
                            </div>`
            div_telefono.appendChild(div1);
            setTimeout(() => {
                div1.remove();
            }, 3000);
        }else{
            let encontrado = false;
            pagos.forEach(p => {
                if(p.n_serie === serie){
                    encontrado = true;
                    if(p.cancelado >= p.costo/2 && autorizacion === 'si'){
                        console.log('Puedes acceder al servicio');
                        telefonos.forEach(t => {
                            if(t.n_serie === serie){
                                t.estado = 'En reparacion';
                                t.autorizacion = autorizacion;
                                const tecnicos = JSON.parse(localStorage.getItem('tecnicos'));
                                if(t.so === 'Android'){
                                    t.tecnico = tecnicos.android;
                                }else{
                                    t.tecnico = tecnicos.ios;
                                }
                            }
                        })
                        localStorage.setItem('telefonos',JSON.stringify(telefonos));
                        window.location.href = 'tecnico.html';
                    }else{
                        console.log('Falta el pago o no escribio SI en la autorizacion')
                    }
                }
            });
            if(encontrado == false){
                const div1 = document.createElement('div');
                div1.innerHTML = `<div class="alert alert-success mt-3" role="alert">
                                    No existe ese numero de serie
                                </div>`
                div_telefono.appendChild(div1);
                setTimeout(() => {
                    div1.remove();
                }, 3000);   
            }
        }
    })
}

function formularioDiagnostico(){
    const div = document.createElement('div');
    div.id = 'formulario-telefono';
    div.innerHTML = `<div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label" >Numero de serie</label>
                    <input type="text" class="form-control" id="serie" placeholder="Ingresar serie">
                    </div><div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Diagnostico</label>
                    <input type="text" class="form-control" id="diag" placeholder="Ingresar diagnostico">
                    </div>
                    <button type="button" class="btn btn-success mb-3" id="guardar-diagnostico">Guardar</button>`;
    document.getElementById('telefono').appendChild(div);
    document.getElementById('guardar-diagnostico').addEventListener('click',guardarDiagnostico);
}

function guardarDiagnostico(){
    const serie = document.getElementById('serie').value;
    const diagnostico = document.getElementById('diag').value;
    const telefonos = JSON.parse(localStorage.getItem('telefonos'));
    let cantidad_telefonos = telefonos.length;
    telefonos.forEach(telefono => {
        if(telefono.n_serie == serie){
            cantidad_telefonos = cantidad_telefonos - 1;
        }   
    });
    if(telefonos.length == cantidad_telefonos){
        console.log('Numero de serie no registrado');
    }else{
        let r = JSON.parse(localStorage.getItem('reparaciones'));
        for(error in r){
            if(error === diagnostico){
                const pagos = JSON.parse(localStorage.getItem('pagos'));
                if(pagos == null){
                    const arreglo = [];
                    const pago = new Pago(1,serie,diagnostico,r[error]);
                    telefonos.forEach(telefono => {
                       if(telefono.n_serie == serie){
                            pago.setCliente(telefono.cliente);
                            telefono.diagnostico = diagnostico;
                            telefono.revision = telefono.revision + 1;
                            let filas = document.getElementById('tabla-telefonos').children;
                                for (let a = 0; a < filas.length; a++) {
                                    for (let b = 0; b < filas[a].children.length; b++) {    
                                        if(filas[a].children[b].cellIndex == 4 && filas[a].children[b].textContent === serie){
                                            let fila = filas[a];
                                            for (let c = 0; c < fila.children.length; c++) {
                                                if(fila.children[c].cellIndex == 8){
                                                    fila.children[c].textContent = diagnostico;
                                                }
                                                if(fila.children[c].cellIndex == 7){
                                                    fila.children[c].textContent = telefono.revision;
                                                }
                                            }
                                        }    
                                    } 
                                }
                        }   
                    });
                    arreglo.push(pago);
                    localStorage.setItem('pagos',JSON.stringify(arreglo));
                    localStorage.setItem('telefonos',JSON.stringify(telefonos));
                    mostrarPagos(pago);
                }else{
                    let falta_pagar = false;
                    pagos.forEach(p => {
                        if(p.n_serie === serie){
                            if(p.cancelado < p.costo){
                                falta_pagar = true;
                            }
                        }
                    });
                    if(falta_pagar){
                        console.log('Falta cancelar proceso pendiente');
                    }else{
                        let reparando = false;
                        telefonos.forEach(t => {
                            if(t.estado === 'En reparacion'){
                                reparando = true;
                                console.log('Tiene el celular aun en reparacion');
                            }
                        })
                        if(reparando == false){
                            const pago = new Pago(pagos.length + 1,serie,diagnostico,r[error]);
                            telefonos.forEach(telefono => {
                            if(telefono.n_serie == serie){
                                pago.setCliente(telefono.cliente);
                                telefono.diagnostico = diagnostico;
                                telefono.revision = telefono.revision + 1;
                                let filas = document.getElementById('tabla-telefonos').children;
                                for (let a = 0; a < filas.length; a++) {
                                    for (let b = 0; b < filas[a].children.length; b++) {    
                                        if(filas[a].children[b].cellIndex == 4 && filas[a].children[b].textContent === serie){
                                            let fila = filas[a];
                                            for (let c = 0; c < fila.children.length; c++) {
                                                if(fila.children[c].cellIndex == 8){
                                                    fila.children[c].textContent = diagnostico;
                                                }
                                                if(fila.children[c].cellIndex == 7){
                                                    fila.children[c].textContent = telefono.revision;
                                                }
                                            }
                                        }    
                                    } 
                                }
                            }   
                        });
                        localStorage.setItem('telefonos',JSON.stringify(telefonos));
                        pagos.push(pago);
                        localStorage.setItem('pagos',JSON.stringify(pagos));
                        mostrarPagos(pago);
                        }   
                    }  
                }
            }
        }
        document.getElementById('formulario-telefono').remove();
    }  
}

function mostrarPagos(pago){
            const fila = document.createElement('tr');
            fila.classList.add('table-warning');
            const informacion = `<th scope="row">${pago.id}</th>
                                    <td>${pago.n_serie}</td>
                                    <td>${pago.diagnostico}</td>
                                    <td>${pago.costo}</td>
                                    <td>${pago.cancelado}</td>
                                    `                              
            fila.innerHTML = informacion;
            document.getElementById('tabla-pagos').appendChild(fila);     
}

function formularioTelefono(){
    const div = document.createElement('div');
    div.id = 'formulario-telefono';
    div.innerHTML = `<div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label" >Dni</label>
                    <input type="text" class="form-control" id="dni" placeholder="Ingresar dni">
                    </div><div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Marca telefono</label>
                    <input type="text" class="form-control" id="marca" placeholder="Ingresar Marca" disabled=true>
                    </div>
                    <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Sistema Operativo</label>
                    <input type="text" class="form-control" id="so" placeholder="Ingresar Software" disabled=true>
                    </div>
                    <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Imei</label>
                    <input type="text" class="form-control" id="imei" placeholder="Ingresar Imei" disabled=true>
                    </div>
                    <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Numero de Serie</label>
                    <input type="text" class="form-control" id="n-serie" placeholder="Ingresar Serie" disabled=true>
                    </div>
                    <button type="button" class="btn btn-success mb-3" id="guardar-telefono" disabled=true>Guardar</button>`;
    document.getElementById('clientes').appendChild(div);
    const guardar_telefono = document.getElementById('guardar-telefono');
    const dni = document.getElementById('dni');
    dni.addEventListener('change',filtrarDni);
    guardar_telefono.addEventListener('click',guardarTelefono);
}

function filtrarDni(){
    const dni = document.getElementById('dni').value;
    const clientes = JSON.parse(localStorage.getItem('clientes'));
    const num_vueltas = clientes.length;
    let num_vueltas2 = clientes.length;
    if(clientes !== null){
        clientes.forEach(cliente => {
            if(cliente.cliente.dni == dni){
                num_vueltas2 =num_vueltas - 1;
                return;
            }
        });
        if(num_vueltas == num_vueltas2 ){
            document.getElementById('marca').disabled = true;
            document.getElementById('so').disabled = true;
            document.getElementById('imei').disabled = true;
            document.getElementById('n-serie').disabled = true;
            document.getElementById('guardar-telefono').disabled = true;
            console.log('Cliente no existe')
        }else{
            document.getElementById('marca').disabled = false;
            document.getElementById('so').disabled = false;
            document.getElementById('imei').disabled = false;
            document.getElementById('n-serie').disabled = false;
            document.getElementById('guardar-telefono').disabled = false;
            console.log('Cliente existe')
        }
    }
}

function guardarTelefono(){
    const dni = document.getElementById('dni').value;
    const marca = document.getElementById('marca').value;
    const so = document.getElementById('so').value;
    const imei = document.getElementById('imei').value;
    const n_serie = document.getElementById('n-serie').value;
    const clientes = JSON.parse(localStorage.getItem('clientes'));
    const telefonos = JSON.parse(localStorage.getItem('telefonos'));
    const array = [dni,marca,so,imei,n_serie];
    let contador = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index] === ''){
            contador ++;
        }    
    }
    if(contador > 0){
        console.log('No debe de haber ningun campo vacio');
    }else{
        let arreglo = [];
        let nuevo_telefono;
        clientes.forEach((cliente)=>{
            if(cliente.cliente.dni === dni){
                if(telefonos == null){
                    nuevo_telefono = new Telefono(1,marca,n_serie,imei,so);
                    let c = new Cliente(cliente.cliente.id,cliente.cliente.nombre,cliente.cliente.apellido,cliente.cliente.dni);
                    c.filtro = cliente.cliente.filtro;
                    nuevo_telefono.setCliente(c);
                    arreglo.push(nuevo_telefono);
                    localStorage.setItem('telefonos',JSON.stringify(arreglo));
                    document.getElementById('formulario-telefono').remove();
                    const fila = document.createElement('tr');
                    fila.classList.add('table-primary');
                    const html = `<th scope="row">${nuevo_telefono.id}</th>
                                    <td>${nuevo_telefono.marca}</td>
                                    <td>${nuevo_telefono.so}</td>
                                    <td>${nuevo_telefono.imei}</td>
                                    <td>${nuevo_telefono.n_serie}</td>
                                    <td>${nuevo_telefono.autorizacion}</td>
                                    <td>${nuevo_telefono.estado}</td>
                                    <td>${nuevo_telefono.revision}</td>
                                    <td>${nuevo_telefono.diagnostico}</td>
                                    <td>${nuevo_telefono.cliente.dni}</td>
                                    <td>Sin asignar</td>`;
                    fila.innerHTML = html;
                    document.getElementById('tabla-telefonos').appendChild(fila);
                    const div = document.createElement('div');
                    div.innerHTML = `<button type="button" class="btn btn-primary mb-3" id="diagnostico">Agregar diagnostico</button>
                    <button type="button" class="btn btn-secondary mb-3" id="reparar">Mandar a reparacion</button>`;
                    document.getElementById('telefono').appendChild(div);
                    return;
                }else{
                    const arreglo_telefonos = JSON.parse(localStorage.getItem('telefonos'));
                    const cantidad_telefonos = telefonos.length;
                    nuevo_telefono = new Telefono(cantidad_telefonos + 1,marca,n_serie,imei,so);
                    let c = new Cliente(cliente.cliente.id,cliente.cliente.nombre,cliente.cliente.apellido,cliente.cliente.dni);
                    c.setFiltro(cliente.cliente.filtro);
                    nuevo_telefono.setCliente(c);
                    arreglo_telefonos.push(nuevo_telefono);
                    localStorage.setItem('telefonos',JSON.stringify(arreglo_telefonos));
                    document.getElementById('formulario-telefono').remove();
                    const fila = document.createElement('tr');
                    fila.classList.add('table-primary');
                    const html = `<th scope="row">${nuevo_telefono.id}</th>
                                    <td>${nuevo_telefono.marca}</td>
                                    <td>${nuevo_telefono.so}</td>
                                    <td>${nuevo_telefono.imei}</td>
                                    <td>${nuevo_telefono.n_serie}</td>
                                    <td>${nuevo_telefono.autorizacion}</td>
                                    <td>${nuevo_telefono.estado}</td>
                                    <td>${nuevo_telefono.revision}</td>
                                    <td>${nuevo_telefono.diagnostico}</td>
                                    <td>${nuevo_telefono.cliente.dni}</td>
                                    <td>Sin asignar</td>`;
                    fila.innerHTML = html;
                    document.getElementById('tabla-telefonos').appendChild(fila);
                    
                    return;   
                }
            }
        
        })
        
    }
    
    
}

function filtrarCliente(){
    const clientes = JSON.parse(localStorage.getItem('clientes'));
    if(clientes !== null){
        const dni = document.getElementById('dni').value;
        let encontrado = false;
        clientes.forEach((cliente)=>{
            if(cliente.cliente.dni == dni){
                encontrado = true;
                const div_respuesta =  document.getElementById('filtro-exitoso');
                const div1 = document.createElement('div');
                div1.innerHTML = `<div class="alert alert-success mt-3" role="alert">
                                    Cliente ya registrado
                                    </div>`
                div_respuesta.appendChild(div1);
                setTimeout(() => {
                    div1.remove();
                    const formulario = (document.getElementById('formulario'));
                    formulario.remove();
                    const div2 = document.createElement('div');
                    div2.id = 'spinner';
                    div2.innerHTML = `<button class="btn btn-primary mt-3 mb-3" type="button" disabled>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    <span class="visually-hidden">Loading...</span>
                                    </button>
                                    <button class="btn btn-primary mt-3 mb-3" type="button" disabled>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Extrallendo datos del cliente...
                                    </button>`;
                    document.getElementById('operacion-reporte').appendChild(div2);
                    setTimeout(() => {
                        document.getElementById('spinner').remove();
                        const fila = document.createElement('tr');
                        fila.classList.add('table-warning');
                        const informacion = `<th scope="row">${cliente.cliente.id}</th>
                                            <td>${cliente.cliente.nombre}</td>
                                            <td>${cliente.cliente.apellido}</td>
                                            <td>${cliente.cliente.dni}</td>
                                            `
                        fila.innerHTML = informacion;
                        document.getElementById('tabla-clientes').appendChild(fila);
                        
                        cliente.cliente.filtro = true;
                        localStorage.setItem('clientes',JSON.stringify(clientes));
                    }, 3000);
                }, 3000);
                return;
            }
        })
        if(encontrado == false){
            console.log('No existe ese cliente');
        }else{
            const div = document.createElement('div');
            div.innerHTML = `<button class="btn btn-primary mb-3" type="submit" id="agregar-telefono">Agregar telefono</button>`;
            document.getElementById('clientes').appendChild(div);
        }
    }else{
        console.log('No hay ni un cliente');
    }
}

function ingresarCliente(){
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni2').value;
    const clientes = JSON.parse(localStorage.getItem('clientes'));
    if(clientes == null){
        const c = new Cliente (1,nombre,apellido,dni);
        c.setFiltro(true);
        const usuario = new Usuario(null,null,null);
        usuario.setCliente(c);
        const arreglo = [];
        arreglo.push(usuario);
        localStorage.setItem('clientes',JSON.stringify(arreglo));
        const formulario = (document.getElementById('formulario'));
        const div1 = document.createElement('div');
        div1.innerHTML = `<div class="alert alert-success mt-3" role="alert">
            Cliente agregado
            </div>`
        formulario.appendChild(div1);
        setTimeout(() => {
            div1.remove();
            window.location.href = 'tecnico.html';
        }, 3000);
       
    }else{
        const cantidad_clientes = clientes.length;
        const usuario = new Usuario(null,null,null);
        const c = new Cliente (cantidad_clientes+1,nombre,apellido,dni);
        c.setFiltro(true);
        usuario.setCliente(c);
        clientes.push(usuario);
        localStorage.setItem('clientes',JSON.stringify(clientes));
        const formulario = (document.getElementById('formulario'));
        const div1 = document.createElement('div');
        div1.innerHTML = `<div class="alert alert-success mt-3" role="alert">
            Cliente agregado
            </div>`
        formulario.appendChild(div1);
        setTimeout(() => {
            div1.remove();
            window.location.href = 'tecnico.html';
        }, 3000);
        
    }    
}

function obtenerReporte(){
    let numero = Math.floor(Math.random()*2);
    if(numero == 0){
        const op_reporte = document.getElementById('operacion-reporte');
        const div1 = document.createElement('div');
        div1.innerHTML = `<div class="alert alert-success mt-3" role="alert">
                        El imei no tiene reportes
                        </div>`
        op_reporte.appendChild(div1);
        setTimeout(() => {
            div1.remove();
            const div2 = document.createElement('div');
            div2.id = 'formulario';
            div2.innerHTML =    `<div class="mb-3" id='filtro-exitoso'>
                            <label for="formGroupExampleInput" class="form-label">Dni</label>
                            <input type="text" class="form-control" id="dni" placeholder="Ingresar Dni">
                            <button type="button" class="btn btn-success  mt-3" id="buscar-cliente">Buscar cliente</button>
                            </div>
                            <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Ingresar Nombre">
                            </div>
                            <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Apellido</label>
                            <input type="text" class="form-control" id="apellido" placeholder="Ingresar Apellido">
                            </div>
                            <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Dni</label>
                            <input type="text" class="form-control" id="dni2" placeholder="Ingresar Apellido">
                            </div>
                            <button type="button" class="btn btn-success mb-3" id="ingresar">Ingresar Cliente</button>`;
            op_reporte.appendChild(div2);
            const filtrar= document.getElementById('buscar-cliente');
            const ingresar_cliente= document.getElementById('ingresar');
            ingresar_cliente.addEventListener('click',ingresarCliente); 
            filtrar.addEventListener('click',filtrarCliente); 
        }, 3000);
                              
    }
}



class Cliente {
    constructor(id,nombre,apellido,dni){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.filtro = false;
    }
    getidCliente(){
        return this.id;
    }
    setFiltro(valor){
        this.filtro = valor;
    }
}

class Usuario {
    constructor(id,email,password){
        this.id = id;
        this.email = email;
        this.password = password;
        this.cliente = null;
    }
    setCliente(cliente){
        this.cliente=cliente;
    }
}

class Telefono {
    constructor(id,marca,n_serie,imei,so){
        this.id = id;
        this.marca = marca;
        this.n_serie = n_serie;
        this.imei = imei;
        this.so = so;
        this.cliente = null;
        this.autorizacion = 'Sin autorizacion';
        this.estado = 'En revision'
        this.revision = 0;
        this.diagnostico = 'Sin diagnostico';
        this.tecnico = 'Sin asignar';
    }
    setCliente(cliente){
        this.cliente = cliente;
    }
    getCliente(){
        return this.cliente;
    }
}

class Pago {
    constructor(id,n_serie,diagnostico,costo){
        this.id = id;
        this.n_serie = n_serie;
        this.diagnostico = diagnostico;
        this.costo = costo;
        this.cancelado = 0;
        this.cliente = null;
    }
    setCliente(cliente){
        this.cliente = cliente;
    }
}