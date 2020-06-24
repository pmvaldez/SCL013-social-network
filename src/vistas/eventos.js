export const eventos = () => {
  const muroEventos = `
      <div class="container">
        <section id="start">
          <img src="img/newLogo.png" class="imgLogo">  
        </section><br>
        <div class="evento"><br>
          <div class="title-new-post">
            <h3>Eventos</h3>
          </div><br>
          <div class="imagenesEvento">
            <a href=https://mujeresemprendedoras.cl/web><img src="img/evento.jpg" alt=""></a>
            <a href=https://avonni.cl><img src="img/evento2.jpg" alt=""></a>
            <a href=https://laquintaemprende.cl/eventos/seminario-online-mujeres-emprendedoras><img src="img/evento3.jpg" alt=""></a>
            <a href=https://laquintaemprende.cl/2020/04/01/comienza-de-forma-gratuita-y-online-el-viaje-de-la-emprendedora><img src="img/evento1.png" alt=""></a>
          </div>
        </>
        <button id="atras" class="large material-icons"></button>
        <button id="adelante" class="large material-icons"></button>
        <button id="recargar" class="large material-icons"></button>
        <div class="container-footer">
        <div class="footer">
         <div class="copyright">
           © 2020 Todos los Derechos Reservados | <a href="">Marcela, Paula, Yosliana</a>
         </div>
      </div>`;
  const divElemen = document.createElement('div');
  divElemen.innerHTML = muroEventos;
  const atras = divElemen.querySelector('#atras');
  atras.addEventListener('click', () => {
    window.history.go(-1);
  });
  const recargar = divElemen.querySelector('#recargar');
  recargar.addEventListener('click', () => {
    window.history.go(0);
  });
  const adelante = divElemen.querySelector('#adelante');
  adelante.addEventListener('click', () => {
    window.history.go(1);
  });
  return divElemen;
};
