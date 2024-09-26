const DOM = function () {
    let Nombre;
    let Curso;
    let productos = [];
    function configurar(){
        titulo = document.getElementById("titulo");
        titulo.innerText = Nombre;
        titulo.style.color = "blue";
        titulo.style.borderTop = "3px solid blue"
        crearEstructura();
        crearSelector();
    }
        

    //lista
    function crearSelector()
    {
        const sel = document.createElement("select");
        productos.forEach(element =>
          {
            console.log(element.nombre)
            const opt1 = document.createElement("option");
            opt1.value = element.id;
            opt1.text = element.nombre;
            sel.add(opt1);
          });


        // div selector imagen
        let selector = document.getElementById("selector")
        selector.setAttribute("id","sel_productos");
        selector.appendChild(sel);
        selector.addEventListener("change", (event) => {
            console.log(event.target.selectedOptions[0].value);
            cargarImagen(event.target.selectedOptions[0].value);
        });
    }

    function cargarImagen(id)
    {
        let objProducto = productos.filter(x => x.id == id);
        console.log(objProducto[0])
        let strHtml =  `<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-4">
            <div class="card shadow">
                <div class="card-body text-center">
                    <h3 class="text-warning">Descuentos del ${objProducto[0].descuento}% OFF</h3>
                    <a href="#">
                        <img class="card-img-top embed-responsive embed-responsive-16by9" src="${objProducto[0].img}" alt="">
                    </a>
                    <div class="text-warning">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <a class="text-reset" href="#"><h3 class="card-title display-4">${objProducto[0].nombre}</h3></a>
                    <h6>$199.99 <del class="text-muted ml-2">$${objProducto[0].precio}</del></h6>
                    <a class="btn btn-dark my-2" href="#" onclick="agregarCarrito(${objProducto[0].id})" role="button">Add to Cart</a>
                </div>
            </div>
        </div>`;
        let imgdiv = document.getElementById("imagen");
        imgdiv.innerHTML = strHtml;
    }
    function eventos()
    {
    }
    function crearEstructura()
    {
        objProducto=
        {
            id:1,
            nombre:"RX-78-2",
            descuento:20,
            precio: 120.99,
            img:"img/4.jpg"
        }
        productos.push(objProducto);
        objProducto=
        {
            id:2,
            nombre:"AERIAL",
            descuento:15,
            precio: 140.99,
            img:"img/5.jpg"
        }
        productos.push(objProducto);
        objProducto={
            id:3,
            nombre:"Z Gok",
            descuento:40,
            precio: 130.99,
            img:"img/6.jpg"
        }
        productos.push(objProducto);
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