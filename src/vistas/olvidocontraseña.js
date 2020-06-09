export const olvidoContraseñaUsuario = () =>{
    const olvidoContraseña = 
`
<h3>¿Tienes problemas para iniciar sesión?</h3>
<p>Ingresa tu correo electrónico <br>y te enviaremos un enlace para <br>recuperar el acceso a tu cuenta.</p>
<input type='text' id='correoOlvidoContraseña' placeholder='Correo electrónico' class='correo'><br>
<button id='btnOlvidoContraseña' class='submit' >Enviar enlace de inicio de sesión</button> <br>
<a>¿Tienes una cuenta? </a><a href='#/registro'>Inicia sesión</a><br><br>
<a>¿No tienes cuenta? </a><a href='#/'>Regístrate</a>
`
const divElemen = document.createElement('div');
divElemen.innerHTML = olvidoContraseña;
const btnOlvidoContraseña = divElemen.querySelector('#btnOlvidoContraseña');
btnOlvidoContraseña.addEventListener('click', restablecerContraseña);
return divElemen;
}