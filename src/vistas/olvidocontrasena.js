import { restablecerContrasena } from '../lib/controladorFirebase.js';

export const olvidoContrasenaUsuario = () => {
  const olvidoContrasena = `
  <div class="banner">
  <img src="./img/WomenBanner.png" alt="logo" class="imgLogo">
 </div>
  
 <br><br><br><br><br><br>
    
<h3>¿Tienes problemas para iniciar sesión?</h3>
<p>Ingresa tu correo electrónico <br>y te enviaremos un enlace para <br>recuperar el acceso a tu cuenta.</p>
<input type='text' id='correoOlvidoContrasena' placeholder='Correo electrónico' class='correo'><br>
<button id='btnOlvidoContrasena' class='submit' >Enviar enlace de inicio de sesión</button> <br>
<a>¿Tienes una cuenta? </a><a href='#/login'>Inicia sesión</a><br><br>
<a>¿No tienes cuenta? </a><a href='#/registrate'>Regístrate</a>


<div class="footer">
 <p>Copyright by Marcela / Paula & Yosliana / 2020 / Laboratoria013</p>
</div> 

`;
  const divElemen = document.createElement('div');
  divElemen.innerHTML = olvidoContrasena;
  const btnOlvidoContrasena = divElemen.querySelector('#btnOlvidoContrasena');
  btnOlvidoContrasena.addEventListener('click', () => {
    const correoOlvidoContrasena = document.getElementById('correoOlvidoContrasena').value;
    restablecerContrasena(correoOlvidoContrasena);
  });

  return divElemen;
};
