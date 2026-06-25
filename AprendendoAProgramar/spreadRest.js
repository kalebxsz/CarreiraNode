let camila1 = {
    nome: 'Camila',
    idade: 29, 
    profissao: 'Desenvolvedora'
}
console.log('Camila 1:', camila1)


const camila2 = {
    ...camila1
}
camila2.idade = 30
console.log('Camila2:', camila2)

camila1 = {
    ...camila2,
    profissao: 'Desenvolvedora Senior',
    temCnh: true
}

console.log('Nova camila 1:', camila1)

