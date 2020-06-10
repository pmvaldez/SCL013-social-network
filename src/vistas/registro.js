import { funRegistroUsuario, funLoginGoogle, funLoginFacebook } from '../lib/controladorFirebase.js';

export const registroUsuario = () => {
  const registroEmprendedora = `
<div class="container">
<div class="login-container">
  <div class="register">
    <h2>Registrate</h2>
    <form action="">
      <input type="text" id="correoRegistro" placeholder="Correo electrónico" class="correo">
      <input type="password" id="contrasenaRegistro" placeholder="Ingrese su contraseña" class="pass">
      <button id="registro" class="submit" >Regístrarte</button><br>
      <a>¿Tienes una cuenta? </a><a href='#/login'>Inicia sesión</a><br><br>
           </form>
       <h1 id='mensajeRegistro'></h1>
  </div>
  <div class="login">
    <h2>Regístrate con</h2>
    <div class="login-items">
      <button id="loginFace" class="fb"><i class="fab fa-facebook-f"></i> Acceder con Facebook</button>
      <button id="loginGoogle" class="goo"><i class="fab fa-google"></i> Acceder con Google</button>
      </div>
  </div>
</div>
</div>`;
  const divElemen = document.createElement('div');
  divElemen.innerHTML = registroEmprendedora;
  const btnGoogle = divElemen.querySelector('#loginGoogle');
  btnGoogle.addEventListener('click', funLoginGoogle);
  const btnFacebook = divElemen.querySelector('#loginFace');
  btnFacebook.addEventListener('click', funLoginFacebook);
  const botonRegistro = divElemen.querySelector('#registro');
  botonRegistro.addEventListener('click', () => {
    const correoRegistro = document.getElementById('correoRegistro').value;
    const contrasenaRegistro = document.getElementById('contrasenaRegistro').value;
    funRegistroUsuario(correoRegistro, contrasenaRegistro);
  });
  return divElemen;
};
