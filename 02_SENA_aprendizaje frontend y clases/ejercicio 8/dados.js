let intentos = 0;
const maxIntentos = 5;
let puntos = 0;
let dinero = 0;

function lanzar_dados() {
    let dado_1 = Math.floor(Math.random() * 12) + 1; // Genera un número entre 1 y 12
    let dado_2 = Math.floor(Math.random() * 12) + 1; // Genera un número entre 1 y 12

    document.getElementById("dado_1").value = dado_1;
    document.getElementById("dado_2").value = dado_2;

    verificar_apuesta(dado_1, dado_2);
}

function verificar_apuesta(dado_1, dado_2) {
    if (intentos < maxIntentos) {
        intentos++;
        
        let mensajeResultado = "";
        let mensajePremios = "";

        if (dado_1 + dado_2 === 7) {
            puntos += 5;
            dinero += 10000;
            mensajeResultado = "Felicidades, ha ganado 5 puntos y $10000.";
        } else if (dado_1 === dado_2 ) {
            puntos += 3;
            dinero += 5000;
            mensajeResultado = "Felicidades, ha ganado 3 puntos y ha ganado $5000.";
        } else if (dado_1 + dado_2 < 7) {
            dinero -= 1000; // Penalización por intento fallido
            mensajeResultado = `Lo siento, ha perdido y le quedan ${maxIntentos - intentos} intentos.`;
        }

        // Mostrar el resultado y los premios
        mensajePremios = `Sus puntos totales son: ${puntos}\nSu dinero total es: $${dinero}`;
        
        document.getElementById("resultado").value = mensajeResultado;
        document.getElementById("premios").value = mensajePremios;

    } else {
        document.getElementById("resultado").value = "Lo siento, ha alcanzado el número máximo de intentos.";
    }
}
