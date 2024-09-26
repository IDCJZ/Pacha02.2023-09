
function consultar() {
    var query = document.getElementById("query");
    let respuesta = document.getElementById("respuesta")
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    console.log(query.value)
    fetch(`http://localhost:8000/api/clima?ciudad=${query.value}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            let objResult = JSON.parse(result);
            const img = document.createElement("img");
            img.setAttribute("src",objResult.jsonResponse.current.condition.icon)
            respuesta.appendChild(img)
        })
        .catch(error => console.log('error', error));
}

// Function to add event listener to t
function load() {
    var el = document.getElementById("consultar");
    el.addEventListener("click", consultar, false);
  }

  document.addEventListener("DOMContentLoaded", load, false);