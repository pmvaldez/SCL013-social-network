import { cerrarSesion, getUser, publicarComentario, subirImagen, guardarComentario, } from '../lib/controladorFirebase.js';
export const publicacionUsuario = () => {
  const user = getUser();
  const muroEmprendedora = `
  <div class="father">
  <header class="header">
<div class="banner">
  <img src="./img/WomenBanner.png" alt="logo" class="imgLogo">
</div>
<div class="sidebar">
  <input type="checkbox" id="check">
  <label for="check">
    <span>&#9776</span>  
  </label>
  <nav class="sidebarNav">
    <ul>
      <li <a href="#/publicaciones">Perfil</a></li>
      <li <a href="#/eventos">Eventos</a></li>
      <li <a href="#/">Cerrar Sesión</a></li>
      <button id="cerrar">Cerrar sesión</button>
      <a href='#/perfildeusuario'><button>Perfil Usuario</button></a>
    </ul>
  </nav>
</div>
</header>
<section class="container-columns">
<br><br><br><br><br><br> 
  <div class="column1">
  
 


    <div class="profile-section">
    <img class="fotoperfil" src="${user.photoURL}">
    </div>
    <p> Bienvenida ${user.displayName}</p>
  </div>
  <div class="column2">
  <textarea placeholder="Comparte tus ideas" id="comentario" cols="30" rows="10"></textarea>
  <div class="container-button">
    <input class='correo' type="file" id="imagen">
    <img id="foto"/>
    <button id="btnGuardarComentario" class="btn-post">Publicar</button>
    <button id="btnEditarComentario">Guarda Comentario Editado</button>
    <h1 id='mensajeLogin'></h1>
    <div id="publicarC"> </div>




  </div>
  </div>
  <div class="column3">
    <h3>Eventos</h3>
    <a href=https://mujeresemprendedoras.cl/web><img src="img/evento.jpg" alt=""></a>
    <a href=https://avonni.cl><img src="img/evento2.jpg" alt=""></a>
    <a href=https://laquintaemprende.cl/eventos/seminario-online-mujeres-emprendedoras><img src="img/evento3.jpg" alt=""></a>
    <a href=https://laquintaemprende.cl/2020/04/01/comienza-de-forma-gratuita-y-online-el-viaje-de-la-emprendedora><img src="img/evento1.png" alt=""></a>
  </div>
  <button id="atras" class="large material-icons">navigate_before</button>
  <button id="adelante" class="large material-icons">autorenew</button>
  <button id="recargar" class="large material-icons">navigate_next</button> 
</section>

<div class="footer">
  <p>Copyright by Marcela / Paula & Yosliana / 2020 / Laboratoria013</p>
</div>
</div>    
`;
  const divElemen = document.createElement('div');
  divElemen.innerHTML = muroEmprendedora;
  
  const btnGuardarPost = divElemen.querySelector('#btnGuardarComentario');
 btnGuardarPost.addEventListener('click', () => {
    publicarComentario(); 
    subirImagen (); 
    guardarComentario ();
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


  return divElemen;
};
