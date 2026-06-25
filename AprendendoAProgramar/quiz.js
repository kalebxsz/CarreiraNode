const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let acertos = 0

leitor.question('Qual nome utilizamos para criar uma função em javascript?\n A) variavel\n B) function\n C) define\n', (resposta1) => {
    if (resposta1 == 'B') {
        acertos++

        leitor.question('Qual a forma de declarar uma variavel que não irá mudar?\n A) const\n B) let\n C) variavel\n', (resposta2) => {
            if (resposta2 == 'A') {
                acertos++
            }

            leitor.question('Como é chamado a palavra reservado para chamar outro arquivo?\n A) getArchive\n B)Method\n C) require\n', (resposta3) => {
                if (resposta3 == 'C') {
                    acertos++
                }
                if (acertos == 3) {
                    console.log('Parabens você gabaritou o quiz')
                } else if (acertos == 2) {
                    console.log('Você precisa estudar mais! Parabéns pela média')
                } else {
                    console.log('Você foi muito abaixo, precisa estudar mais!!!')
                }
                leitor.close()




            })
        })
    }

})

