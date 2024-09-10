class Calculadora {
    #resultado;

    constructor() {
        this.#resultado = 0;
    }

    get resultado() {
        return this.#resultado;
    }

    set resultado() {
        if (typeof numero == 'string') {
            numero = numero - 0;
        }
        if (isNaN(numero) || typeof numero !== 'number') {
            throw new TypeError("O argumento deve ser um número válido")
        }
        this.#resultado = numero;
    }

    soma(numero) {
        if (typeof numero == 'string') {
            numero = numero - 0;
        }
        if (isNaN(numero) || typeof numero !== 'number') {
            throw new TypeError("O argumento deve ser um número válido")
        }
        this.#resultado += numero;
    }
}

module.exports = Calculadora;