window.onload = function() {
    document.getElementById('cerrar_sesion').addEventListener('click', function() {
        window.location.href = '/01_Login/Login.html';
    });
}

/*Central donde se despliegan las subpaginas o pagonas desplegables por cada boton en UI ADMIN*/

$(document).ready( function () {
    $("#verificar_rutas").click( function () {
        $("#columna_contenido_Desplegables_conductor").load("/04_Conductor/Sub_paginas_conductor/Verificar_rutas.html")
    });
});

$(document).ready( function () {
    $("#paradas").click( function () {
        $("#columna_contenido_Desplegables_conductor").load("/04_Conductor/Sub_paginas_conductor/ver_mapa.html")
    });
});

$(document).ready( function () {
    $("#direcciones").click( function () {
        $("#columna_contenido_Desplegables_conductor").load("/04_Conductor/Sub_paginas_conductor/direcciones.html")
    });
});

$(document).ready( function () {
    $("#informacion").click( function () {
        $("#columna_contenido_Desplegables_conductor").load("/04_Conductor/Sub_paginas_conductor/informacion.html")
    });
});

$(document).ready( function () {
    $("#id_orden").click( function () {
        $("#columna_contenido_Desplegables_conductor").load("/04_Conductor/Sub_paginas_conductor/id_orden.html")
    });
});

$(document).ready( function () {
    $("#vehiculo").click( function () {
        $("#columna_contenido_Desplegables_conductor").load("/04_Conductor/Sub_paginas_conductor/vehiculo.html")
    });
});

$(document).ready( function () {
    $("#soporte").click( function () {
        $("#columna_contenido_Desplegables_conductor").load("/04_Conductor/Sub_paginas_conductor/soporte.html")
    });
});