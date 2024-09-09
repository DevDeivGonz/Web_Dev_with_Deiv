$(document).ready(function() {
    $("#crearUsuarioBtn").click(function() {
        $("#mainContent").load("http://127.0.0.1:5500/sub_paginas/subpagina1.html");
    });

    $("#historialBtn").click(function() {
        $("#mainContent").load("http://127.0.0.1:5500/sub_paginas/subpagina2.html");
    });

    // Cargar la página inicial por defecto
    $("#mainContent").load("subPaginas/crear_usuario.html");
});
