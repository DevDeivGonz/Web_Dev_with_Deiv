$(document).ready(function () {
    class Envio {
        constructor(nombre, tipoDocumento, contacto, correo, ciudad, categoria, 
            direccion, fecha, descripcion, precioNeto, metodoPago) {
            this.nombre = nombre;
            this.tipoDocumento = tipoDocumento;
            this.contacto = contacto;
            this.correo = correo;
            this.ciudad = ciudad;
            this.categoria = categoria;
            this.direccion = direccion;
            this.fecha = fecha;
            this.descripcion = descripcion;
            this.precioNeto = precioNeto;
            this.metodoPago = metodoPago;
        }

        generarFactura() {
            return `
                <h3>Factura de Envío</h3>
                <p><strong>Nombre:</strong> ${this.nombre}</p>
                <p><strong>Documento:</strong> ${this.tipoDocumento}</p>
                <p><strong>Contacto:</strong> ${this.contacto}</p>
                <p><strong>Correo:</strong> ${this.correo}</p>
                <p><strong>Ciudad:</strong> ${this.ciudad}</p>
                <p><strong>Categoría del envío:</strong> ${this.categoria}</p>
                <p><strong>Dirección:</strong> ${this.direccion}</p>
                <p><strong>Fecha:</strong> ${this.fecha}</p>
                <p><strong>Descripción del envío:</strong> ${this.descripcion}</p>
                <p><strong>Precio Neto:</strong> $${this.precioNeto}</p>
                <p><strong>Método de pago:</strong> ${this.metodoPago}</p>
            `;
        }
    }

    // Precios por tipo de producto
    const precio_por_envio = {
        aseo: 50000,
        comida: 10000,
        farmacia: 100000,
        fragil: 150000,
        limpieza: 10000,
        plasticos: 90000,
        pelogrosos: 300000
    };

    // Disponibilidad y precios de recargo
    const disponibilidad_cuidad_x_envio = {
        Barranquilla: {disponibilidad: true, recargo: 0},
        Bogotá: {disponibilidad: true, recargo: 0},
        Bucaramanga: {disponibilidad: true, recargo: 0},
        Cali: {disponibilidad: true, recargo: 0},
        Cartagena: {disponibilidad: true, recargo: 0},
        Cúcuta: {disponibilidad: false, recargo: 100000},
        Ibagué: {disponibilidad: true, recargo: 0},
        Manizales: {disponibilidad: true, recargo: 0},
        Medellín: {disponibilidad: true, recargo: 0},
        Montería: {disponibilidad: false, recargo: 30000},
        Neiva: {disponibilidad: true, recargo: 0},
        Pereira: {disponibilidad: true, recargo: 0},
        Santa_Marta: {disponibilidad: true, recargo: 0},
        Sincelejo: {disponibilidad: false, recargo: 50000},
        Villavicencio: {disponibilidad: false, recargo: 20000}
    };

    // Manejo del clic en el botón "Generar Envío"
    $(".generar_envio").click(function() {
        var mostrarPage_GenerarEnvio = $(this).data("page"); 
    
        if (!mostrarPage_GenerarEnvio) {
            console.error("El atributo 'data-page' no está definido para este botón.");
            return;
        }
    
        // Ocultar cualquier página visible
        $("#columna_contenido_pageDesplegables").children().hide();
    
        // Comprobar si la página ya existe
        if ($("#" + mostrarPage_GenerarEnvio).length) {
            $("#" + mostrarPage_GenerarEnvio).fadeIn();
        } else {
            var newPage = $("<div></div>", {
                id: mostrarPage_GenerarEnvio,
                class: "columna_contenido_Paginas_Desplegables"
            });
    
            newPage.html();
    
            $("#columna_contenido_pageDesplegables").append(newPage);
            newPage.fadeIn(`
                
            `);
        }
    });
    
    // Manejo del clic en el botón "Calcular"
    $(document).on('click', '#calcular', function() {
        var nombre = $("#nombre").val();
        var tipoDocumento = $("#tipo_documento_CorresponsalEnvio").val();
        var contacto = $("#numero_contacto").val();
        var correo = $("#correo_electronico").val();
        var ciudad = $("#ciudades_envio").val();
        var categoria = $("#categoria").val();
        var direccion = $("#direccion").val();
        var fecha = $("#fecha").val();
        var descripcion = $("#descripcion").val();
        var precioNeto = parseFloat($("#precioNeto").val());
        var metodoPago = $("#metodo_pago").val();

        var envio = new Envio(nombre, tipoDocumento, contacto, correo, ciudad, categoria, 
            direccion, fecha, descripcion, precioNeto, metodoPago);

        var precioBase = precio_por_envio[categoria];
        var recargo = disponibilidad_cuidad_x_envio[ciudad].recargo;
        var total = precioBase + recargo;

        var factura = envio.generarFactura();
        factura += `<p><strong>Total a pagar:</strong> $${total}</p>`;

        $("#columna_contenido").append(factura);
    });
});
