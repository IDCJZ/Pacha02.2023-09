let productos = [];
const DOM = function () {
    let Local;
    
    function configurar() {
        if (typeof(Storage) !== "undefined") {
            carrito = JSON.parse(localStorage.getItem("carrito"));
            let numArticulos = document.getElementById("numArticulos");
            numArticulos.innerText = carrito.length;
            numArticulos.style.color = "black"
          } else {
            alert("No puedo guardar tus articulos!!!")
          }
        cargarProductos();
        cargarDatos();
    }
    function eventos() {
        //delCarrito
        let boton = document.getElementById("delCarrito")
        boton.addEventListener("click", borrarCarrito)
        let form = document.getElementById("frmLogin")
        form.addEventListener("submit", frmLogin)

    }

    function cargarProductos(){
        let strProductos = `
        [
            {
                "id": 1,
                "nombre": "RX-78-2",
                "descuento": 15,
                "precio": 140.99,
                "img": "img/1.jpg"
            },{
                "id": 2,
                "nombre": "ZEONG",
                "descuento": 15,
                "precio": 140.99,
                "img": "img/2.jpg"
            },{
                "id": 3,
                "nombre": "AERIAL",
                "descuento": 15,
                "precio": 140.99,
                "img": "img/3.jpg"
            },{
                "id": 4,
                "nombre": "Z-GOK",
                "descuento": 15,
                "precio": 140.99,
                "img": "img/4.jpg"
            },{
                "id": 5,
                "nombre": "ZAKU II",
                "descuento": 15,
                "precio": 140.99,
                "img": "img/5.jpg"
            },{
                "id": 6,
                "nombre": "GOUF",
                "descuento": 15,
                "precio": 140.99,
                "img": "img/6.jpg"
            }
        ]`;
        productos = JSON.parse(strProductos);
        console.log(productos);
        let strHtml  ="";
        productos.forEach(element => {
           strHtml +=  `<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-4">
            <div class="card shadow">
                <div class="card-body text-center">
                    <h3 class="text-warning">Descuentos del ${element.descuento}% OFF</h3>
                    <a href="#">
                        <img class="card-img-top embed-responsive embed-responsive-16by9" src="${element.img}" alt="">
                    </a>
                    <div class="text-warning">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <a class="text-reset" href="#"><h3 class="card-title display-4">${element.nombre}</h3></a>
                    <h6>$199.99 <del class="text-muted ml-2">$${element.precio}</del></h6>
                    <a class="btn btn-dark my-2" href="#" onclick="agregarCarrito(${element.id})" role="button">Add to Cart</a>
                </div>
            </div>
        </div>`;

        });

        let divProductos = document.getElementById("productos");
        divProductos.innerHTML = strHtml;
    }
    let sesion;

    
    function cargarDatos(){
        console.log(sessionStorage.getItem("login"))
        if(sessionStorage.getItem("login")!=null)
        {
            sesion = JSON.parse(sessionStorage.getItem("login"));
            let usuario = document.getElementById("usuario");
            usuario.style.display = "block"
            usuario.innerText = `Hola ${sesion.username}`;
            let modal = document.getElementById("modal-486056");
            modal.style.display = "none";
        }
        else{
            let usuario = document.getElementById("usuario");
            usuario.style.display = "none"
            let modal = document.getElementById("modal-486056");
            modal.style.display = "block";
        }
    }
    return {
        init: function (parametros) {
            Local = parametros.Local;
            configurar();
            eventos()
        },
    };
}();
let carrito = [];
function agregarCarrito(id){

    console.log(id);
    let objProducto = productos.filter(x => x.id == id);
    carrito.push( objProducto[0]);
    console.log(carrito)
    localStorage.setItem("carrito", JSON.stringify(carrito));
    let numArticulos = document.getElementById("numArticulos");
    numArticulos.innerText = carrito.length;
    numArticulos.style.color = "black"
}
function borrarCarrito(){
    localStorage.setItem("carrito", "");
    carrito = [];
    let numArticulos = document.getElementById("numArticulos");
    numArticulos.innerText = carrito.length;
    numArticulos.style.color = "black"
}
function frmLogin(evt){
    console.log(evt);
    evt.preventDefault();
    let objUser ={
        username: evt.currentTarget[0].value,
        password: evt.currentTarget[1].value
    }
    if(objUser.password == "qwerty"){
        sessionStorage.setItem("login", JSON.stringify(objUser))
        sesion = JSON.parse(sessionStorage.getItem("login"));
            let usuario = document.getElementById("usuario");
            usuario.style.display = "block"
            usuario.innerText = `Hola ${sesion.username}`;
            let modal = document.getElementById("modal-486056");
            modal.style.display = "none";
    }
}