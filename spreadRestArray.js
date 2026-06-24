const frutas = ['Amora', 'Goiaba', 'Ameixa', 'Bergamota']

const maisFrutas = ['Melancia', 'Melão', 'Abacate']

const clone = [...frutas]

const todasAsFrutas = [...frutas, ...maisFrutas]

frutas.push('Laranja')

console.log(frutas)
console.log(maisFrutas)
console.log(clone)
console.log(todasAsFrutas)

const [primeira, segunda, ...restante] = todasAsFrutas

console.log(primeira)
console.log(segunda)
console.log(restante)