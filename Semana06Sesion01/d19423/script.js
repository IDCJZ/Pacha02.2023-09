const DOM = function () {
    let Nombre;
    let Curso;
    function configurar() {
        console.log(Nombre);
        console.log(Curso);
        let titulo = document.getElementById("titulo");
        console.log(titulo);
        titulo.innerText = Nombre;
        let resultado = document.getElementById("resultado")
        resultado.innerHTML = `<button>${Curso}</button>`;
        let arrCarros = ["Volvo", "BMW", "Mercedes", "Jaguar"]
        let str = `<select name="cars" id="cars">`;

        arrCarros.forEach(element => {
            console.log(element)
            str += `<option value="${element}">${element.toUpperCase()}</option>`
        });
        str += `</select>`

        resultado = document.getElementById("resultado")
        resultado.innerHTML = str;

        let listaP = document.getElementsByTagName("p")
        console.log(listaP)
        for (let index = 0; index < listaP.length; index++) {
            const element = listaP[index];
            console.log(element.innerText)
            element.innerText = `Este es mi nuevo p ${index}`;
        }

        let resultadoClass = document.querySelector(".resultado2")
        console.log(resultadoClass)
        resultadoClass.style.color="cyan";
        let lstresultadoClass = document.querySelectorAll(".resultado2")
        console.log(lstresultadoClass)
        text = document.getElementById("text")
        text.textContent = "Este es mi contenido en texto <br>";
        atributo = document.getElementById("atributo")
        atributo.setAttribute("class","tipoletra");
        atributo.removeAttribute("class")

        console.log(atributo.clientWidth)
        console.log(atributo.clientHeight)
    }


    function eventos() {
        window.addEventListener('load', load_pagina);
        let txt_nombre = document.getElementById("txt_nombre")
        txt_nombre.addEventListener("change", (event) => {
            console.log(`You like ${event.target.value}`);
        });
        let select_aviones = document.getElementById("cars")
        select_aviones.addEventListener("change", (event) => {
            console.log(event.target.selectedOptions[0].text)
        });
        var boton = document.getElementById("grid-card-0")
        boton.addEventListener("click", button_clic)
        boton.addEventListener("mouseover", button_mouse)
        var boton = document.getElementById("grid-card-1")
        boton.addEventListener("click", button_clic)
        boton.addEventListener("mouseover", button_mouse)
        var boton = document.getElementById("grid-card-2")
        boton.addEventListener("click", button_clic)
        boton.addEventListener("mouseover", button_mouse)
        var boton = document.getElementById("grid-card-3")
        boton.addEventListener("click", button_clic)
        boton.addEventListener("mouseover", button_mouse)
        var boton = document.getElementById("grid-card-4")
        boton.addEventListener("click", button_clic)
        boton.addEventListener("mouseover", button_mouse)
        var boton = document.getElementById("grid-card-5")
        boton.addEventListener("click", button_clic)
        boton.addEventListener("mouseover", button_mouse)
        var boton = document.getElementById("grid-card-6")
        boton.addEventListener("click", button_clic)
        boton.addEventListener("mouseover", button_mouse)
        var boton = document.getElementById("grid-card-7")
        boton.addEventListener("click", button_clic)
        boton.addEventListener("mouseover", button_mouse)
        var boton = document.getElementById("grid-card-8")
        boton.addEventListener("click", button_clic)
        boton.addEventListener("mouseover", button_mouse)
    }
    function load_pagina() {

        console.log('La página ha terminado de cargarse!!');

    }
    function button_mouse(){
        console.log("se paso el mouse por el boton")
    }
    function button_clic() {
        console.log("se hizo click")
    }
    function childfunction(){
        const node = document.getElementById("myList2").lastChild;
        const clone = node.cloneNode(true);
        document.getElementById("myList1").appendChild(clone);
    }
    return {
        init: function (parametros) {
            Nombre = parametros.Nombre;
            Curso = parametros.Curso;
            configurar();
            eventos()
        },
    };
}();
function childfunction(){
let node = document.getElementById("myList2").childNodes;
  console.log(node)
 let ultimo = document.getElementById("myList2").lastChild
 console.log(ultimo)
 let primero = document.getElementById("myList2").firstChild
 console.log(primero)
}
/*a*/
