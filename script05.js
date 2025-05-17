// questao 05

function numeroPrimo(numero) {
    if (numero <= 1)
        return false;

    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return ("Número não primo");
        }
    }
    return ("Número primo");
}

console.log(numeroPrimo(2))
console.log(numeroPrimo(3))
console.log(numeroPrimo(4))
console.log(numeroPrimo(9))
console.log(numeroPrimo(13))
