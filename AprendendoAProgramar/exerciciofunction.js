// 1. Função de saudação
// Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.

function saudacao(nome){
    console.log('Olá! Seja Bem vindo(a)', nome)
}

saudacao('Kaleb')


// 2. Função com parâmetros
// Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."

function apresentarPessoa(nome, idade){
    console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`)
}

apresentarPessoa('Kaleb', 23)

// 3. Cálculo de IMC
// Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
// A função deve calcular o IMC utilizando a fórmula: IMC = peso / (altura * altura)

function imcPessoal(peso, altura){
    let IMC = peso / (altura * altura)
    console.log('Seu IMC está em:', IMC.toFixed(2))
}

imcPessoal(83, 1.76)


// 4. Verificar aprovação
// Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.

function verificarAprovacao(nota){
    if(nota >= 7){
        console.log('Aprovado pois obteve uma nota superior a 7')
    }else{
        console.log('Reprovado pois obteve uma nota inferior a 7')
    }
}

verificarAprovacao(7)