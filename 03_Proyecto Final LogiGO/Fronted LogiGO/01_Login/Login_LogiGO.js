class UsuariosLogiGO {
    constructor(nombre_usuario, contrasena_usuario, role_usuario) {
        this.nombre_usuario = nombre_usuario;
        this.contrasena_usuario = contrasena_usuario;
        this.role_usuario = role_usuario;
    }
   
    validateCredentials(inputUsername, inputPassword) {
        return this.nombre_usuario === inputUsername && this.contrasena_usuario === inputPassword;
    }
}

class login_por_cada_usuario {
    constructor() {
        this.usuarios = [];
    }

    agregar_usuario(usuario) {
        this.usuarios.push(usuario);
    }

    autenticacion(nombre_usuario, contrasena_usuario) {
        for (let cada_usuario of this.usuarios) {
            if (cada_usuario.validateCredentials(nombre_usuario, contrasena_usuario)) {
                switch (cada_usuario.role_usuario) {
                    case 'Admin':
                        window.location.href = 'http://127.0.0.1:5502/Fronted%20LogiGO/02.4_UI_Admin/inicio_Admin.html';
                        break;
                    case 'Empleado Recepcion':
                        window.location.href = 'http://127.0.0.1:5502/Fronted%20LogiGO/02.1_UI_E.Recepcion/iui_recepcion.html';
                        break;
                    case 'Empleado Bodega':
                        window.location.href = 'http://127.0.0.1:5502/Fronted%20LogiGO/02.2_UI_E.Bodega/inicio_em_Bodega.html';
                        break;
                    case 'Empleado Conductor':
                        window.location.href = 'http://127.0.0.1:5502/Fronted%20LogiGO/02.3_UI_E.Conductor/inicio_em_conductor.html';
                        break;
                    default:
                        alert("Error, usuario no valido, inexistente o bloqueado.");
                }
                return; // Salir después de redirigir
            }
        }
        // Mensaje de error si no se encontró una coincidencia
        alert("Credenciales incorrectas.");
    }
}

const PerfilAdmin = new UsuariosLogiGO('PerfilAdmin', 'SoyAdminXD', 'Admin');
const PerfilEmpleadoRecepcion = new UsuariosLogiGO('PerfilEmpleadoRecepcion', '654321', 'Empleado Recepcion');
const PerfilEmpleadoBodega = new UsuariosLogiGO('PerfilEmpleadoBodega', '123456', 'Empleado Bodega');
const PerfilEmpleadoConductor = new UsuariosLogiGO('PerfilEmpleadoConductor', '121212', 'Empleado Conductor');

const Login_usuario = new login_por_cada_usuario();

Login_usuario.agregar_usuario(PerfilAdmin);
Login_usuario.agregar_usuario(PerfilEmpleadoRecepcion);
Login_usuario.agregar_usuario(PerfilEmpleadoBodega);
Login_usuario.agregar_usuario(PerfilEmpleadoConductor);

window.onload = function() {
    document.getElementById('Validar_usuario').addEventListener('click', function(event) {
        event.preventDefault(); // Evitar recarga de página

        let nombre_usuario = document.getElementById('nombre_usuario').value;
        let contrasena_usuario = document.getElementById('password_usuario').value;

        Login_usuario.autenticacion(nombre_usuario, contrasena_usuario);
    });
}
