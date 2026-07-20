const clientes = [
    {nome: 'Kaleb', ativo: true},
    {nome: 'Gabriel', ativo: true},
    {nome: 'Isaac', ativo: false}
]

for (cliente of clientes){
    const status = cliente.ativo ? 'ativo': 'inativo'
    console.log(`status cliente ${cliente.nome}: ${status}`)
}