function peticionAsync(tipo, url, parametros) {
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (ajax.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
			if (ajax.status == 200) {
				//El resultado es exitoso!
				//Tomar las acciones necesarias aquí
        let resp = JSON.parse(ajax.response);
        if (resp.error == "0") {
          if (url === '/comentarios') {
            dibujaPublicaciones(resp.registros);
          } else if (url === '/login') {
						alert("Bienvenido: " + resp.nombre);
          //}else (resp.error == "1") {
						//alert("Error de credenciales");
          }
        }else {
					alert("Error de credenciales");
				}
			} else if (ajax.status == 404) {
				//No encontró el servicio o API
			} else {
				//Una respuesta inesperada por parte del servidor
				alert('Saliendo precipitadamente de la aldea por culpa de la escaces de rinocerontes');
			}
		}
	};
	//El tipo puede ser GET, POST, PUT, DELETE o cualquier tipo aceptado por HTTP
	//La URL es a dondo hará la petición...
	//Por último, el "true" indica que es una petición asíncrona
	ajax.open(tipo, url, true);
	//Se establece cómo será enviado el contenido.
	ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	//La función encodeURI se encarga que la petición tenga el formato adecuado para ser enviado...
	//un ejemplo de petición puede ser variable=valor&otravariable=otrovalor...
	ajax.send(encodeURI(parametros));
}

function register_visibility(id) {
	var element_sign = document.getElementById('login')
	if(element_sign.style.display == 'block')
          element_sign.style.display = 'none';
       else
          element_sign.style.display = 'block';
    }

function leerPublicaciones(){
  peticionAsync("GET", "/comentarios", "")
};
function login() {
	var formulario = document.getElementById('form-login');
	peticionAsync('POST','/login', 'usr=' + formulario.email.value + '&pwd=' + formulario.password.value);

}

function dibujaPublicaciones(publis){
  let contenedor = document.getElementById('notices');
  for(let i = 0; i < publis.length; i++){
    let  nuevaPublicacion = '<div class="entry-notice" id="el'+publis[i].id+'">'+
      '<div class="title-date">\
          <h2 class="title-notice">'+publis[i].titulo+'</h2>\
          <p class="date">'+publis[i].momento+'</p>\
       </div>\
       <div class="image-notice">\
        <img src="./images/img1.png" alt="Una imagen">\
       </div>\
       <div class="text-notice">\
       <p>'+publis[i].contenido+'</p>\
       </div>\
       <div class="auth-notice">\
       <p>'+publis[i].idusuario+'</p>\
       </div></div>';
       contenedor.innerHTML += nuevaPublicacion;
  }
}
//for (let laPublicacion : publis){

//}
