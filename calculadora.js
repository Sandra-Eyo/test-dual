class Calculadora {
    sumar(a, b) {
        return a+b
    }

    restar(a, b) {
        return a-b
    }

    multiplicar(a, b) {
        return a*b
    }

    dividir(a, b) {
        return a/b
    }

    potencia(base, exponente) {
        return Math.pow(base, exponente)
    }

    raizCuadrada(a) {
        return Math.sqrt(a)
    }
}

module.exports = Calculadora;

