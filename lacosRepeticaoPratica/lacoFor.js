// const numero = 5 

// for (let i = 1; i <= 10; i++){
//     const resultado = numero * i;
//     console.log(`${numero} x ${i} = ${resultado}`)
// }

// for (let i = 1; i <= 30; i++){
//     const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
//     if(numero === 15){
//         console.log(`${numero} em ${i} tentativas`)
//         break;
//     }
// }

let contador = 0;
for (let i = 1; i <= 30; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if(numero % 5 > 0){
        continue;
    }
    contador++
}
console.log(contador)

// exemplo de palindro, texto invertido 

const texto = 'luz azul'
let textoIvenrtido = ''
for(let i = texto.length - 1; i >= 0; i--){
    textoIvenrtido += texto[i];
}
const result = texto === textoIvenrtido
? `${texto} é um Palíndromo`
: `${texto} não é um Palindromo`

console.log(result)