import {
  cerrarSesion,
  getUser,
  cargarComentarios,
  subirImagen,
  guardarComentario,
} from '../lib/controladorFirebase.js';

export const publicacionUsuario = () => {
  const user = getUser();
  const muroEmprendedora = `
  <div class="container">
    <section id="start">
      <img src="img/newLogo.png" class="imgLogo">  
    </section>
    <div class="sidebar">
      <input type="checkbox" id="check">
      <label for="check">
        <span>&#9776</span>  
      </label>
      <nav class="sidebarNav">
      <ul>
      <li><a href='#/perfildeusuario'>Perfil Usuario</a></li>
      <li><a href="#/eventos">Eventos</a></li>
      <li><a id="cerrar" href="#/">Cerrar Sesión</a></li>
    </ul>
      </nav>
    </div>
    <section class="container-columns"> <br> 
      <div class="title-new-post">
        <img class="user-foto" src="${user.photoURL || './img/profile-ico.png'}" alt="">
        <div class="profile-section">  
          <p> ${user.email}</p>    
        </div>
      </div>
      <div class="container-post">
        <div class="new-post">
          <textarea placeholder="Comparte tus ideas" id="comentario" rows="4" cols="50"></textarea>
          <div class="container-button">
           <form action="" id="upload">
             <input type="file" id="uploarder" accept="image/jpeg, image/png, image/gif">
           </form>
           <div id="output" class="row"></div>
          </div>
          <img id="foto"/>
        </div>
        <button id="btnGuardarComentario" class="btn-post">Publicar</button>
        <button id="btnEditarComentario" class="btn-post">Guardar</button>
        <h1 id='mensajeLogin'></h1>
        <div id="publicarC"> </div>
      </div>

      <div class="column3">
        <h3>Eventos</h3>
        <a href=https://mujeresemprendedoras.cl/web><img src="img/evento.jpg" alt=""></a>
        <a href=https://avonni.cl><img src="img/evento2.jpg" alt=""></a>
        <a href=https://laquintaemprende.cl/eventos/seminario-online-mujeres-emprendedoras><img src="img/evento3.jpg" alt=""></a>
        <a href=https://laquintaemprende.cl/2020/04/01/comienza-de-forma-gratuita-y-online-el-viaje-de-la-emprendedora><img src="img/evento1.png" alt=""></a>
      </div>
      <button id="atras" class="large material-icons"></button>
      <button id="adelante" class="large material-icons"></button>
      <button id="recargar" class="large material-icons"></button> 
    </section>
    <div class="container-footer">
      <div class="footer">
       <div class="copyright">
         © 2020 Todos los Derechos Reservados | <a href="">Marcela, Paula, Yosliana</a>
       </div>
     </div>
   </div>
  </div>    
  `;


  const divElemen = document.createElement('div');
  divElemen.innerHTML = muroEmprendedora;
  const btnGuardarPost = divElemen.querySelector('#btnGuardarComentario');
  btnGuardarPost.addEventListener('click', () => {
    cargarComentarios();
    guardarComentario();
  });
  const uploarder = divElemen.querySelector('#uploarder');
  uploarder.addEventListener('change', () => {
    subirImagen();
  });

  const btnCerrarSesion = divElemen.querySelector('#cerrar');
  btnCerrarSesion.addEventListener('click', () => {
    cerrarSesion();
  });
  const atras = divElemen.querySelector('#atras');
  atras.addEventListener('click', () => {
    window.history.go(-1);
  });
  const recargar = divElemen.querySelector('#recargar');
  recargar.addEventListener('click', () => {
    window.history.go(0);
  });
  const adelante = divElemen.querySelector('#adelante');
  adelante.addEventListener('click', () => {
    window.history.go(1);
  });
  // const publicarC = document.querySelector('#publicarC');
  // publicarC.addEventListener('load', () => cargarComentarios());
  // cargarComentarios();

  return divElemen;
};
