const getUsuarios = () => fetch(`http://localhost:3000/usuarios`).then((resp) => resp.json());

const loadUsuario = (nombre, pass) => {
    const url = 'http://localhost:3000/usuarios';
    const data = {
        id : uuid.v4(),
        nombre,
        pass
    }

    const otrosParametros = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data),
    }
    return fetch(url, otrosParametros).then(respuesta => respuesta.json()).catch(e => console.log(e));
}

const deleteUsuario = (id) => {
    const url = `http://localhost:3000/usuarios/${id}`;
    const otrosParametros = {
        method : "DELETE"
    }

    return fetch(url, otrosParametros).then(respuesta => respuesta.json()).catch(e => console.log(e));
}

const updateUsuario = (id, nombre, pass) => {
    const url = `http://localhost:3000/usuarios/${id}`;
    
    const data = {
        nombre,
        pass
    }
    
    const otrosParametros = {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data),
    }

    return fetch(url, otrosParametros).then(respuesta => respuesta.json()).catch(e => console.log(e));
}

const validaCampos = (id, nombre) => {
    if(id != "" || nombre != "")
        return true;
    else
        return false;
}

const generaLineaResultado = (divResultadoBusqueda, nombre, id) => {
    const campoNombre = document.createElement('span');
    const campoId = document.createElement('div');

    campoNombre.textContent = nombre;
    campoId.textContent = id;

    divResultadoBusqueda.appendChild(campoNombre);
    divResultadoBusqueda.appendChild(campoId);
}

export const accionesUsuarios = {
    getUsuarios,
    loadUsuario,
    deleteUsuario,
    updateUsuario,
    validaCampos,
    generaLineaResultado
}