window.onload = function() {
    document.getElementById('cerrar_sesion').addEventListener('click', function() {
        window.location.href = '/01_Login/Login.html';
    });
}

$(document).ready( function () {
    $("#pagina_generar_envio").click( function () {
        $("#columna_contenido_pageDesplegables").load("Sub_Operaciones_x_Botones/01_Crear_Envio.html")
    });
});

$(document).ready( function() {
    $("#pagina_ver_estado_envios").click(function(){
        $("#columna_contenido_pageDesplegables").load("Sub_Operaciones_x_Botones/02_Ver_estado_Envios.html");
    });
});

$(document).ready( function() {
    $("#pagina_modificar_envios").click(function(){
        $("#columna_contenido_pageDesplegables").load("Sub_Operaciones_x_Botones/03_Modificar_Envios.html");
    });
});

$(document).ready( function() {
    $("#pagina_soporte").click(function(){
        $("#columna_contenido_pageDesplegables").load("/03_Recepcion/Sub_Operaciones_x_Botones/04_Soporte_Tecnico.html");
    });
});