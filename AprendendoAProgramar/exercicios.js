// Lista de exercícios
/* 
1. Boas-vindas personalizadas
Crie uma variável chamada nome e atribua seu nome completo. Depois, use console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!" 
*/
let nomeCompleto = 'Kaleb Gabriel Canabarro';
console.log(`Olá, ${nomeCompleto}! Seja Bem-vindo ao curso de Javascript!`);

/* 
2. Cálculo de idade
Crie duas variáveis: anoAtual e anoNascimento. Calcule a idade da pessoa subtraindo os valores e exiba no console: "Você tem [idade] anos." 
*/

let anoAtual = 2026
let anoNascimento = 2003
let idade = anoAtual - anoNascimento
console.log(`Você tem ${idade} anos`)

/* 
3. Mensagem de localização
Crie três variáveis com os dados da sua localização: cidade, estado e pais. Em seguida, mostre no console: "Você está em Cidade - Estado, País." 
*/
let cidade = 'Porto Alegre';
let estado = 'Rio Grande do Sul';
let pais = 'Brasil';
console.log(`Você está em ${cidade} - ${estado}, ${pais}.`);

/* 
4. Tipo da variável:
Crie uma variável chamada temCarteira com valor true ou false. Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.
*/
let temCarteira = false
console.log(typeof temCarteira)

/*
5. Simulação bancária simples:
Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. Mostre o saldo final no console com uma frase explicando.
*/
let saldo = 0;
let deposito = 200;
let saque = 50

saldo = deposito - saque

console.log('o Saldo atual é:', saldo)

/*
6. Média de notas:
Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas respectivas notas. Calcule e mostre a média final com uma mensagem. 
*/
let matematica = 7
let portugues = 9
let ciencias = 6
let media = (matematica + portugues + ciencias) / 3

console.log('A média do aluno é:', media.toFixed(2));   // toFixed é utilizado para informar que após o ponto, percorrá o numero informado de casas

/*
7. Reajuste de salário:
Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.
*/
let salario = 3000
let aumento = (salario / 10) + salario

console.log('o aumento de salario foi de 10%,ou seja, seu salario passa a ser:', aumento)

/* 
8. Contador de cliques:
Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações. 
*/
 let cliques = 0;
 cliques++
 cliques++
 cliques++

 console.log('tivemos um total de:', cliques,'cliques')


 // 9. Constantes não podem ser alteradas 

const PI = 3.14; 

// PI = 3.1415; // ❌ Isso causaria erro pois constantes não podem ser modificadas 

console.log("PI é uma constante e não pode ser alterada: " + PI); 

 

// 10. Concatenando tipos diferentes 

let mensagem = "O número é "; 

let numero = 42; 

let combinado = mensagem + numero; 

console.log(combinado); // "O número é 42" 

console.log(typeof combinado); // string 
