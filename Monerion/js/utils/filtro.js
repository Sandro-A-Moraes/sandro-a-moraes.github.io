
export function filtrarTransacoes(lista, filtro) {
    return lista.filter(transacao =>
        (filtro.categoria === '' || filtro.categoria == transacao.categoria) &&
        (filtro.ano === '' || filtro.ano == transacao.ano) &&
        (filtro.mes === '' || filtro.mes == transacao.mes) &&
        (filtro.dia === '' || filtro.dia == transacao.dia) &&
        (filtro.tipo === '' || filtro.tipo == transacao.tipo) &&
        (filtro.descricao === '' || filtro.descricao == transacao.descricao) &&
        (filtro.valor === '' || filtro.valor == transacao.valor)
    )
}
