class Valores_ingresados_usuario {
    constructor() {
        this.valor_1 = 0;
        this.valor_2 = 0;
        this.resultado = 0;
    }

    ingresar_valores() {
        this.valor_1 = parseInt(document.getElementById('num1').value);
        this.valor_2 = parseInt(document.getElementById('num2').value);
    }
}

class Operacion_matematica extends Valores_ingresados_usuario {
    sumar() {
        this.ingresar_valores();  // Obtener los valores actualizados
        this.resultado = this.valor_1 + this.valor_2;
        document.getElementById('resultados_totales').textContent = 
            "La suma de " + this.valor_1 + " y " + this.valor_2 + " es: " + this.resultado;
    }

    restar() {
        this.ingresar_valores();  // Obtener los valores actualizados
        this.resultado = this.valor_1 - this.valor_2;
        document.getElementById('resultados_totales').textContent = 
            "La resta de " + this.valor_1 + " y " + this.valor_2 + " es: " + this.resultado;
    }

    multiplicar() {
        this.ingresar_valores();  // Obtener los valores actualizados
        this.resultado = this.valor_1 * this.valor_2;
        document.getElementById('resultados_totales').textContent = 
            "La multiplicacion de " + this.valor_1 + " y " + this.valor_2 + " es: " + this.resultado;
    }

    division() {
        if (this.valor_1 && this.valor_2 != 0) {
            this.ingresar_valores();  // Obtener los valores actualizados
            this.resultado = this.valor_1 + this.valor_2;
            document.getElementById('resultados_totales').textContent = 
            "La suma de " + this.valor_1 + " y " + this.valor_2 + " es: " + this.resultado;
        }
        else {
            alert('No se puede dividir por cero.');
        }
        
    }

    potenciar() {
        this.ingresar_valores();
        this.resultado = Math.pow(this.valor_1, this.valor_2);
        document.getElementById('resultados_totales').textContent =
        "La potencia de " + this.valor_1 + " elevada a la " + this.valor_2 + " es: " + this.resultado;
    }

    limpiar() {
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('resultados_totales').textContent = '';
    }

    logaritmo() {
        this.ingresar_valores();
        if (this.valor_1 > 0) {
            this.resultado = Math.log(this.valor_1) / Math.log(this.valor_2);
            document.getElementById('resultados_totales').textContent = 
                "El logaritmo de " + this.valor_1 + " en base " + this.valor_2 + " es: " + this.resultado;
        } else {
            document.getElementById('resultados_totales').textContent = 
                "Error: El valor para logaritmo debe ser positivo.";
        }
    }
}




window.onload = function() {
    const operacion_matematica_hecha_por_usuario = new Operacion_matematica();

    document.getElementById('solicita_sumar').addEventListener('click', () => operacion_matematica_hecha_por_usuario.sumar());
    document.getElementById('solicita_restar').addEventListener('click', () => operacion_matematica_hecha_por_usuario.restar());
    document.getElementById('solicita_multiplicar').addEventListener('click', () => operacion_matematica_hecha_por_usuario.multiplicar());
    document.getElementById('solicita_dividir').addEventListener('click', () => operacion_matematica_hecha_por_usuario.dividir());
    document.getElementById('solicita_potencia').addEventListener('click', () => operacion_matematica_hecha_por_usuario.potenciar());
    document.getElementById('solicita_log').addEventListener('click', () => operacion_matematica_hecha_por_usuario.logaritmo());
    document.getElementById('solicita_limpiar_todo').addEventListener('click', () => operacion_matematica_hecha_por_usuario.limpiar());
}