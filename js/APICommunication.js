///*global window */
///*global alert */
/*jslint browser: true, for:true */

//JavaScript Document

/**Curso: HMTL5 - Pildoras Informáticas - API Communication
 * Origin: Capitulo65.html ==> AJAX - Conexiones remotas - Envío de datos
 */

// "use strict";

//1. Definición de Objetos y Variables
var zonaDatos;
var botonEnviarDatos;
var miNombre;
var miApellido;


//1.1 Extracción de elementos desde HTML
zonaDatos = document.getElementById("zona-datos");
botonEnviarDatos = document.getElementById("boton-enviar-datos");
miNombre = document.getElementById("mi-nombre");
miApellido = document.getElementById("mi-apellido");

//2. Definición de Funciones



function mostrarDatos(e) {
    "use strict";

    //Obtenemos una respuesta en forma de texto desde el servidor
    zonaDatos.innerHTML = e.target.responseText;
}



function enviarDatos() {
    "use strict";

    // Definimos las variables locales para el nombre y el apellido.
//    var miNombre;
//    var miApellido;
    //Creamos la variable que alojará el constructor FormData
    var datos;
    //Creamos la variable que alojará el archivo php en el servidor
    var url;
    //Creamos la variable para la conexión con el servidor
    var solicitud;


    var miNombreValor;
    var miApellidoValor;

    miNombreValor = miNombre.value;
    miApellidoValor = miApellido.value;

    // Creamos objeto del constructor FormData sobre la variable formData.
    datos = new FormData();

    // Añadimos el nombre y el apellido con la clave y su valor con append
    datos.append("mi_nombre", miNombreValor);
    datos.append("mi_apellido", miApellidoValor);

    //Definimos la ruta para el archivo php correspondiente a la variable url
    url = "php/procesar.php";

    //Creamos el objeto de conexión XMLHttpRequest sobre la variable solicitud
    solicitud = new XMLHttpRequest();

    //Ponemos la conexión a la escucha una vez se cargue
    solicitud.addEventListener("load", mostrarDatos, false);

    //Abrimos la conexión
    solicitud.open("POST", url, true);

    //Enviamos los datos del objeto formData que hemos creado con el constructor FormData
    // y al que le hemos añadido datos con append.
    solicitud.send(datos);


}



function comenzar() {
    "use strict";

    botonEnviarDatos.addEventListener("click", enviarDatos, false);
}



//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
