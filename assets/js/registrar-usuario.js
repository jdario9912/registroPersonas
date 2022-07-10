import { accionesUsuarios } from "./servicios-usuarios.js";

const btnGuardar = document.querySelector('[data-btn-guardar]');

btnGuardar.addEventListener('click', (e) => {
    e.preventDefault();

    const inputNombre = document.querySelector('[data-nombre]');
    const inputPass = document.querySelector('[data-pass]');

    const nombre = inputNombre.value;
    const pass = inputPass.value;

    if (accionesUsuarios.validaCampos(nombre, pass))
        accionesUsuarios.loadUsuario(nombre, pass);
    else
        alert('Los campos deben contener datos');
   
    inputNombre.value = '';
    inputPass.value = '';
});