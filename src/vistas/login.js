import { funLoginUsuario } from '../lib/controladorFirebase.js';

export const ingresarUsuario = () => {
  const loginEmprendedora = ` 
  <div class="container">
      <section id="start">
      <img src="img/WomenBanner.png" class="imgLogo">  
      </section>
      <section class="index-padre">
      <div class="index-img-message">
      <img src="./img/mujeresdos.jpg" alt="social network" class="index-img">
      <!--cambiar por <p>-->
      <p class="index-message">En WomanToday aca va nuestro slogan
      Además podrás comunicarte y compartir.
      ¿Qué esperas? ¡No te pierdas las novedades!</p>
      </div>
    <div class="login">
      <h2>Iniciar Sesión</h2>
      <form>
        <input type="text" id="correoLogin" placeholder="Correo electrónico" class="correo">
        <input type="password" id="contrasenaLogin" placeholder="Ingrese su contraseña" class="correo">
        <button type ="button" id="login" class="submit" >Iniciar sesión</button>
        <button id="loginFace" class="fb"><i class="fab fa-facebook-f"></i> Acceder con Facebook</button>
        <button id="loginGoogle" class="goo"><i class="fab fa-google"></i> Acceder con Google</button>
        <a href='#/olvidocontrasena'>¿Olvidaste tu contraseña?</a> <br>
        <a>¿No tienes cuenta? </a><a href='#/registro'>Regístrate</a>
      </form>
      <h1 id='mensajeLogin'></h1>
   </div>
   </section>
   <footer>       
      <div class="container-footer-all">
        <div class="container-body">
          <div class="colum1">
            <h1>Woman Today</h1>
            <p>Esta parte del parrafo la usaremos para describir mas 
            nuestra red social , este 
            texto es solo para llenara informacion en el cuadro de informacion 
            de la compañia.</p>
          </div>
          <div class="colum2">
            <h1>Redes Sociales</h1>
            <div class="row">
              <img src="icon/facebook.png">
              <label>Siguenos en Facebook</label>
            </div>
            <div class="row">
              <img src="icon/tumblr.png">
              <label>Siguenos en Twitter</label>
            </div>
            <div class="row">
              <img src="icon/instagram.png">
              <label>Siguenos en Instagram</label>
            </div>
          </div>
          <div class="colum3">
            <h1>Informacion Contactos</h1>
            <div class="row2">
              <img src="icon/house.png">
              <label>Santiago, 
              Chile</label>
            </div>
            <div class="row2">
              <img src="icon/smartphone.png">
              <label>+56-395-206446</label>
            </div>
            <div class="row2">
              <img src="icon/contact.png">
              <label>womenToday@gmail.com</label>
            </div>
            </div>
          </div> 
          </div>    
          <div class="container-footer">
           <div class="footer">
              <div class="copyright">
                © 2020 Todos los Derechos Reservados | <a href="">Marcela, Paula, Yosliana</a>
              </div>
        </div>
      </div>    
    </footer>
  </div>
  `;
  const divElemen = document.createElement('div');
  divElemen.innerHTML = loginEmprendedora;
  const botonLogin = divElemen.querySelector('#login');
  botonLogin.addEventListener('click', () => {
    const correoLogin = document.getElementById('correoLogin').value;
    const contrasenaLogin = document.getElementById('contrasenaLogin').value;
    funLoginUsuario(correoLogin, contrasenaLogin);
  });
  return divElemen;
};
