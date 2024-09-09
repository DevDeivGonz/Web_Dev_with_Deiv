document.addEventListener("DOMContentLoaded", function () {
    // Referencias a los elementos del DOM
    const inputNumero = document.getElementById("numero_input_usuario");
    const botonesOperadores = document.querySelectorAll(".caja_botones_operadores_y_resultado button");
    const areaProceso = document.getElementById("proceso_operacion_matematica");
    const areaResultado = document.getElementById("resultado_operacion_matematica");
    const btnTotal = document.getElementById("btn_total");

    let operacionActual = ""; // Aquí se almacenará la operación en proceso

    // Añadir eventos a todos los botones operadores
    botonesOperadores.forEach(function (boton) {
        boton.addEventListener("click", function () {
            const valorBoton = boton.textContent;

            // Capturar el valor del input y añadirlo a la operación actual si no está vacío
            if (inputNumero.value.trim() !== "") {
                operacionActual += inputNumero.value;
                inputNumero.value = ""; // Limpiar el input después de añadir el valor
            }

            if (valorBoton === "DEL ALL") {
                operacionActual = "";
                areaProceso.value = "";
                areaResultado.value = "";
            } else if (valorBoton === "Del <---") {
                operacionActual = operacionActual.slice(0, -1);
                areaProceso.value = operacionActual;
            } else {
                operacionActual += valorBoton;
                areaProceso.value = operacionActual;
            }
        });
    });

    // Manejo del botón TOTAL para calcular el resultado
    btnTotal.addEventListener("click", function () {
        try {
            // Reemplazar símbolos y evaluar la expresión
            const expresion = operacionActual.replace("x", "*").replace("log", "Math.log");
            const resultado = eval(expresion);
            areaResultado.value = resultado;
        } catch (error) {
            areaResultado.value = "Error";
        }
    });

    // Manejo del botón "Pasar a decimal" si es necesario
    document.getElementById("btn_decimal").addEventListener("click", function () {
        if (inputNumero.value.trim() !== "") {
            operacionActual += inputNumero.value;
            inputNumero.value = ""; // Limpiar el input después de añadir el valor
            areaProceso.value = operacionActual;
        }
    });
});
