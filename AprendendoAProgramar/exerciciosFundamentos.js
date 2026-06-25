// 1. Destructuring em objetos
// Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.
const curriculo ={
    nome: 'Kaleb',
    idade: 23,
    email: 'kaleb@gmail.com'
}

console.log(curriculo)
const {nome, idade, email} = curriculo
console.log(nome)
console.log(idade)
console.log(email)


// 2. Destructuring em arrays
// Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.
let linguagens = ['java', 'C++', 'JavaScript']
let [ling1, ling2, ling3] = linguagens
console.log(ling1)
console.log(ling2)
console.log(ling3)


// 3. Rest operator em função
// Crie uma função que receba vários números como parâmetros usando o operador rest (...).
// Utilize um laço for para somar todos os valores recebidos e retorne o total.

function todosNumeros(...numeros){
    let resultado = 0
    for(let i = 0; i < numeros.length; i++){
        resultado += numeros[i]
    }
    return resultado
}
console.log(todosNumeros(12, 10, 2, 10, 38, 89))

// 4. Spread operator com arrays
// Crie dois arrays de frutas e combine-os usando o operador spread.
const frutas = ['Amora', 'Goiaba', 'Ameixa', 'Bergamota']

const maisFrutas = ['Melancia', 'Melão', 'Abacate']

const todasAsFrutas = [...frutas, ...maisFrutas]
console.log(todasAsFrutas)
// 5. Spread operator com objetos
// Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.

let pessoa1 = {
    nome: 'Kaleb'
}

let pessoa2 = {
    idade: 23
}

let pessoaReal = {...pessoa1, ...pessoa2}

console.log(pessoaReal)