const agora = new Date()

console.log(agora)

console.log('Ano:',agora.getFullYear())
console.log('Mes:',agora.getMonth())
console.log('Dia:',agora.getDay())
console.log('Hora:',agora.getHours())
console.log('Minutos:',agora.getMinutes())

const nascimento = new Date('2002-11-03T00:00:00.000Z')

console.log(nascimento);
nascimento.toLocaleDateString('pt-BR')

console.log('Data formatada para (PT-BR)', nascimento.toLocaleDateString('pt-BR'));