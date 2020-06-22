import {
  getUser,
  datosPerfil,
} from '../lib/controladorFirebase.js';

export const perfilUsuario = () => {
  const user = getUser();
  const perfilEmprendedora = `
  <section id="start">
  <img src="img/newLogo.png" class="imgLogo">  
</section>

<div class= register>
<h4>Perfil de Usuario</h4>
<p> Bienvenida ${user.displayName}</p>
<img class="fotoperfil" src="${user.photoURL}">
<input class="correo" type="text" id="nombre" placeholder="Ingrese nombre" >
<input class="correo" type="text" id="apellido" placeholder="Ingrese apellido">
<input class="correo" type="text" id="oficio" placeholder="Ingrese oficio">
<input class="correo" type="text" id="ciudad" placeholder="Ingrese Ciudad">
<input class="correo" type="text" id="fecha" placeholder="Ingrese fecha">
<button class="submit" id="btnGuardarPerfil">Guardar</button>
</div>

<button id="atras" class="large material-icons">navigate_before</button>
<button id="adelante" class="large material-icons">autorenew</button>
<button id="recargar" class="large material-icons">navigate_next</button>

<div class="container-footer"> <div class="footer"> 
<div class="copyright"> © 2020 Todos los Derechos Reservados |
 <a href="">Marcela, Paula, Yosliana</a> </div> </div>  `;
  const divElemen = document.createElement('div');
  divElemen.innerHTML = perfilEmprendedora;
  const btnGuardarPerfil = divElemen.querySelector('#btnGuardarPerfil');
  const nombre = divElemen.querySelector("#nombre").value;
  const apellido = divElemen.querySelector("#apellido").value;
  const oficio = divElemen.querySelector("#oficio").value;
  const ciudad = divElemen.querySelector("#ciudad").value;
  const fecha = divElemen.querySelector("#fecha").value;
  btnGuardarPerfil.addEventListener('click', () => {
    datosPerfil(nombre, apellido, oficio, ciudad, fecha, );
  });
  const atras = divElemen.querySelector('#atras');
  atras.addEventListener('click', () => {
    window.history.go(-1);
  });
  const adelante = divElemen.querySelector('#adelante');
  adelante.addEventListener('click', () => {
    window.history.go(1);
  });
  const recargar = divElemen.querySelector('#recargar');
  recargar.addEventListener('click', () => {
    window.history.go(0);
  });
  return divElemen;
};
