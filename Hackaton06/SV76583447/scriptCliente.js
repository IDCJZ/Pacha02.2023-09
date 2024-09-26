import { mostrarCliente } from "./funcionesGenerales.js";

document.addEventListener('DOMContentLoaded',leerUsuario);

function leerUsuario(){
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    const h1 = document.getElementById('titulo');
    h1.textContent = `Bienvenido ${usuario.nombre}`;
    mostrarCliente(usuario.dni);
}

