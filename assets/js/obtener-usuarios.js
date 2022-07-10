import { accionesUsuarios } from "./servicios-usuarios.js";

const usuariosContainer = document.querySelector('[data-container-usuarios]');

accionesUsuarios.getUsuarios().then((usuarios) => usuarios.forEach(({id, nombre}) => {
    const divNombre = document.createElement('div');
    const btnUpdate = document.createElement('button');
    const btnDelete = document.createElement('button');

    btnUpdate.textContent = 'Editar';
    btnDelete.textContent = 'Borrar';

    btnUpdate.classList.add('btn__editar');
    btnDelete.classList.add('btn__eliminar');
    
    divNombre.setAttribute('id', `${id}`)
    divNombre.textContent = nombre;
    divNombre.appendChild(btnUpdate);
    divNombre.appendChild(btnDelete);

    btnUpdate.addEventListener('click', () => {
        const campoId = document.querySelector('[data-actualizar-id]')
        const campoNombre = document.querySelector('[data-actualizar-nombre]');

        campoId.value = id;
        campoNombre.value = nombre;

    })

    btnDelete.addEventListener('click', () => {
        const id = btnDelete.parentElement.id;

        accionesUsuarios.deleteUsuario(id);
    })

    usuariosContainer.appendChild(divNombre);

}));