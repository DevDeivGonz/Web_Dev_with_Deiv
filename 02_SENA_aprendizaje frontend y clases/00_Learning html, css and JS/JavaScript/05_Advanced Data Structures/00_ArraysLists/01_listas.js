document.getElementById('imprimir_cada_lista').addEventListener('click', function() {
    // Obtener los valores de los inputs y dividir en listas usando coma como separador
    const lista_num_1 = document.getElementById('lista_num_1').value.split(' ').map(num => num.trim());
    const lista_num_2 = document.getElementById('lista_num_2').value.split(' ').map(num => num.trim());
    const lista_num_3 = document.getElementById('lista_num_3').value.split(' ').map(num => num.trim());

    // Crear una cadena de texto para cada lista con sus elementos separados por comas
    let imprimir_lista_1 = "Lista 1: " + lista_num_1.join(', ');
    let imprimir_lista_2 = "Lista 2: " + lista_num_2.join(', ');
    let imprimir_lista_3 = "Lista 3: " + lista_num_3.join(', ');

    // Unir los textos de las tres listas con saltos de línea
    let resultado_final = imprimir_lista_1 + "\n" + imprimir_lista_2  + "\n" +  imprimir_lista_3; 
    // Actualizar el contenido del textarea
    document.getElementById('imprimir_listas').value = resultado_final;
});


document.getElementById('imprimir_listas_productos').addEventListener('click', function() {
    // Obtener los valores de los inputs y dividir en listas usando coma como separador
    let lista_prod_1 = document.getElementById('lista_productos_1').value.split(',');
    let lista_prod_2 = document.getElementById('lista_productos_2').value.split(',');
    let lista_prod_3 = document.getElementById('lista_productos_3').value.split(',');

    // Concatenar las listas
    let lista_general_productos = lista_prod_1.concat(lista_prod_2).concat(lista_prod_3);

    // Limpiar espacios en blanco alrededor de cada producto
    let lista_general_productos_limpia = lista_general_productos.map(producto => producto.trim());

    // Crear una cadena para mostrar la lista general en el textarea
    let imprimir_lista_general = "Esta es la lista general con todos los productos en el inventario:\n"
    + lista_general_productos_limpia.join(', ');

    // Actualizar el contenido del textarea
    document.getElementById('imprimir_3_listas_productos_en_1').value = imprimir_lista_general;
});

// carrera de 5 caballos, logitud de 100, el incremento es de numeros aleatorios del 0 al 5, al principio 
// de la carrera debe seleccionar el caballo  un valor a apostar, al final si su caballo gana, multiplica la apuesta x50
