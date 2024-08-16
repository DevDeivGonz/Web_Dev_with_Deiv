let lista_numeros_1_a_100 = [];

function imprimir_numeros_1_a_100() {
    lista_numeros_1_a_100 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1);
    let textarea = document.getElementById("ver_numeros_1_al_100");
    textarea.value = lista_numeros_1_a_100.join(",");
    console.log(lista_numeros_1_a_100);
}

function ver_m5() {
    let m5_numeros = lista_numeros_1_a_100.filter(numero => numero % 5 === 0);
    let textarea_2 = document.getElementById("ver_multiplos_de5");
    textarea_2.value = m5_numeros.join(",");
    console.log(m5_numeros);
}