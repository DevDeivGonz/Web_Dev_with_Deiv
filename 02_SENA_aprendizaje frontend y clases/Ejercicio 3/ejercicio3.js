let intentos = 0;
const maxIntentos = 5;

function verificar_apuesta() {
    let dado_1 = parseInt(document.getElementById("dado_1").value);
    let dado_2 = parseInt(document.getElementById("dado_2").value);

    if (intentos < maxIntentos) {
        intentos++;

        if (dado_1 + dado_2 === 7) {
            console.log("Felicidades, ha ganado 5 puntos y $10000.");
        } else if (dado_1 % 2 === 0 && dado_2 % 2 === 0) {
            console.log("Felicidades, ha ganado 3 puntos y ha ganado $5000.");
        } else if (dado_1 + dado_2 < 7) {
            console.log(`Lo siento, ha perdido y le quedan ${maxIntentos - intentos} intentos.`);
        }

    } else {
        console.log("Lo siento, ha alcanzado el número máximo de intentos.");
    }
}
