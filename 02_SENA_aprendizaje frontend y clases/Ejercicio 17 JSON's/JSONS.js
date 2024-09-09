window.onload = function() {
    document.getElementById("pasar_info_a_JSON").addEventListener("click", function() {
        const lista_para_mostrar = []; // Crear un array vacío para almacenar la información

        const nombre = document.getElementById("nombre_usuario").value;
        const edad = document.getElementById("edad_usuario").value;
        const grado = document.getElementById("grado_usuario").value;
        const materias = document.getElementById("materias_usuario").value;
        // Agregar el objeto JSON al array

        const archivo_JSON = {
            "nombre": nombre,
            "edad": edad,
            "grado": grado,
            "materias": materias
        }

        lista_para_mostrar.push(archivo_JSON);

        let pasar_a_texto = lista_para_mostrar.map(cada_palabra => 
            "Nombre del usuario: "+nombre+
            "\nEdad del usuario: "+edad+
            "\nGrado del usuario: "+grado+
            "\nMaterias del usuario: "+materias
        ).join("\n\n");


        // Convertir el array a una cadena JSON y mostrarla en el textarea
        document.getElementById("mostrar_info").value = pasar_a_texto;
    });
}
