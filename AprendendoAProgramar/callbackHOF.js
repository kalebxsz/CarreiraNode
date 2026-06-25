// HOF => higher-Order Function

function calcular(numero1, numero2, operacao){
    return operacao(numero1, numero2)
}

function soma(num1, num2){
    return num1 + num2
}

function divisao(num1, num2){
    return num1 / num2 
}


// ISSO É UMA CALLBACK
const resultadoSoma = calcular(3, 8, soma)
console.log('O resultado da soma:', resultadoSoma)

const resultadoDivisao = calcular(32, 8, divisao)
console.log('O resultado da divisao:', resultadoDivisao)