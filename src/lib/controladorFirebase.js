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

// Funcion Obervador Usuario Logueado

export const ObservadorUsuario = () => {
  firebase.auth().onAuthStateChanged((user) => {
    // console.log(user);
    document.getElementById('login').innerHTML = user ? 'Logueado ' + user.email : 'No Logueado ';
  });
};

// Registro nuevos Usuarios
export const funRegistroUsuario = (correoRegistro, contrasenaRegistro) => {
  firebase.auth().createUserWithEmailAndPassword(correoRegistro, contrasenaRegistro)
    .then((res) => {
      const mensajeRegistro = document.querySelector('#mensajeRegistro');
      mensajeRegistro.innerHTML = '';
      window.location.hash = '#/publicaciones';
      // alert ("Se registro Correctamente")
    })
    .catch((error) => {
      if (error.code === 'auth/invalid-email') {
        mensajeRegistro.innerHTML = '⚠️ Debe ingresar un correo electrónico';
      }
      if (error.code === 'auth/weak-password') {
        mensajeRegistro.innerHTML = '⚠️ Contraseña es incorrecta';
      }
      if (error.code === 'auth/email-already-in-use') {
        mensajeRegistro.innerHTML = '⚠️ Cuenta ya existe';
      }
    })
    .then(() => {
      verificarCuenta();
    });
};

// verificar email
export const verificarCuenta = () => {
  const user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => {
    // Email sent.
  }).catch((error) => {
    // An error happened.
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
        mensajeLogin.innerHTML = '⚠️ Usuario no esta registrado';
      }
      if (error.code === 'auth/wrong-password') {
        mensajeLogin.innerHTML = '⚠️ Contraseña es incorrecta';
      }
      if (error.code === 'auth/invalid-email') {
        mensajeLogin.innerHTML = '⚠️ Debe ingresar un correo electrónico';
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
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      window.location.hash = '#/publicaciones';
      
       guardaDatos(user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
};
// Inicio de sesion con Facebook
export const funLoginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      // console.log('usuario', user);
      const token = result.credential.accessToken;
      const user = result.user;
      window.location.hash = '#/publicaciones';
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
};
export const getUser = () => firebase.auth().currentUser;

export const subirImagen = (e) => {
  const storage = firebase.storage().ref();
  const img = storage.child('img');
  const form = document.getElementById('upload');
  const output = document.getElementById('output');
  
  Array.from(event.target.files).forEach(file=> {
    let uploadTask = img.child(new Date() + file.name).put(file)
    console.log(uploadTask)
    uploadTask.on("state_changed", data => {}, err => {},() => {
      let fileIMG = img.child(file.name)
       fileIMG.getDownloadURL()
          .then(url=>{
                if (file.type.match('image.*')){
          output.innerHTML+=`
          <div class='card'>
          <img src='${url}' class='card-img-top'
          </div>`  
        }
      })
    })    
  }) 
};



export const guardarComentario = () => {
  const comentario = document.querySelector("#comentario").value;
  let imagenUrl = document.getElementsByClassName('card-img-top');
  console.log(imagenUrl)
 for (let i = 0; i < imagenUrl.length; i++) {
   console.log (imagenUrl[i].src);
  firebase.firestore().collection('comentario').add({
    coment: comentario,
    fecha: new Date(),
    foto: imagenUrl[i].src,
    
  })
    .then((doc) => {
      document.querySelector("#comentario").value = "";
      cargarComentarios();
    })
    .catch((error) => {
      // console.error('Error adding document: ', error);
    });
  };
};

// Publica Comentario
export const cargarComentarios = () => {
  const publicarC = document.getElementById('publicarC');
  firebase.firestore().collection('comentario').orderBy('fecha', 'desc')
    .onSnapshot((querySnapshot) => {
      document.getElementById('comentario').value = '';
      publicarC.innerHTML = '';
      querySnapshot.forEach((doc) => {
        const usuario = getUser();
        publicarC.innerHTML += ` 
        <div id="register" class="title-new-post">
          <img class='user-foto' src="${usuario.photoURL}">
          <div>
            <h2 id='nombreUsuario'>${usuario.email}</h2>
            <div class="time">
              <p id='fechaPublicado'>${doc.data().fecha.toDate()}</p>
            </div>
          </div>
          <p>${doc.data().coment}</p>
          <img src='${doc.data().foto}' >
          <button name="eliminarPost" data-id="${doc.id}">Eliminar</button>
          <button name="editarPost" data-id="${doc.id}" data-coment="${doc.data().coment}">Editar</button>
          </div>
      `;
        const btnEliminar = document.getElementsByName('eliminarPost');
        for (let i = 0; i < btnEliminar.length; i++) {
          btnEliminar[i].addEventListener('click', borrarDatos);
        }
        const btnEditar = document.getElementsByName('editarPost');
        for (let i = 0; i < btnEditar.length; i ++) {
          btnEditar[i].addEventListener('click', editaComentario);
        }
      });
    });
};



// Edita Comentarios
export const editaComentario = (event) => {
  // console.log(' Editar', event.target.dataset.coment);
  document.querySelector('#comentario').value = event.target.dataset.coment;
  document.getElementById('btnGuardarComentario').style.visibility = 'hidden';
  document.getElementById('btnEditarComentario').style.visibility="visible";
  const guardarComentarioEditado = document.querySelector('#btnEditarComentario');
  guardarComentarioEditado.addEventListener ('click', () => {
    const datosEditados = firebase.firestore()
      .collection('comentario').doc(event.target.dataset.id);
    // Set the "capital" field of the city 'DC'
    const comentarioEditado = document.querySelector('#comentario').value;
    return datosEditados.update({
      coment: comentarioEditado,
    })
      .then(() => {
    document.getElementById('btnGuardarComentario').style.visibility="visible";
    document.getElementById('btnEditarComentario').style.visibility="hidden";
        // console.log("Document successfully updated!");
      })
      .catch((error) => {
        // console.error("Error updating document: ", error);
      });
  });
};
// Elimina Comentarios
export const borrarDatos = (event) => {
  console.log(' Evento', event.target.dataset);
  firebase.firestore()
    .collection('comentario')
    .doc(event.target.dataset.id)
    .delete()
    .then(() => {
       console.log('Document successfully deleted!');
    })
    .catch((error) => {
       console.error('Error removing document: ', error);
    });
};

// Funcion Olvido Contraseña
export const restablecerContrasena = (correoOlvidoContrasena) => {
  // [START sendpasswordemail]
  firebase.auth().sendPasswordResetEmail(correoOlvidoContrasena)
    .then(() => {
      window.location.hash = '#/login';
      alert('Password Reset Email Sent!');
    }).catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        alert(errorMessage);
      } else if (errorCode === 'auth/user-not-found') {
        alert(errorMessage);
      }
      // console.log(error);
    });
};
// Guarda datos
export const datosPerfil = (nombre, apellido, ciudad, oficio, fecha) => {
  firebase.firestore().collection('users').add({
    uid: user.uid,
    nombre: nombre,
    apellido: apellido,
    oficio: oficio,
    ciudad: ciudad,
    born: fecha,
  })
    .then((docRef) => {
      // console.log('Document written with ID: ', docRef.id);
      document.querySelector('#nombre').value = '';
      document.querySelector('#apellido').value = '';
      document.querySelector('#oficio').value = '';
      document.querySelector('#ciudad').value = '';
      document.querySelector('#fecha').value = '';
    })
    .catch((error) => {
      // console.error('Error adding document: ', error);
    });
};
// Funcion Cerra Sesion
export const cerrarSesion = () => {
  firebase.auth().signOut().then(() => {
    window.location.hash = '#/login';
    // console.log ("correoLogin")
    // Sign-out successful.
  }).catch((error) => {
  });
};
