let tbody = document.getElementById('dados')

function obterTodasTransacoes() {
    const lista = []
    
    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i)
        
        if (chave === 'id_despesa' || chave === 'id_receita') continue

        const item = JSON.parse(localStorage.getItem(chave))
        if (item) {
            lista.push(item)
        }
    }

    return lista
}

export function carregarTransacoes(categoria) {
    const todas = obterTodasTransacoes()
    return todas.filter(t => t.categoria === categoria)
}

export function exibirTransacoes(lista) {
    tbody.innerHTML = ''
    lista.forEach((t) => {
        tbody.innerHTML += `
            <tr>
                <td>${t.id}</td>
                <td>${t.ano}</td>
                <td>${t.mes}</td>
                <td>${t.dia}</td>
                <td>${t.tipo}</td>
                <td>${t.descricao}</td>
                <td>${t.valor}</td>
            </tr>
        `
    })
}

export function exibirHistoricoFiltrado(lista) {
    tbody.innerHTML = ''
    lista.forEach((t) => {
        tbody.innerHTML += `
            <tr>
                <td>${t.id}</td>
                <td>${t.categoria}</td>
                <td>${t.ano}</td>
                <td>${t.mes}</td>
                <td>${t.dia}</td>
                <td>${t.tipo}</td>
                <td>${t.descricao}</td>
                <td>${t.valor}</td>
            </tr>
        `
    })
}

export function carregarHistorico() {
    return obterTodasTransacoes()
}

export function exibirHistorico(lista) {
    tbody.innerHTML = ''
    lista.forEach((t, i) => {
        tbody.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${t.categoria}</td>
                <td>${t.ano}</td>
                <td>${t.mes}</td>
                <td>${t.dia}</td>
                <td>${t.tipo}</td>
                <td>${t.descricao}</td>
                <td>${t.valor}</td>
            </tr>
        `
    })
}
