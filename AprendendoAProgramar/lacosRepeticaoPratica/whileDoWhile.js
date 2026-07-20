// WHILE 

const numeroSecreto = 8;
let numeroAleatorio = 0;
let tentativas = 0;


while(numeroSecreto !== numeroAleatorio){
    numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    tentativas ++
}

console.log(`Advinhou em ${tentativas} tentativas`);


// DO WHILE 

let numeroRandow = 0;
do {
    numeroRandow = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    console.log(numeroRandow)
} while (numeroRandow % 2 !== 0)

console.log(numeroRandow)