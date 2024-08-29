document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Iniciar_carrera').addEventListener('click', function() {

        const caballoSeleccionado = parseInt(document.getElementById('seleccionar_caballo').value);
        const apuesta = parseFloat(document.getElementById('apuesta_corrida_caballos').value);
        const longitudPista = 100;
        let posiciones = [-10, -10, -10, -10, -10];
        let intervaloCarrera = setInterval(() => {

            // Corregir la variable de iteración de "i" a "caballo" en el primer bucle
            for (let caballo = 0; caballo < posiciones.length; caballo++) {
                posiciones[caballo] += Math.floor(Math.random() * 6);
                document.getElementById('caballo_' + (caballo + 1)).style.left = posiciones[caballo] + '%';
            }

            // Corregir la variable de iteración en el segundo bucle para que sea coherente
            for (let caballo = 0; caballo < posiciones.length; caballo++) {
                if (posiciones[caballo] >= longitudPista) {
                    clearInterval(intervaloCarrera);
                    let ganador = caballo + 1;
                    document.getElementById('resultado').innerHTML = `¡El caballo ${ganador} ha ganado!`;
                    if (caballoSeleccionado === ganador) {
                        let ganancias = apuesta * 50;
                        document.getElementById('resultado').innerHTML += `<br>¡Felicidades! Ganaste $${ganancias}!`;
                    } else {
                        document.getElementById('resultado').innerHTML += `<br>Lo siento, perdiste.`;
                    }
                    break;
                }
            }
        }, 50);
    });
});
