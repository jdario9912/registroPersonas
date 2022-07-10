import { accionesUsuarios } from "./servicios-usuarios.js";

const btnActualizar = document.querySelector('[data-btn-actualizar]');

btnActualizar.addEventListener('click', (e) => {
    e.preventDefault();

    const campoId = document.querySelector('[data-actualizar-id]');
    const campoNombre = document.querySelector('[data-actualizar-nombre]');
    const campoPass = document.querySelector('[data-actualizar-pass]');

    const id = campoId.value;
    const nombre = campoNombre.value;
    const pass = campoPass.value;

    if (accionesUsuarios.validaCampos(id, nombre)) {
        accionesUsuarios.updateUsuario(id, nombre, pass);
    }

    campoId.value = '';
    campoNombre.value = '';
    campoPass.value = '';
});