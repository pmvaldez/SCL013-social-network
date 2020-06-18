export const configuracionFirebase = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCFGzkmW9EXuBBkdof7DsulXOA3JAKWW84',
    authDomain: 'red-social-women-today.firebaseapp.com',
    databaseURL: 'https://red-social-women-today.firebaseio.com',
    projectId: 'red-social-women-today',
    storageBucket: 'red-social-women-today.appspot.com',
    messagingSenderId: '201145855452',
    appId: '1:201145855452:web:6ed532f3bfac1ef2c0b319',
    measurementId: 'G-1R73RGXGCB',
  };
    // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
};
// Registro nuevos Usuarios
export const funRegistroUsuario = (correoRegistro, contrasenaRegistro) => {
  firebase.auth().createUserWithEmailAndPassword(correoRegistro, contrasenaRegistro)
    .then(res => {
      const mensajeRegistro = document.querySelector('#mensajeRegistro');
      mensajeRegistro.innerHTML = '';
      window.location.hash = '#/publicaciones';
      // alert ("Se registro Correctamente")
    })
    .catch((error) => {
      if (error.code === 'auth/invalid-email') {
        mensajeRegistro.innerHTML = 'Debe ingresar un correo electrónico';
      } if (error.code === 'auth/weak-password') {
        mensajeRegistro.innerHTML = 'Contraseña es incorrecta';
      } if (error.code === 'auth/email-already-in-use') {
        mensajeRegistro.innerHTML = 'Cuenta ya existe';
      }
    });
};
// Inicio Sesión usuario
export const funLoginUsuario = (correoLogin, contrasenaLogin) => {
  firebase.auth().signInWithEmailAndPassword(correoLogin, contrasenaLogin)
    .then(() => {
      const mensajeLogin = document.querySelector('#mensajeLogin');
      mensajeLogin.innerHTML = '';
      window.location.hash = '#/publicaciones';
    })
    .catch((error) => {
      // mensajeLogin.classList.add('mensajeError');
      if (error.code === 'auth/user-not-found') {
        mensajeLogin.innerHTML = 'Usuario no esta registrado';
      }
      if (error.code === 'auth/wrong-password') {
        mensajeLogin.innerHTML = 'Contraseña es incorrecta';
      }
      if (error.code === 'auth/invalid-email') {
        mensajeLogin.innerHTML = 'Debe ingresar un correo electrónico';
      }
      // else
      // mensajeLogin.innerHTML = 'Ocurrio un error';
    });
};
// Inicio de sesion con Google
export const funLoginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then(function (result) { 
    // Esto te da un token de acceso de Google. Puede usarlo para acceder a la API de Google.
   const token = result.credential.accessToken;
   // La información de usuario que ha iniciado sesión.
    const user = result.user;
    window.location.hash = '#/publicaciones';
    //console.log('usuario', user);
    //console.log('foto', user.photoURL);
    //console.log('Nombre', user.displayName);
    guardaDatos(user)
  }).catch(function (error) {
    // Manejar errores aquí.
    const errorCode = error.code;
    const errorMessage = error.message;
    // El correo electrónico de la cuenta del usuario utilizada.
    const email = error.email;
    // El tipo de credencial de autenticación de firebase que se utilizó.
    const credential = error.credential;
    // ...
  });
};
export const getUser =() =>{
  return firebase.auth().currentUser
}
// Inicio de sesion con Facebook
export const funLoginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
  .then(function (result) {
    console.log('usuario', user);
    window.location.hash = '#/publicaciones';
    // Esto te da un token de acceso de Facebook. Puede usarlo para acceder a la API de Facebook.
       const token = result.credential.accessToken;
    // La información de usuario que ha iniciado sesión.
    const user = result.user;
   // console.log('user', user);
  }).catch(function (error) {
    // Manejar errores aquí.
    const errorCode = error.code;
    const errorMessage = error.message;
    // El correo electrónico de la cuenta del usuario utilizada.
    const email = error.email;
    // El tipo firebase.auth.AuthCredential que se usó.
    const credential = error.credential;
    // ...
  });
};
export const guardarComentario = () => {
  const comentario = document.querySelector("#comentario").value;
  firebase.firestore().collection("comentario").add({
      coment: comentario,
      fecha: new Date(),
    })
    .then(function (docRef) {
      document.querySelector("#comentario").value = "";
      publicarComentario()
      //console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}
// Publica Comentario
export const publicarComentario = () => {
  const publicarC = document.getElementById("publicarC");
  firebase.firestore().collection("comentario").orderBy("fecha", "desc")
  .onSnapshot((querySnapshot) => {
    publicarC.innerHTML = '';
        querySnapshot.forEach((doc) => {
      publicarC.innerHTML += `
    <div id="register">
    <p>  ${doc.data().coment}  </p>
    <button name="eliminarPost" data-id="${doc.id}">Eliminar</button>
    <button name="editarPost" data-id="${doc.id}" data-coment="${doc.data().coment}">Editar</button>
     </div>`
         });
     const btnEliminar = document.getElementsByName('eliminarPost')
       for (let i = 0; i < btnEliminar.length; i++) {
      btnEliminar[i].addEventListener('click',borrarDatos); }
     const btnEditar = document.getElementsByName('editarPost')
     for (let i = 0; i < btnEditar.length; i++) {
    btnEditar[i].addEventListener('click', editaComentario); }
  });
}
// Edita Coemntarios 
export const editaComentario = (event) => {
  console.log( " Editar", event.target.dataset.coment)
  document.querySelector('#comentario').value= event.target.dataset.coment
  document.getElementById('btnGuardarComentario').style.visibility="hidden"
const guardarComentarioEditado = document.querySelector('#btnEditarComentario');
guardarComentarioEditado.addEventListener ('click', () => {
  const datosEditados=  firebase.firestore()
  .collection("comentario").doc(event.target.dataset.id);
  // Set the "capital" field of the city 'DC'
  const comentarioEditado = document.querySelector('#comentario').value
  return datosEditados.update({
      coment: comentarioEditado
  })
  .then(function() {
      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });
}
)};
// Elimina Comentarios 
export const borrarDatos = (event) => {
  console.log( " Evento", event.target.dataset)
  firebase.firestore()
  .collection("comentario")
  .doc(event.target.dataset.id)
  .delete()
  .then(function() {
    console.log("Document successfully deleted!");
    }).catch(function(error) {
          console.error("Error removing document: ", error);
        });
}
//Carga Imagen
export const subirImagen = () => {
  const ref = firebase.storage().ref();
  const file = document.querySelector("#imagen").files[0];
  const name = new Date() + '-' + file.name;
  const metadata = {
    contentType: file.type
  }
  const task = ref.child(name).put(file, metadata);
  const mensajeLogin = document.getElementById('mensajeLogin');
  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      mensajeLogin.classList.remove('mensajeError');
      console.log(url);
      mensajeLogin.innerHTML = 'Imagen cargada Exitosamente';
      //alert("Imagen cargada Exitosamente");
      const image = document.querySelector('#foto');
      image.src = url;
    })
}
// Funcion Olvido Contraseña
export const restablecerContrasena = (correoOlvidoContrasena) => {
  // [START sendpasswordemail]
  firebase.auth().sendPasswordResetEmail(correoOlvidoContrasena)
  .then(function() {
    window.location.hash = '#/login';
    // Password Reset Email Sent!
    // [START_EXCLUDE]
    alert('Password Reset Email Sent!');
      // [END_EXCLUDE]
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/invalid-email') {
        alert(errorMessage);
      } else if (errorCode == 'auth/user-not-found') {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
 });
  // [END sendpasswordemail];
};
// Guarda datos 
export const datosPerfil = (nombre, apellido, ciudad, oficio, fecha) => {
  firebase.firestore().collection("users").add({
    uid:user.uid,
      nombre: nombre,  
      apellido: apellido,
      oficio:oficio,
      ciudad:ciudad,
      born: fecha
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.querySelector("#nombre").value = "";
      document.querySelector("#apellido").value = "";
      document.querySelector("#oficio").value = "";
      document.querySelector("#ciudad").value = "";
      document.querySelector("#fecha").value = "";
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}
// Funcion Cerra Sesion 
export const cerrarSesion = () => {
  firebase.auth().signOut().then(function () {
    window.location.hash = '#/login';
    //console.log ("correoLogin")
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
    });
  };