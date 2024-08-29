// Funciones para redirigir a diferentes páginas
function go_to_inicio() {
    location.href = "http://127.0.0.1:5502/Fronted%20LogiGO/01_Login/Inicio_login_LogiGO.html";
}

function go_to_pagina_contactanos() {
    location.href = "http://127.0.0.1:5502/Fronted%20LogiGO/01_Login/contactanos.html";
}

function go_to_pagina_ayuda() {
    location.href = "http://127.0.0.1:5502/Fronted%20LogiGO/01_Login/pagina_ayuda.html";
}

function go_to_pagina_acerca_de() {
    location.href = "http://127.0.0.1:5502/Fronted%20LogiGO/01_Login/pagina_acerca%20de.html";
}

// Asignar eventos a los botones usando addEventListener
document.getElementById('inicio').addEventListener('click', go_to_inicio);
document.getElementById('contactanos').addEventListener('click', go_to_pagina_contactanos);
document.getElementById('ayuda').addEventListener('click', go_to_pagina_ayuda);
document.getElementById('acerca_de').addEventListener('click', go_to_pagina_acerca_de);
// se termina los eventos para refirigir los clicks de botones.


// Clase Usuario que encapsula los detalles y métodos relacionados con un usuario
class Usuario {
    constructor(nombre, contraseña, redireccion) {
        this.nombre = nombre;
        this.contraseña = contraseña;
        this.redireccion = redireccion;
    }

    // Método para validar la contraseña del usuario
    validarContraseña(contraseñaIngresada) {
        return this.contraseña === contraseñaIngresada;
    }

    // Método para redirigir al usuario a su página correspondiente
    redirigir() {
        location.href = this.redireccion;
    }
}

// Clase Sistema que maneja los usuarios y la lógica de validación
class Sistema {
    constructor() {
        this.usuarios = [];
        this.intentos = 3;
        this.bloqueado = false;
    }

    // Método para agregar un usuario al sistema
    agregarUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    // Método para validar el acceso de un usuario
    validarUsuario(nombreIngresado, contraseñaIngresada) {
        if (this.bloqueado) {
            alert("Tu cuenta está bloqueada. Por favor, contacta al administrador.");
            return;
        }

        for (let usuario of this.usuarios) {
            if (usuario.nombre === nombreIngresado) {
                if (usuario.validarContraseña(contraseñaIngresada)) {
                    alert(`Contraseña correcta, bienvenido ${usuario.nombre}.`);
                    usuario.redirigir();
                    return;
                } else {
                    this.intentos--;
                    alert(`Contraseña incorrecta. Te quedan ${this.intentos} intentos.`);
                    if (this.intentos <= 0) {
                        this.bloqueado = true;
                        alert("Tu cuenta ha sido bloqueada por demasiados intentos fallidos.");
                    }
                    return;
                }
            }
        }

        alert("Usuario no encontrado.");
    }
}

// Instancia del sistema
const sistema = new Sistema();

// Creación de usuarios y agregarlos al sistema
sistema.agregarUsuario(new Usuario("name_empleado_recepcion", "empleado recepcion", "http://127.0.0.1:5502/Fronted%20LogiGO/02.1_UI_E.Recepcion/inicio_empleados.html"));
sistema.agregarUsuario(new Usuario("name_empleado_bodega", "empleado bodega", "http://127.0.0.1:5502/Fronted%20LogiGO/01_Login/contactanos.html"));
sistema.agregarUsuario(new Usuario("name_empleado_conductor", "empleado conductor", "http://127.0.0.1:5502/Fronted%20LogiGO/01_Login/pagina_ayuda.html"));
sistema.agregarUsuario(new Usuario("admin", "123456", "http://127.0.0.1:5502/Fronted%20LogiGO/01_Login/pagina_acerca%20de.html"));

// Función para validar el usuario
function validar_usuario() {
    var nombre_usuario = document.getElementById('nombre_usuario').value;
    var contraseña_usuario = document.getElementById("contraseña_usuario").value;

    sistema.validarUsuario(nombre_usuario, contraseña_usuario);
}
