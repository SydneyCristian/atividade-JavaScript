// questao 04

function resultadoNotas(alunos) {
    const resultado = alunos.map(aluno => {
        aluno.status = aluno.nota >= 7 ? "Aprovado" : "Reprovado"
        return aluno;
    });
    return resultado;
}

const alunos = [
    { nome: 'Sydney', nota: 8 },
    { nome: 'Diogo', nota: 7 },
    { nome: 'Raimundo', nota: 6 }
]
const notas = resultadoNotas(alunos);
console.log(notas);
