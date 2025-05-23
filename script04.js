// questao 04

function resultadoNotas(alunos) {
    const resultado = alunos.map(aluno => {
        aluno.status = aluno.nota >= 7 ? "Aprovado" : "Reprovado"
        return aluno;
    });
    return resultado;
}

const alunos = [
    { nome: 'Sydney', nota: 8, status: "" },
    { nome: 'Diogo', nota: 7, status: "" },
    { nome: 'Raimundo', nota: 6, status: "" }
]
const notas = resultadoNotas(alunos);
console.log(notas);
