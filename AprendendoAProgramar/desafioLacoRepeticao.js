// Verificar quantos numero pares e impares temos entre 0 e 100

console.log('===================================')
console.log('Desafio Laços de Repetição com for')
console.log('===================================')

for (let contador = 1; contador <= 100; contador++) {
    if(contador % 2 == 0){
        console.log('Esses são numeros pares: ', contador)    
    }
}
for (let contador = 1; contador <= 100; contador++) {
    if(contador % 2 > 0){
        console.log('Esses são numeros ímpares: ', contador)    
    }
}

