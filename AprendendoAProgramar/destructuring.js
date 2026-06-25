  // Formato sem destructuring:
  const pessoa = {
    nome: 'Kaleb',
    idade: 23,
    profissao: 'Programador'
  }

  console.log(pessoa)

  const {nome, idade, profissao} = pessoa

  console.log(nome, profissao)

  function saudacao({nome, idade}){
    console.log('Olá, ', nome)
    if(idade >= 18){
        console.log('é maior de idade')
    }else{
        console.log('Não é maior de idade')
    }
  }



  saudacao(pessoa)