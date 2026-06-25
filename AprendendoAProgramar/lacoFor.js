// Laços de repetição: FOR 

// Para percorrer Number

for (let contador = 1; contador <= 10; contador++){
    console.log('Número Atual: ', contador)
}

for(let numeroPar = 1; numeroPar <= 15; numeroPar++){
    if (numeroPar % 2 == 0) {
        console.log('Numero par encontrado: ', numeroPar)
    }
}
for(let numeroImpar = 1; numeroImpar <= 15; numeroImpar++){
    if (numeroImpar % 2 > 0) {
        console.log('Numero ímpar encontrado: ', numeroImpar)
    }
}

// Para percorrer Caracteres utilizamos .length

const palavra = 'Campeao mundial'
for (let mundo = 0; mundo <= palavra.length; mundo++) {
    console.log(palavra[mundo])
}
