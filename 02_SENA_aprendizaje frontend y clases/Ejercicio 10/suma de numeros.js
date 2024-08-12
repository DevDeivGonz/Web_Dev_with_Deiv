let numeros = []; // Array para almacenar los números ingresados
const maxNumeros = 8; // Número máximo de elementos

// Función para agregar un número al array
function agregarNumero() {
    let numero = parseInt(document.getElementById("numero_por_sumar").value);

    if (isNaN(numero) || numero < 1 || numero > 100) {
        alert("Por favor, ingrese un número válido entre 1 y 100.");
        return;
    }

    if (numeros.length < maxNumeros) {
        numeros.push(numero);
        document.getElementById("numero_por_sumar").value = ""; // Limpiar el campo de entrada
    } else {
        alert("Se ha alcanzado el número máximo de elementos.");
    }
}

// Función para mostrar los resultados
function mostrarResultados() {
    if (numeros.length === 0) {
        alert("No hay números ingresados.");
        return;
    }

    let sumaMayores50 = 0;
    let cantidadMenores35 = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 50) {
            sumaMayores50 += numeros[i];
        }
        if (numeros[i] < 35) {
            cantidadMenores35++;
        }
    }

    document.getElementById("resultado_sumas").value = `
        Suma de números mayores a 50: ${sumaMayores50}
        Cantidad de números menores a 35: ${cantidadMenores35}
        Números ingresados: ${numeros.join(', ')}
    `;
}
