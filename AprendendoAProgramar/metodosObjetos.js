const pessoa = {
    nome: 'kaleb',
    idade: 23, 
    pets: ['Fred'],
   nacionalidade: 'Brasileira' 
}

for (const chave in pessoa){
    console.log(chave)
}

const chaves = Object.keys(pessoa)

const valores = Object.values(pessoa)

const entradas = Object.entries(pessoa)


console.log('Chaves: ', chaves)
console.log('Valores: ', valores)
console.log('Entradas (Chaves/valor):', entradas)