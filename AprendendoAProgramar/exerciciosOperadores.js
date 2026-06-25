console.log('====================')
console.log('1. Verificação de maioridade')
console.log('====================')
// Crie uma variável idade.
// Exiba no console o resultado da expressão que verifica se a idade é maior ou igual a 18.

// 📌 Dica: o resultado deve ser true ou false.
let idade = 18
let emaior = idade >= 18

console.log(emaior)

console.log('====================')
console.log('2. Situação do aluno')
console.log('====================')
// Crie duas variáveis com notas de um aluno.
// Calcule a média e exiba no console o resultado da expressão que verifica se a média é maior ou igual a 7.

let primeiraNota = 8
let segundaNota = 7

let media = (primeiraNota + segundaNota) / 2
console.log('A média do aluno foi de ', media)

console.log('====================')
console.log('3. Simulação de troco')
console.log('====================')
// Crie uma variável valorCompra com 35.90 e valorPago com 50. Calcule e mostre o troco a ser devolvido.
let valorCompra = 35.90
let valorPago = 50

console.log('Valor da compra: R$', valorCompra);
console.log('Valor pago: R$', valorPago);

let troco = valorPago - valorCompra
console.log('Troco: R$', troco.toFixed(2))


console.log('====================')
console.log('4. Validação de senha')
console.log('====================')
// Crie duas variáveis com senhas digitadas em momentos diferentes.
// Exiba no console o resultado da comparação que verifica se as senhas são iguais.
let primeiraSenha = 'Kaleb153$'
console.log('Essa e a sua senha:', primeiraSenha)
let segundaSenha = 'Kaleb153$'

console.log('Essa e a sua senha:', segundaSenha)
let senha = primeiraSenha === segundaSenha
console.log('Suas senhas são iguais? ', senha)

console.log('====================')
console.log('5. Controle de faltas')
console.log('====================')
// Crie as variáveis totalAulas e faltas.
// Calcule o limite de faltas permitido (25% do total) e exiba no console o resultado da expressão que verifica se as faltas ultrapassam esse limite.

let totalAulas = 80
let totalFaltas = 25

let limiteFaltas = totalAulas * 0.25

console.log(totalFaltas > limiteFaltas)