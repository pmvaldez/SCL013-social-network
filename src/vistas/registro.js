import {
  funRegistroUsuario,
  funLoginGoogle,
  funLoginFacebook,
} from '../lib/controladorFirebase.js';

export const registroUsuario = () => {
  const registroEmprendedora = `
  <div class="container">
      <section id="start">
      <img src="img/newLogo.png" class="imgLogo">  
      </section>
      <section class="index-padre">
      <div class="index-img-message">
      <img src="./img/mujeresdos.jpg" alt="social network" class="index-img">
      <!--cambiar por <p>-->
      <p class="index-message">Comunidad virtual abierta ¡Únete a nostras y atrevete a inventar tu propio camino!</p>
      </div>
        <div class="register">
          <h2>Registrate</h2>
          <form>
            <input type="text" id="correoRegistro" placeholder="Correo electrónico" class="correo">
            <input type="password" id="contrasenaRegistro" placeholder="Ingrese su contraseña" class="correo">          
          <button type ="button" id="registro" class="submit" >Regístrarte</button>
          <button type ="button" id="registroFace" class="fb"><i class="fab fa-facebook-f"></i> Acceder con Facebook</button>
          <button type ="button" id="registroGoogle" class="goo"><i class="fab fa-google"></i> Acceder con Google</button>
          <a>¿Tienes una cuenta? </a><a href='#/login'>Inicia sesión</a><br><br>
          </form>
          <h1 id='mensajeRegistro'></h1> 
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
  divElemen.innerHTML = registroEmprendedora;
  const btnGoogle = divElemen.querySelector('#registroGoogle');
  btnGoogle.addEventListener('click', funLoginGoogle);
  const btnFacebook = divElemen.querySelector('#registroFace');
  btnFacebook.addEventListener('click', funLoginFacebook);
  const botonRegistro = divElemen.querySelector('#registro');
  botonRegistro.addEventListener('click', () => {
    const correoRegistro = document.getElementById('correoRegistro').value;
    const contrasenaRegistro = document.getElementById('contrasenaRegistro').value;
    funRegistroUsuario(correoRegistro, contrasenaRegistro);
  });
  return divElemen;
};
