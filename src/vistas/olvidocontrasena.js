import { restablecerContrasena } from '../lib/controladorFirebase.js';

export const olvidoContrasenaUsuario = () => {
  const olvidoContrasena = `
  <div class="container">
    <section id="start">
      <img src="img/newLogo.png" class="imgLogo">  
    </section>
    <br><br>
    <h2>¿Tienes problemas para iniciar sesión?</h2><br><br>
    <p>Ingresa tu correo electrónico <br> y te enviaremos un enlace para <br> recuperar el acceso a tu cuenta.</p><br><br>
      <input type='text' id='correoOlvidoContrasena' placeholder='Correo electrónico' class='correo'><br>
    <button id='btnOlvidoContrasena' class='submit' >Enviar enlace de inicio de sesión</button> <br>
    <a>¿Tienes una cuenta? </a><a href='#/login'>Inicia sesión</a><br><br>
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
  </div>`;

  const divElemen = document.createElement('div');
  divElemen.innerHTML = olvidoContrasena;
  const btnOlvidoContrasena = divElemen.querySelector('#btnOlvidoContrasena');
  btnOlvidoContrasena.addEventListener('click', () => {
    const correoOlvidoContrasena = document.getElementById('correoOlvidoContrasena').value;
    restablecerContrasena(correoOlvidoContrasena);
  });

  return divElemen;
};
