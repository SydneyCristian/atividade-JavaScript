// questao 07

function somarElementos(numero) {
    const valorInicial = 0;
    const resultado = numeros.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual
    }, valorInicial);
    return resultado;
}
const numeros = [3, 5, 7, 10];
let total = somarElementos(numeros);

console.log(total);