// IF ELSE 

// CRIAR UMA CONDIÇÃO PARA SOMAR OU MULTIPLICAR DOIS NUMEROS 

let num1 = 10
let num2 = 5

let operacao = 'divisão'

if (operacao === 'soma') {
    console.log(num1 + num2)
} else if (operacao === 'multiplicacao') {
    console.log(num1 * num2)
} else {
    console.log('Nenhuma operação identificada')
}


console.log('==============================================')
// Localizar o nivel de bonus de acordo com a faixa salarial
// ex: $ 11000 e acima : 3% de bônus
// ex: $ 10999 e $7000 : 5% de bônus
// ex: $ 6999 e $4000 : 7% de bônus
// ex: $ 3999 e abaixo : 9% de bônus

const salario = 2000

if (salario >= 1100) {
    console.log('3% de bônus')
} else if (salario < 11000 && salario >= 7000) {
    console.log('5% de bônus')
} else if (salario < 7000 && salario >= 4000) {
    console.log('5% de bônus')
} else {
    console.log('9% de bônus')
}

console.log('==============================================')
// verificar se um ano é bissexto quando:
// Um ano é bissexto quando: 
// deve ser divisivel por 4 mas não divisivel por 100
// OU 
// deve ser divisivel por 100 e por 400
const ano = 2004

//    primeira      e      segunda       ou   terceira   condição
if (((ano % 4 === 0) && (ano % 100 !== 0))|| ano % 400 === 0){
    console.log('Esse ano é Bissexto')
}else {
    console.log('Ano não é bissexto')
}
console.log('==============================================')
// OPERADOR TERNARIO
const nome = 'Kaleb'
const saudacao = nome ? `Olá, ${nome}`: 'Olá, Pessoa'
console.log(saudacao) 