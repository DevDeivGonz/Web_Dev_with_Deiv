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
        peligrosos: 300000
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

    
    // Manejo del clic en el botón "Calcular"
    $(document).on('click', '#calcular', function() {
        let nombre = $("#nombre").val();
        let tipoDocumento = $("#tipo_documento_CorresponsalEnvio").val();
        let contacto = $("#numero_contacto").val();
        let correo = $("#correo_electronico").val();
        let ciudad = $("#ciudades_envio").val();
        let categoria = $("#categoria").val();
        let direccion = $("#direccion").val();
        let fecha = $("#fecha").val();
        let descripcion = $("#descripcion").val();
        let precioNeto = parseFloat($("#precioNeto").val());
        let metodoPago = $("#metodo_pago").val();

        // Validación básica
        if (isNaN(precioNeto)) {
            alert("Por favor, introduce un precio neto válido.");
            return;
        }

        let envio = new Envio(nombre, tipoDocumento, contacto, correo, ciudad, categoria, 
            direccion, fecha, descripcion, precioNeto, metodoPago);
        
        let precioBase = precio_por_envio[categoria];
        let recargo = disponibilidad_cuidad_x_envio[ciudad].recargo;
        let total = precioBase + recargo;

        // Generar la factura y el texto final con HTML correctamente formateado
        let factura = envio.generarFactura();
        let factura_final = `${factura}<p><strong>El precio total del envío es:</strong> $${total}</p>`;

        // Mostrar la factura en el div
        $("#mostrar_text_factura").html(factura_final);
    });
});
