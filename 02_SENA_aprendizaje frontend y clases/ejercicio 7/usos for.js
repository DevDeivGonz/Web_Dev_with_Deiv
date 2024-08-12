function validar_resultado()

{
    const input_list_numbers = document.querySelectorAll("input");
    let suma = 0;

    input_list_numbers.forEach((input) => {
        const valor = parseInt(input.value);
        if (!isNaN(valor) && valor >= 5) {
            suma += valor;
        }
    });

    console.log(suma);
    document.getElementById("resultado").value = suma;

}
