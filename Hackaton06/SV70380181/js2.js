const newData = new Database();

// const datos = newData.obtenerImeisBloqueados();
// console.log("datos1",datos)

// // newData.agregarImeiBloqueado("entel", "3203029329", "robo");

// const datos2 = newData.obtenerImeisBloqueados();

// console.log("datos2",datos2)

function agregarImei() {
  const operadorInput = document.getElementById("operador");
  const imeiInput = document.getElementById("imei");
  const motivoInput = document.getElementById("motivo");
  const errorMessage = document.querySelector(".mensaje-error");

  //

  if (
    operadorInput.value == "" ||
    imeiInput.value == "" ||
    motivoInput.value == ""
  ) {
    errorMessage.classList.add("isvisible-error-message");

    setTimeout(function () {
      errorMessage.classList.remove("isvisible-error-message");
    }, 2000);
  } else {
    newData.agregarImeiBloqueado(
      operadorInput.value,
      imeiInput.value,
      motivoInput.value
    );

    console.log(newData.obtenerImeisBloqueados());
    operadorInput.value = "";
    imeiInput.value = "";
    motivoInput.value = "";
  }
}