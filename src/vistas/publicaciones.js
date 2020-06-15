export const publicacionUsuario = () => {
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
    </ul>
  </nav>
</div>
</header>
<section class="container-columns">
<br><br><br><br><br><br> 
  <div class="column1">
    <div class="profile-section">
      <img id="profilePhoto" class="profile-picture" src="" alt="">
    </div>
      <h2 class="user-name"></h2>
  </div>
  <div class="column2">
  <textarea placeholder="Comparte tus ideas" id="comentario" cols="30" rows="10"></textarea>
  <div class="container-button">
    <input class='correo' type="file" id="imagen">
    <img id="foto"/>
    <button id="btnNewPost" class="btn-post">Publicar</button>
  </div>
  </div>
  <div class="column3">
    <h3>Eventos</h3>
    <a href=https://mujeresemprendedoras.cl/web><img src="img/evento.jpg" alt=""></a>
    <a href=https://avonni.cl><img src="img/evento2.jpg" alt=""></a>
    <a href=https://laquintaemprende.cl/eventos/seminario-online-mujeres-emprendedoras><img src="img/evento3.jpg" alt=""></a>
    <a href=https://laquintaemprende.cl/2020/04/01/comienza-de-forma-gratuita-y-online-el-viaje-de-la-emprendedora><img src="img/evento1.png" alt=""></a>
  </div>
</section>
<div class="footer">
  <p>Copyright by Marcela / Paula & Yosliana / 2020 / Laboratoria013</p>
</div>
</div>    
`;
  const divElemen = document.createElement('div');
  divElemen.innerHTML = muroEmprendedora;
  return divElemen;
};
