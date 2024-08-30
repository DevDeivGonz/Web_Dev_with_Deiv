class Usuarios {
    constructor() {
        this.nombres_y_apellidos = null;
        this.genero = null;
        this.edad = null;
    }

    crear_usuario() {
        this.nombres_y_apellidos = document.getElementById('nombre_usuario').value;
        this.edad = parseInt(document.getElementById('edad_usuario').value);
        this.genero = document.getElementById('generios_usuarios').value;
    }

    imprimir_datos() {
        return `Nombre: ${this.nombres_y_apellidos}\nGénero: ${this.genero}\nEdad: ${this.edad}`;
    }
}

class Administrador extends Usuarios {
    verificar_bonificacion() {
        if (this.edad >= 30 && this.genero === "mujer") {
            return "Tiene bonificación.";
        } else {
            return "No tiene bonificación.";
        }
    }
}

class Cliente extends Usuarios {
    constructor() {
        super();
        this.cupo_compra = 0;
    }

    establecer_cupo_compra(cupo) {
        this.cupo_compra = cupo;
    }

    verificar_promocion() {
        if (this.genero === "mujer" && this.cupo_compra > 100000) {
            return "Aplica a promoción.";
        } else {
            return "No aplica a promoción.";
        }
    }
}

window.onload = function() {
    document.getElementById('suministrar_info').addEventListener('click', function() {
        const tipo_usuario = document.getElementById('tipo_usuario').value;
        let usuario;

        if (tipo_usuario === "perfil_admin") {
            usuario = new Administrador();
            usuario.crear_usuario();
            const resultado = usuario.imprimir_datos() + "\n" + usuario.verificar_bonificacion();
            document.getElementById('mostrar_todo_en_lista').value = resultado;

        } else if (tipo_usuario === "perfil_cliente") {
            usuario = new Cliente();
            usuario.crear_usuario();
            const cupo = parseInt(document.getElementById('precio_cupon').value);
            usuario.establecer_cupo_compra(cupo);
            const resultado = usuario.imprimir_datos() + "\n" + usuario.verificar_promocion();
            document.getElementById('mostrar_todo_en_lista').value = resultado;
        }
    });
}
