// Criar um array com uma sequencia de números entre x e y 

function criarNumero(inicio, fim){
    const arr =[]
    let elemento = inicio;

    for(let i= 0, j =0; j < fim; i++, elemento++){
        arr[i] = elemento
        j = elemento
    }
    return arr;
}

console.log(criarNumero(12, 30))