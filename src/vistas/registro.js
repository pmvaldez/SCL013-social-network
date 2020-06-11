import { funRegistroUsuario, funLoginGoogle, funLoginFacebook } from '../lib/controladorFirebase.js';

export const registroUsuario = () => {
  const registroEmprendedora = `
<div class="banner">
 <img src="./img/WomenBanner.png" alt="logo" class="imgLogo">
</div>
<div class="laptopPic"></div>
 <div class="container">
   <div class="login-container">
     <div class="register">
       <h2>Registrate</h2>
       <form>
         <input type="text" id="correoRegistro" placeholder="Correo electrónico" class="correo">
         <input type="password" id="contrasenaRegistro" placeholder="Ingrese su contraseña" class="correo">
       </form>
       <button type ="button" id="registro" class="submit" >Regístrarte</button>
       <button id="loginFace" class="fb"><i class="fab fa-facebook-f"></i> Acceder con Facebook</button>
       <button id="loginGoogle" class="goo"><i class="fab fa-google"></i> Acceder con Google</button>
       <a>¿Tienes una cuenta? </a><a href='#/login'>Inicia sesión</a><br><br>
       <h1 id='mensajeRegistro'></h1>
      </div>   
    </div>
  </div>
</div>
<div class="footer">
 <p>Copyright by Marcela / Paula & Yosliana / 2020 / Laboratoria013</p>
</div> `;


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
