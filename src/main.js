import { configuracionFirebase } from './lib/controladorFirebase.js';
import { cambioRuta } from './controladorVistas.js';

const init = () => {
  configuracionFirebase(); // se llama para que se ejecute esta funcion al iniciar la aplicacion
  cambioRuta(window.location.hash);
  window.addEventListener('hashchange', () => {
    cambioRuta(window.location.hash);
  });
};
window.addEventListener('load', init);
