// questao 03

function ordenarFrutas(frutas) {
    const frutasOrdenadasPorNome = frutas.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1

        return 0;
    })
    return frutasOrdenadasPorNome;
}

const frutas = ["Maçã", "Banana", "Uva", "Pera", "Laranja"];
const ordemAlfabetica = ordenarFrutas(frutas);

console.log(ordemAlfabetica);