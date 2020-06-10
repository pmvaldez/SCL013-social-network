import { funLoginUsuario } from '../lib/controladorFirebase.js';

export const ingresarUsuario = () => {
  const loginEmprendedora = ` 
    <div class='container'>
      <div class='login-container'>
        <div class='register'>
          <h2>Iniciar Sesión</h2>
            <form action=''>
              <input type='text' id='correoLogin' placeholder='Correo electrónico' class='correo'>
              <input type='password' id='contrasenaLogin' placeholder='Ingrese su contraseña' class='pass'>
              <button id='login' class='submit' >Iniciar sesión</button> <br> <br>
              <a href='#/olvidocontraseña'>¿Olvidaste tu contraseña?</a> <br>
              <a>¿No tienes cuenta? </a><a href='#/registro'>Regístrate</a>
            </form>
          <h1 id='mensajeLogin'></h1>
        </div>
      </div>
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
