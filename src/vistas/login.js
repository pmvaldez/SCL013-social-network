import { funLoginUsuario } from '../lib/controladorFirebase.js';

export const ingresarUsuario = () => {
  const loginEmprendedora = ` 
<div class="banner">
  <img src="./img/WomenBanner.png" alt="logo" class="imgLogo">
</div>
<div class="laptopPic"></div>
<div class="container">
  <div class="login-container">
    <div class="login">
      <h2>Iniciar Sesión</h2>
      <form>
        <input type="text" id="correoLogin" placeholder="Correo electrónico" class="correo">
        <input type="password" id="contrasenaLogin" placeholder="Ingrese su contraseña" class="correo">
       </form>
      <button type ="button" id="login" class="submit" >Iniciar sesión</button>
      <button id="loginFace" class="fb"><i class="fab fa-facebook-f"></i> Acceder con Facebook</button>
      <button id="loginGoogle" class="goo"><i class="fab fa-google"></i> Acceder con Google</button>
      <a href='#/olvidocontrasena'>¿Olvidaste tu contraseña?</a> <br>
      <a>¿No tienes cuenta? </a><a href='#/registro'>Regístrate</a>
      <h1 id='mensajeLogin'></h1>
    </div>
  </div>
</div>
<div class="footer">
  <p>Copyright by Marcela / Paula & Yosliana / 2020 / Laboratoria013</p>
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
