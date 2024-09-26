class Database {
    imeisBloqueados = [];
    reparaciones = [];
    pagos = [];
    tecnicos = [];
    constructor () {
        this.cargarImeiBloqueados();
        this.cargarReparaciones();
        this.cargarTecnicos();
    }
    cargarImeiBloqueados(){
        const arregloDatos = localStorage.getItem("imeis-bloqueados");
        if (arregloDatos) {
            const parseDatos = JSON.parse(arregloDatos);
            this.imeisBloqueados = parseDatos;
        }
    }
    cargarReparaciones(){
        const arrReparaciones = localStorage.getItem("reparaciones");
        if (arrReparaciones) {
            const parseServicios = JSON.parse(arrReparaciones)
            this.reparaciones = parseServicios;
        }
    }
    cargarTecnicos(){
        const arrTecnicos = localStorage.getItem("tecnicos");
        if (arrTecnicos) {
            const parseTecnicos = JSON.parse(arrTecnicos)
            this.tecnicos = parseTecnicos;
        }
    }
    agregarImeiBloqueado(imei,operador,motivo){
        const busqueda = this.buscarByImei(imei)
        if (busqueda == false) {
            this.imeisBloqueados.push({
                operador : operador,
                imei : imei,
                motivo : motivo
            })
            const nueva_data = JSON.stringify(this.imeisBloqueados); 
            localStorage.setItem("imeis-bloqueados",nueva_data);
            return {
                state:200,
                message:"IMEI agregado correctamente"
            };
        }
        return {
            state : 200,
            message : "IMEI existente",
            content : busqueda
        };
    }
    agregarTecnico(nombres,apellidos,dni,skills){
        const busqueda = this.buscarTecnicoByDni(dni)
        if (busqueda == false) {
            this.tecnicos.push({
                nombre : nombres,
                apellido : apellidos,
                dni : dni,
                skills : skills
            })
            const nueva_data = JSON.stringify(this.tecnicos); 
            localStorage.setItem("tecnicos",nueva_data);
            return {
                state:200,
                message:"Tecnico agregado correctamente"
            };
        }
        return {
            state : 200,
            message : "Técnico existente",
            content : busqueda
        };
    }
    agregarReparacion(imei,operador,monto,fecpag,nro_ope,tecnico,diagnostico){
        const nuevo_tramite = this.nuevoTramite();
        const fecha = new Date();
        const ymd = fecha.getFullYear()+"-"+(fecha.getMonth()+1)+"-"+fecha.getDate();
        this.reparaciones.push(
            {
                estado : "Reparacion del Primer Diagnostico",
                tramite : nuevo_tramite,
                imei : imei,
                operador : operador,
                dni_tecnico : tecnico,
                fecha_rep : ymd,
                diagnosticos : [
                    {
                        comentario : diagnostico,
                        fecha_registro : ymd,
                        detalle_pago : [
                            {
                                concepto : "Primer Diagnostico",
                                cantidad : 1,
                                monto_a_pagar : monto,
                            }
                        ],
                        pago_final : [
                            {
                                monto : monto,
                                fecha_pago : fecpag,
                                cod_operacion : nro_ope
                            }
                        ],
                    }
                ]
            }
        );
        // this.reparaciones.push(dataInsert);
        const nueva_data = JSON.stringify(this.reparaciones); 
        localStorage.setItem("reparaciones",nueva_data);
        return {
            state : 200,
            message: "Reparación registrada correctamente"
        };
    }
    nuevoTramite(){
        const fecha = new Date();
        const milisegundos = fecha.getMilliseconds();
        const segundos = fecha.getSeconds();
        const minutos = fecha.getMinutes();
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1; 
        const anio = fecha.getFullYear();

        return `rep`+milisegundos+`0`+anio+segundos+dia+mes+minutos
    }
    actualizarReparacion(){

    }
    get_celulares_bloqueados(){
        return this.imeisBloqueados;
    }
    get_reparaciones(){
        return this.reparaciones;
    }
    get_tecnicos(){
        return this.tecnicos;
    }
    buscarByImei(codigo){
        if ( this.imeisBloqueados !== null) {
            const dataSearch = this.imeisBloqueados.filter((item) => item.imei == codigo)
            if (dataSearch) {
                return dataSearch;
            }
        }
        return false;
    }
    buscarTecnicoByDni(dni){
        if ( this.tecnicos !== null) {
            const dataSearch = this.tecnicos.filter((item) => item.dni == dni)
            if (dataSearch) {
                return dataSearch;
            }
        }
        return false;
    }
    buscarTecnicoBySkill(skillSend){
        if (this.tecnicos !== null) {
            const dataSearch = this.tecnicos.filter ( (item) => item.skills.some(skill => skill === skillSend));
            if (dataSearch) {
                return dataSearch;
            }
        }
        return false;
    }
    buscarImei(codigo){
        if (this.imeisBloqueados.length > 0) {
            const dataSearch = this.imeisBloqueados.filter((item) => item.imei.includes(codigo))
            if (dataSearch) {
                return dataSearch;
            }
        }
        return false;
    }
    buscarReparacionByTramite(tramite){
        this.cargarReparaciones()
        if ( this.reparaciones !== null) {
            const dataSearch = this.reparaciones.filter((item) => item.tramite == tramite)
            if (dataSearch) {
                return dataSearch;
            }
        }
        return false;
    }
}