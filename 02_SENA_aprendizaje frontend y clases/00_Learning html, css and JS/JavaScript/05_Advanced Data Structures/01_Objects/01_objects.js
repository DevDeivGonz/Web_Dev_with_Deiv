document.addEventListener('DOMContentLoaded', function() {
    function saludar() {
        const persona = {
            nombre: 'David',
            edad: 21,
            profesion: 'Desarrollador fullstack de Javascript y Java',
        };

        alert(`Hola, mi nombre es ${persona.nombre}! Tengo ${persona.edad} años y soy un ${persona.profesion}.`);
    }

    // Definir un objeto para manejar la visibilidad del mensaje
    const ControladorMensaje = {
        // Propiedad que hace referencia al elemento del DOM
        mensaje: document.getElementById('mensaje'),

        // Método para mostrar el mensaje
        mostrar: function() {
            this.mensaje.style.display = 'block';
        },

        // Método para ocultar el mensaje
        ocultar: function() {
            this.mensaje.style.display = 'none';
        }
    };

    // Event Listeners para los botones
    document.getElementById('mostrar').addEventListener('click', function() {
        ControladorMensaje.mostrar();
    });

    document.getElementById('ocultar').addEventListener('click', function() {
        ControladorMensaje.ocultar();
    });
});