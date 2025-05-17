// questao 06

function calcularQuadrado(numeros) {
    const resultado = numeros.map(numero => {
        const valor = numero > 10 ? numero ** 2 : numero;
        return valor;
    });
    return resultado;
}

const novoArray = [5, 20, 10, 12, 6, 2];
const quadrado = calcularQuadrado(novoArray);

console.log(quadrado);  