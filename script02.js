// questao 02

function dobrarNumerosPares(numeros) {
    const pares = numeros.filter(n => n % 2 === 0);
    const dobrados = pares.map(n => n * 2);
    return dobrados;
}

const numeros = [1, 2, 3, 4, 5, 6];
console.log(dobrarNumerosPares(numeros))


