function verificar_apuesta()
{
    let dado_1 = parseInt(document.getElementById("dado_1").value);
    let dado_2 = parseInt(document.getElementById("dado_2").value);
    let intentos = 0;
    const maxIntentos = 5;


if (intentos === maxIntentos) {
  intentos++;

} else {

    if (dado_1 + dado_2 >= 7) {
        console.log("Felicidades, ha ganado 5 puntos y $10000.")
    } else if ( dado_1 === dado_2) {
        console.log("Felicidades, ha ganado 3 puntos y ha ganado $5000 ")
    } else if ( dado_1 + dado_2 < 7 ) {
        console.log("Lo siento, ha perdido y le quedan ${intentos}")
    } else {}

}