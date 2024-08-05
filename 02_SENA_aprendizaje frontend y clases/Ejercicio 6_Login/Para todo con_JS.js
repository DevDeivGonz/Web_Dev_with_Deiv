let intentos = 0;
const maxIntentos = 3;
let bloqueado = false;

        function validar_contraseña() {
            if (bloqueado) {
                alert("Tu cuenta está bloqueada. Por favor, contacta al administrador.");
                return;
            }

            var nombre_usuario = document.getElementById("nombre_usuario").value;
            var contraseña_usuario = document.getElementById("contraseña_usuario").value;
            var contraseña_correcta = "Michi12345";

            if (contraseña_usuario === contraseña_correcta) {
                alert("Bienvenido");
                location.href = "http://127.0.0.1:5501/Ejercicio%206_Login/user_page.html";
            } else {
                intentos++;
                alert("Contraseña incorrecta");
                if (intentos >= maxIntentos) {
                    bloqueado = true;
                    alert("Has superado el número máximo de intentos, tu cuenta ha sido bloqueada");
                }
            }
        }