let pessoa = {
    nome: 'kaleb',
    idade: 23,
    temCnh: true
}

pessoa.sobrenome = 'Canabarro' // fora do escopo de pessoa e sendo atribuido após
console.log('Nome:', pessoa.nome)
console.log('Sobrenome:', pessoa.sobrenome)


const livro = {
    titulo: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    paginas: 310
}

livro.publicado = true

livro.idiomas = [
    'Ingles', 'Portugues', 'Espanhol'
]

livro.idiomas.push('Mandarim')
livro.idiomas.push('Francês')

console.log('Livros Antes:', livro);

delete livro.paginas

console.log('Livro depois', livro)

console.log('Autor do livro', livro['autor'])

const autor = {
    nome: 'J. R. R. Tolkien',
    nacionalidade: 'Britanico',
    idade: 98,
    livros: [livro]
}

console.log('Autor:', autor);

livro.autor = autor

