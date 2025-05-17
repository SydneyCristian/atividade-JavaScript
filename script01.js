// questao 01

function verificarIdade(idade) {
    if (idade < 18) {
        console.log("Menor de idade")
        return false;
    } else {
        console.log("Maior de idade")
        return true;
    }
}

console.log(verificarIdade(17))
console.log(verificarIdade(19))     
