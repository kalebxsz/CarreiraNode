const fs = require('fs')

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (error, texto) => {
    console.log('error:', error);
    console.log('texto:', texto);

    if (error) {
        return;
    }

    quebraEmParagrafos(texto);
});

function quebraEmParagrafos(texto){
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.flatMap((paragrafo)=>{
        if (!paragrafo) return []
        return verificaPalavrasDuplicadas(paragrafo)
    })
    
    console.log(contagem);
    
}
function limpaPalavra (palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(texto){
    const listaPalavras = texto.split(' ');
    const resultado = {};

    listaPalavras.forEach(palavra => {
        if(palavra.length >= 3){
            const palavraLimpa = limpaPalavra(palavra)
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        }
    });
   return resultado
    
}

