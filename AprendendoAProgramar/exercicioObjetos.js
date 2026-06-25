// 1. Criando um objeto pessoal
// Crie um objeto com seu nome, idade e profissão.

const pessoa = {
    nome: 'Kaleb',
    idade: 23,
    profissao: 'Desenvolvedor'
}
console.log(pessoa)

// 2. Acessando propriedades
// Acesse e exiba o valor da propriedade "nome" no console.
console.log(pessoa.nome)

// 3. Atualizando valores
// Modifique a propriedade "idade" com um novo valor.
pessoa.idade = 25

console.log(pessoa)
console.log(pessoa.idade)

// 4. Adicionando uma nova propriedade
// Adicione ao objeto uma nova propriedade chamada "cidade".

pessoa.cidade = 'Porto Alegre'

console.log(pessoa)

// 5. Função com objeto
// Crie uma função que receba um objeto pessoa contendo as propriedades nome, idade e profissao.
// A função deve retornar uma frase montada com concatenação de strings, exibindo os dados da pessoa.

function apresentacao(pessoa){
    return 'Meu nome é' +  ' ' + pessoa.nome + ', eu tenho' + ' ' +pessoa.idade + ' ' + 'e sou um' + ' ' + pessoa.profissao 
}


console.log(apresentacao(pessoa))