document.getElementById('imprimir_cada_lista').addEventListener('click', function() {

    // aqui se obtiene los velores de los inputs y se pasan a listas mediante los DOM
    const lista_num_1 = document.getElementById('lista_num_1').value.split(',');
    const lista_num_2 = document.getElementById('lista_num_2').value.split(',');
    // .value.split(','): Obtiene el valor del input y lo divide en un array utilizando la coma como separador
    const lista_num_3 = document.getElementById('lista_num_3').value.split(',');

    // trim.() Limpia espacios en blanco alrededor de cada número o elementos de una lista
    // .map() toda todos los elementos de una lista y en otra hace lo que se le asigne con todos 
    // ..... los elementos sin que afecte a la principal
    const lista_num_1_limpia = lista_num_1.map(num => num.trim());
    const lista_num_2_limpia = lista_num_2.map(num => num.trim());
    const lista_num_3_limpia = lista_num_3.map(num => num.trim());

    let imprimir_cada_lista = "Lista 1: "+lista_num_1_limpia.join(' ,')+
                              "\nLista 2: "+lista_num_2_limpia.join(' ,')+
                              "\nLista 3: "+lista_num_3_limpia.join(' ,');

    document.getElementById('imprimir_listas').textContent = imprimir_cada_lista;

});

document.getElementById('imprimir_listas_productos').addEventListener('click', function() {
    let lista_prod_1 = document.getElementById('lista_productos_1').value.split(' ,');
    let lista_prod_2 = document.getElementById('lista_productos_2').value.split(' ,');
    let lista_prod_3 = document.getElementById('lista_productos_3').value.split(' ,');

    // Concatenar las listas y almacenar el resultado en una nueva variable
    // .concant() es lo mismo que extend() en Python
    let lista_general_productos = lista_prod_1.concat(lista_prod_2).concat(lista_prod_3);

    let lista_general_productos_limpia = lista_general_productos.map(producto => producto.trim());

    let imprimir_lista_general = "Esta es la lista general con todos los productos en el inventario:\n"
    +lista_general_productos_limpia.join(', ');

    document.getElementById('imprimir_3_listas_productos_en_1').textContent = imprimir_lista_general;


});