// Function 

// Elevar um número x a uma potencia y 

console.log('=========minha solução!==========');
// minha solução!
function expo(num1, num2){
    return num1 ** num2
}

console.log(expo(2, 4))



console.log('=========solução alura==========');

// solução alura
function calculaPotencia(num, pow){
    let resultado = 1;
    for(let i = 0; i < pow; i++){
        resultado = resultado * num;
    }
    return resultado;
};
console.log(calculaPotencia(4,3));
console.log(calculaPotencia(10,3));
console.log(calculaPotencia(3,10));
console.log(calculaPotencia(4,3));
// console.log(resultado) // Não será acessado pois esta dentro do escopo da função apenas