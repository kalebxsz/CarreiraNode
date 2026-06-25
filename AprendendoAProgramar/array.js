const frutas = ['amora', 'banana', 'caju', 'damasco']

// console.log('o primeiro indice é:', frutas[0])
// console.log('o número total é: ', frutas.length)
// console.log('Vou adicionar melancia', frutas.push('melancia'))
// console.log('frutas na lista após inserir Melancia:', frutas)
// console.log('Para ver o último item adicioado:', frutas[frutas.length - 1] )

console.log('Utilizando FOR TRADICIONAL');
for (let i = 0; i < frutas.length; i++){
    console.log('indice: ', i)
    console.log(frutas[i])
}

console.log('Utilizando forEach');


frutas.forEach((indice, valor)=>{
    console.log('indice: ', indice, valor)
})

console.log('Utilizando FOR OF');

for (const fruta of frutas){
    console.log('Fruta da vez é: ', fruta)
}