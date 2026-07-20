// METODOS Objetos 
const cliente = {
    nome: 'Kaleb',
    nascimento: '2002-03-10',
    cpf: '00011155599',
    pontuacao: 10000,
    trofeus: ['Artilheiro', 'Campeao']
}

console.log(Object.keys(cliente))
// [ 'nome', 'nascimento', 'cpf', 'pontuacao', 'trofeus' ]
console.log(Object.values(cliente))
// [
//   'Kaleb',
//   '2002-03-10',
//   '00011155599',
//   10000,
//   [ 'Artilheiro', 'Campeao' ]
// ]

console.log(Object.entries(cliente))
// [
//   [ 'nome', 'Kaleb' ],
//   [ 'nascimento', '2002-03-10' ],
//   [ 'cpf', '00011155599' ],
//   [ 'pontuacao', 10000 ],
//   [ 'trofeus', [ 'Artilheiro', 'Campeao' ] ]
// ]
