import { ingresarUsuario } from './vistas/login.js'
import { registroUsuario } from './vistas/registro.js'
import { olvidoContraseñaUsuario } from './vistas/olvidocontraseña.js'
import { publicacionUsuario } from './vistas/publicaciones.js'


const cambioVista = (hash) => {
    const container = document.getElementById('root');
    container.innerHTML = "";
    switch (hash) {
        case '':
            container.appendChild(ingresarUsuario())
            break;
        case '#/':
            container.appendChild(ingresarUsuario())
            break;
        case '#/registro':
            container.appendChild(registroUsuario())
            break;
        case '#/publicaciones':
            container.appendChild(olvidoContraseñaUsuario());
            break;
        case '#/publicaciones':
            container.appendChild(publicacionUsuario());
            break;
        default:
            container.innerHTML = `<img class='error' src="../img women today/error404.jpg" />`
            
    }
};
export const cambioRuta = ((hash) => {
    if (hash === '#/') {
        return cambioVista(hash);
    }
    if (hash === '#/registro') {
        return cambioVista(hash);
    }
    return cambioVista(hash);
});
