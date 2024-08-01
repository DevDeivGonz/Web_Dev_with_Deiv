function precioTotal() {
    var nombreProducto = document.getElementById("nombre_producto").value;
    var cantidadProducto = document.getElementById("cantidad_producto").value;
    var precioProducto = document.getElementById("precio_producto").value;
    var iva = 0.19;

    // Convierte las entradas a números decimales
    var precioTotal = parseFloat(precioProducto) * parseFloat(cantidadProducto) + (parseFloat(precioProducto) * parseFloat(cantidadProducto) * iva);
    
    // Muestra el resultado en el campo de entrada y en una alerta
    document.getElementById("resultado").value = precioTotal.toFixed(2);
    alert("El precio total del producto " + nombreProducto + " es: $" + precioTotal.toFixed(2));
}

