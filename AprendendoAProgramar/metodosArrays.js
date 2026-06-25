const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosPares = numeros.filter((numeros)=>{
    return numeros % 2 === 0
})
const numerosImpares = numeros.filter((numeros)=>{
    return numeros % 2 > 0
})
console.log('total de numeros: ', numeros)
console.log('total de numeros Pares: ', numerosPares)
console.log('total de numeros Impares: ', numerosImpares)

const numerosDobrados = numeros.map((numeros)=> {
    return numeros * 2
})

console.log('Números dobrados pelo MAP', numerosDobrados)