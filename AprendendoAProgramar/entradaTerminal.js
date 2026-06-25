const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual o seu nome? ', (nome)=> {
    console.log('Olá ', nome)
    console.log('Seja bem vindo ao curso', nome)

    leitor.question('Qual a sua idade? ', (idade)=>{
        if(idade >= 18){
            console.log('Que legal você é maior de idade e já pode fazer sua CNH!!')
        }else{
            console.log('Você ainda é menor de idade e não pode fazer a sua CNH, tente após daqui: ', 18 - idade, 'Anos')
        }
         leitor.close()
    })


    
   
})