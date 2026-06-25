// ARROW FUNCTION 

const saudacao = (nome) => {
    console.log('Feliz aniversário', nome)
}

saudacao('Kaleb')



function Pessoa(nome) { 

this.nome = nome; 

 

setTimeout(() => { 

console.log(this.nome); // Arrow function captura o this corretamente 

}, 1000); 

} 

 

new Pessoa('Carlos'); // Resultado: Carlos após 1 segundo 

/*
Guia:
this: Refere-se ao contexto onde a função é chamada.

Funções tradicionais: Possuem seu próprio valor de this, dependendo da forma como são chamadas.

Arrow Functions: Não têm seu próprio this; capturam o valor de this do contexto em que são declaradas. 
*/