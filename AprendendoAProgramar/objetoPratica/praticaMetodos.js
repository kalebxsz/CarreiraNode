const user = {
    nome: 'Kaleb',
    nascimento: '2002-03-10',
    cpf: '00011155599',
    pontuacao: 10000,
    trofeus: ['Artilheiro', 'Campeao']
    
}
// Adicione ao OBJ um Método para calcular a idade da pessoa e retornar o valor no terminal como string

user.calculaIdade = function calculaIdade() {
    const anoNasc = parseInt(this.nascimento.slice(0, 4))
    const idade = new Date().getFullYear() - anoNasc;

    console.log(`a idade é ${idade}`)
}

user.calculaIdade()