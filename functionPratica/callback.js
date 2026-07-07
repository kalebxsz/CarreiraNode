// CallbacKS

//crir uma função que faça operações matematicas entre 2 valores (soma e multiplicação)

// função deve receber por paranmetro: operacao desejadam valor 1 e valor 2 

function soma(a, b){ return a + b}
function multiplica(a, b){ return a * b}

function calcula(fnOperacao, valorA, valorB){
    return fnOperacao(valorA, valorB)
}
console.log(calcula(soma, 5, 5));
console.log(calcula(multiplica, 5, 5));


const userID = '21564'

