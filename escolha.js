// entre 9 e 10: excelente 
// entre 7 e 8: Bom
// entre 4 e 6: médio
// entre 0 e 3: ruim

const notaDoAluno = 4

switch (notaDoAluno) {
case 10:
case 9:
    console.log('excelente')
    break
case 8:
case 7:
    console.log('Bom')
    break
case 6:
case 5:
case 4:
    console.log('médio')
    break
case 3:
case 2:
case 1:
case 0:
    console.log('ruim')
    break
}