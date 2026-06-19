const idade = 18
const maiorIdade = idade >=18
const possuiCnh = true

const podeDirigir = maiorIdade && possuiCnh

console.log('Pode Dirigir? ', podeDirigir)

const podeViajarSozinha = maiorIdade || possuiCnh

console.log('pode viajar sozinha? ', podeViajarSozinha)


const temCnh = !possuiCnh
console.log('tem cnh? ', temCnh )