import { ingresarUsuario } from './vistas/login.js';
import { registroUsuario } from './vistas/registro.js';
import { publicacionUsuario } from './vistas/publicaciones.js';
import { olvidoContrasenaUsuario } from './vistas/olvidocontrasena.js';

const cambioVista = (hash) => {
  const container = document.getElementById('root');
  container.innerHTML = '';
  switch (hash) {
    case '':
      container.appendChild(ingresarUsuario());
      break;
    case '#/login':
      container.appendChild(ingresarUsuario());
      break;
    case '#/registro':
      container.appendChild(registroUsuario());
      break;
    case '#/publicaciones':
      container.appendChild(publicacionUsuario());
      break;
    case '#/olvidocontrasena':
      container.appendChild(olvidoContrasenaUsuario());
      break;
    default:
      container.innerHTML = '<h2>error404</h2>';
  }
};
export const cambioRuta = ((hash) => {
  if (hash === '#/login') {
    return cambioVista(hash);
  }
  if (hash === '#/registro') {
    return cambioVista(hash);
  }
  if (hash === '#/olvidocontrasena') {
    return cambioVista(hash);
  }
  if (hash === '#/publicaciones') {
    return cambioVista(hash);
  }
  return cambioVista(hash);
});
