function captura {
    var nota1 = parseInt(document.getElementById("numero1").value);
    var nota2 = parseInt(document.getElementById("numero2").value);
    var nota3 = parseInt(document.getElementById("numero3").value);
    let promedio = nota1 + nota2 + nota3 / 3;

    if ( promedio >= 7)
        var texto = "Ha pasado";
    else {
        if (promedio > 4)
            var texto = "Muy regular";
    }
    document.getElementById("nc").value = texto;

}