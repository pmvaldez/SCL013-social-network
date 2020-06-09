import {subirImagen, datosPerfil} from '../lib/controladorFirebase.js'

export const publicacionUsuario = () =>{
    const muroEmprendedora = 
`
<h1>Bienvenida a Women Today</h1>

<textarea placeholder="Publica tu Comentario" id="comentario" cols="30" rows="10"></textarea>
<input class='correo' type="file" id="imagen">
<img id="foto"/>
<button class='submit' id="cargarImagen">Cargar Imagen</button>
<h1 id='mensajeLogin'></h1>


<div class='register'>
<input type="text" id="nombre" placeholder="Ingrese nombre" class="correo">
<input type="text" id="apellido" placeholder="Ingrese apellido" class="correo">
<input type="text" id="fecha" placeholder="Ingrese fecha" class="correo"> <br>
<button class="submit" id="btnGuardarPerfil">Guardar</button>
</div>



`
const divElemen = document.createElement('div');
divElemen.innerHTML = muroEmprendedora;
const cargarImagen = divElemen.querySelector('#cargarImagen');
cargarImagen.addEventListener('click', subirImagen);
const btnGuardarPerfil = divElemen.querySelector('#btnGuardarPerfil');
btnGuardarPerfil.addEventListener('click', datosPerfil);

return divElemen;
}