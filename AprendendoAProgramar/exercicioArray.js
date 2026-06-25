// 1. Lista de nomes
// Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.

const lista = ['Kaleb', 'Samuel', 'Isaac', 'Daniel', 'Ezequiel']

for (let i = 0; i < lista.length; i++){
    console.log(lista[i])
}

// 2. Adicionar e remover itens
// Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.

const frutas = ['pessogo', 'amora', 'banana', 'laranja']
console.log('frutas: ',frutas)

frutas.push('melancia')
console.log('inserindo uma fruta', frutas)

frutas.shift(0)
console.log('removendo a fruta no indice 0', frutas)


// 3. Contar itens do array
// Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.

const cidades = ['Porto Alegre', 'Rio de Janeiro', 'Sao paulo', 'Santa Catarina']

console.log('Número total de cidades', cidades.length)

// 4. Somar todos os números
// Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.

const numeros = [1, 2, 2, 4,5, 3, 4, 5, 6, 7, 8, 9, 10]
let valorTotal = 0

for (let i = 0; i < numeros.length; i++){
    valorTotal += numeros[i]
}
console.log("Soma total: ", valorTotal);

