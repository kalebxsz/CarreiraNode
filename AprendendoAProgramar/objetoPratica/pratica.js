const pessoa = {
    nome: 'Kaleb',
    nascimento: '2002-03-10',
    cpf: '00011155599',
    pontuacao: 10000,
    trofeus: ['Artilheiro', 'Campeao']
}

// imprima no terminal o nome da pessoa e um dos trofeus
console.log(pessoa.nome, pessoa.trofeus[0])

// exclua uma propriedade do objeto
delete pessoa.cpf
console.log(pessoa)

// criar uma função para iterar os trofeus 

function exibeTrofeu(listaTrofeus){
    for (const trofeu of listaTrofeus){
        console.log(`tem o troféu ${trofeu}`)
    }
}

exibeTrofeu(pessoa.trofeus)