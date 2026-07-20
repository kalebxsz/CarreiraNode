const fruta = 'Mamão'

// if (fruta !== 'Laranja' && fruta !== 'Abacaxi') {
//     console.log('Fruta incompatível para a receita.')
// }else{
//     console.log('Fruta compatível para a receita.')
// }


const frutaValida = (fruta !== 'Laranja' && fruta !== 'Abacaxi') 
? console.log('Fruta incompatível para a receita.') 
: console.log('Fruta compatível para a receita.')


// Atenção com os operadores && ou || pois podemos nos confundir utilizando um ou outro e termos sempre o resultado como false. 