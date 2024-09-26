class Database {
    imeisBloqueados = [];
  
    constructor() {
      this.cargarImeiBloqueados();
    }
    cargarImeiBloqueados() {
      const arregloDatos = localStorage.getItem("imeis-bloqueados");
      console.log(arregloDatos);
      if (arregloDatos) {
        const parseDatos = JSON.parse(arregloDatos);
  
        this.imeisBloqueados = parseDatos;
  
        const table = document
          .getElementById("imei-bloqueados-table")
          .getElementsByTagName("tbody")[0];
  
        this.imeisBloqueados.forEach((dato) => {
          const fila = table.insertRow();
          const celdaOperador = fila.insertCell(0);
          const celdaImei = fila.insertCell(1);
          const celdaMotivo = fila.insertCell(2);
  
          celdaOperador.textContent = dato.operador;
          celdaImei.textContent = dato.imei;
          celdaMotivo.textContent = dato.motivo;
        });
      }
    }
  
    agregarImeiBloqueado(operador, imei, motivo) {
      this.imeisBloqueados.push({
        operador,
        imei,
        motivo,
      });
  
      const datosJSON = JSON.stringify(this.imeisBloqueados, null, 2);
      localStorage.setItem("imeis-bloqueados", datosJSON);
      console.log("datos nuevo guardado correctamente");
  
      const table = document
        .getElementById("imei-bloqueados-table")
        .getElementsByTagName("tbody")[0];
      const fila = table.insertRow();
      const celdaOperador = fila.insertCell(0);
      const celdaImei = fila.insertCell(1);
      const celdaMotivo = fila.insertCell(2);
      celdaOperador.textContent = operador;
      celdaImei.textContent = imei;
      celdaMotivo.textContent = motivo;
    }
  
    obtenerImeisBloqueados() {
      return this.imeisBloqueados;
    }
  
    buscarPorImei(imei) {
      const dataSearch = this.imeisBloqueados.find((e) => e.imei == imei);
      return dataSearch;
    }
    filtrarPorImei(imei) {
      const dataFilter = this.imeisBloqueados.filter((e) => e.imei != imei);
      return dataFilter;
    }
    buscarConcidencias(imei) {
      const dataFilter = this.imeisBloqueados.filter((e) =>
        e.imei.includes(imei)
      );
      return dataFilter;
    }
  }
  //