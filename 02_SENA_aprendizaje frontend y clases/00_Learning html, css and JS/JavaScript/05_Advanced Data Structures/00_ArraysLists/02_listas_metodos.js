function imprimir_lista() {
    let lista_elementos = document.getElementById('lista_inputs').value.split(' ').map(elemento => elemento.trim());
    document.getElementById('mostrar_lista').value = 
 "Aqui esta la lista ingresada: "+ lista_elementos;
}


function ejecutar_lista_numeros_multiplicados() // aqui en esta funcion muestro como usar los  MAP, MAP no modifica las listas originales,
                                                // es igual a las List of Comprehension
    {
    let lista_nuevos_numeros = document.getElementById('numeros_multiplicados').value
    .split(' ')
    .map(elemento => parseInt(elemento.trim())); // es igual que un for, se pone una variable y esta misma hace que lo demas se ejequte dentro de ()
    let lista_num_multiplicados = lista_nuevos_numeros.map(num => num * num); // num => num * num es lo mismo que for num in numbers, 
                                                                            // solo que num se puede usar dos veces, pese que ya esta declarado 
                                                                            // se puede usar en los parentesis pero con MAO()

    document.getElementById('resultados_multiplicados').value = 
    "Aqui estan los numeros indroducidos :"+ lista_nuevos_numeros+
    "\n\ny aqui estan los numeros multiplicados entre si: "+ lista_num_multiplicados.join(', '); // join separa los elementos por ,
    }


function ejecutar_lista_para_filtler() {
    let lista_filtler = document.getElementById('lista_para_filtler').value
    .split(' ')
    .map(cada_elemento_de_la_lista => parseInt(cada_elemento_de_la_lista.trim()));

    let filtrar_num_positivos = lista_filtler.filter(cada_elemento => cada_elemento > 0);
    let filtrar_num_negativos = lista_filtler.filter(cada_elemento => cada_elemento < 0);


    document.getElementById('imprimir_lista_para_filtler').value =
    "Aqui esta los numeros ingresados"+lista_filtler+
    "\n\nAqui estan los numeros positivos de la lista: "
    +filtrar_num_positivos+ 
    "\n\nAqui estan los numeros negativos de los numeros ingresados"+
    filtrar_num_negativos;
    
}


function ejecutar_lista_para_forEach() {
    // Obtener el valor del input y dividirlo en un array
    let valores_ingresados = document.getElementById('lista_para_forEach').value;
    let lista_ingresada = valores_ingresados.split(' ')
        .map(cada_valor => parseInt(cada_valor.trim()))  // Corregido a cada_valor
// El método trim() en JS se utiliza para eliminar los espacios en blanco al principio y al final de una cadena de texto.
        .filter(cada_valor => !isNaN(cada_valor));  // Filtra valores no numéricos

    // Inicializar un array para los resultados
    let resultados = [];

    // Procesar cada elemento usando forEach
    lista_ingresada.forEach(cada_valor => {
        resultados.push(`Este es el número: ${cada_valor}`);
    });

    // Unir los resultados y mostrar en el textarea
    document.getElementById('imprimir_lista_para_forEach').textContent = resultados.join('\n');
}


window.onload = function(){
    document.getElementById("imprimir_lista").addEventListener("click", imprimir_lista); // llama la fincion y la ejecuta por su ID en HTML
    document.getElementById('ejecutar_lista_numeros_multiplicados').addEventListener("click", ejecutar_lista_numeros_multiplicados);
    document.getElementById('ejecutar_lista_para_filtler').addEventListener('click', ejecutar_lista_para_filtler);
    document.getElementById('ejecutar_lista_para_forEach').addEventListener('click', ejecutar_lista_para_forEach);
}


