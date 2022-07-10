import { accionesUsuarios } from "./servicios-usuarios.js";

const btnBuscar = document.querySelector('[data-btn-buscar]');

btnBuscar.addEventListener('click', (e) => {
    e.preventDefault();
    const campoBuscar = document.querySelector('[data-campo-buscar]');
    const divResultadoBusqueda = document.querySelector('[data-resultado-busqueda]');

    const nombreBuscado = campoBuscar.value;

    accionesUsuarios.getUsuarios().then((registros) => {
        
            registros.find(({nombre, id}) => {
                if(nombreBuscado == nombre){
                    accionesUsuarios.generaLineaResultado(divResultadoBusqueda,nombre,id);
                }
            })
    });

    campoBuscar.value = '';
})