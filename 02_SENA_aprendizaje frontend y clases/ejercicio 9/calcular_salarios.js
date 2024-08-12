let sueldos = []; // Array para almacenar sueldos
const numEmpleados = 5; // Número de empleados

function calcular() {
    let salario = parseInt(document.getElementById("n1").value);
    
    if (isNaN(salario)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }
    
    // Llenar el array de sueldos solo si hay espacio disponible
    if (sueldos.length < numEmpleados) {
        sueldos.push(salario);
        document.getElementById("n1").value = ""; // Limpiar el campo de entrada
    } else {
        alert("El número máximo de salarios ya ha sido capturado.");
    }
}

function nomina() {
    if (sueldos.length === 0) {
        alert("No hay sueldos capturados para calcular la nómina.");
        return;
    }
    
    let total = 0;
    for (let y = 0; y < sueldos.length; y++) {
        total += sueldos[y];
    }

    document.getElementById("res").value = `Total Nómina: $${total}`;
    document.getElementById("informacion_total").value = `Aquí están los sueldos: ${sueldos.join(', ')}`;

}
