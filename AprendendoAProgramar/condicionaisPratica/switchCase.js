const avaliacao = 5

switch (avaliacao) {
    case 5:
        console.log('Avaliação Ótima')
        break;
    case 4:
        console.log('Avaliação Boa')
        break;
    case 3:
        console.log('Avaliação Neutra')
        break;
    default:
        console.log('Avaliação baixa')
        break;
    
}
console.log('==============================================')
// OP CONDICIONAL E SWITCH
// Verificar se o estudante receberá bônus na nota
// Estudantes recebem bonus se nota for 8 ou acima e se tiverem no maximo 2 faltas

const nome = 'Roberta'
const nota = 8
const faltas = 3

const recebeBonus = (nota >= 8) || (faltas <=2) 
? `${nome}, recebe Bonus` 
: `${nome}, Não recebe Bonus`

console.log(recebeBonus)

console.log('==============================================')

// Criar um fluxo que identifique o tipo de usuário e comunica de acordo 
// ex: Usuário free tem acesso limitado ai app
// usuario premium tem acesso a todas as funções 
// usuário super premium tem acesso total e bonus especiais 


const user = 'Super Premium'

switch (user){
    case 'free':
        console.log('Acesso Limitado');
        break;
    case 'Premium':
        console.log('Acesso total ao APP');
        break;
    case 'Super Premium':
        console.log('Acesso total e bonus especiais');
        break;
    default:
        console.log('Tipo de usuário desconhecido')
        break;
}