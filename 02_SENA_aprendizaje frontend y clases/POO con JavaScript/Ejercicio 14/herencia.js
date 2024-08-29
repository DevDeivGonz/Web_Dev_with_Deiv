class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir() {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\n`;
    }
}

class Empleado extends Persona {
    constructor(nombre, edad, sueldo) {
        super(nombre, edad);
        this.sueldo = sueldo;
    }

    imprimir() {
        return super.imprimir() + `Sueldo: ${this.sueldo}\n`;
    }

    pagaImpuestos() {
        if (this.sueldo < 5000) {
            return `${this.nombre} no debe pagar impuestos.\n`;
        } else {
            return `${this.nombre} debe pagar impuestos.\n`;
        }
    }
}

function procesar() {
    let nombre = document.getElementById('nombre_user').value;
    let edad = parseInt(document.getElementById('user_edad').value);

    const empleado1 = new Empleado(nombre, edad, 7000);
    document.getElementById('mostrar_clases').value = empleado1.imprimir() + empleado1.pagaImpuestos();
}

