function calcular() {
    var Requerimiento = document.getElementById("Requerimiento").value;
    var desde = parseInt(document.getElementById("num1").value);
    var hasta = parseInt(document.getElementById("desde").value);

    switch (Requerimiento) {
        case "1":
            numeros_secuenciales(desde, hasta);
            document.getElementById("res").value = "uno";
            break;
        case "2":
            document.getElementById("res").value = "dos";
            break;
        case "3":
            document.getElementById("res").value = "tres";
            break;
        case "4":
            document.getElementById("res").value = "cuatro";
            break;
        default:
            document.getElementById("res").value = "Opción no válida";
    }
}

function numeros_secuenciales(desde, hasta) {
    let result = "";
    while (desde <= hasta) {
        resultado += desde + " - ";
        desde++;
    }
    console.log(resultado);
    alert(result);
}

function Tabla_Multiplicacion_por_num() {
    var Opcion_menu = document.getElementById("Opcion_menu").value;
    var num_multiplo = parseInt(document.getElementById("num_multiplo").value);
    var num_hasta = parseInt(document.getElementById("num_hasta").value);

    switch (Opcion_menu) {
        case "1":
            Tabla_Multiplicar(num_multiplo, num_hasta);
            break;
        case "2":
            document.getElementById("resultado").value = "dos";
            break;
        case "3":
            document.getElementById("resultado").value = "tres";
            break;
        case "4":
            document.getElementById("resultado").value = "cuatro";
            break;
        default:
            document.getElementById("resultado").value = "Opción no válida";
    }
}

function Tabla_Multiplicar(num_multiplo, num_hasta) {
    let result = "";
    let x = 1;
    while (x <= num_hasta) {
        result += num_multiplo + " x " + x + " = " + (num_multiplo * x) + "\n";
        x++;
    }
    console.log(result);
    document.getElementById("resultado").value = result;
}
