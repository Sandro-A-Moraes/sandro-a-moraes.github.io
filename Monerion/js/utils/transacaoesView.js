let tbody = document.getElementById('dados')

export function carregarTransacoes(categoria) {
    let lista = []
    let tamanho = localStorage.length - 1

    for (let i = 0; i < tamanho; i++) {
        let item = JSON.parse(localStorage.getItem(i + 1))
        if (item && item.categoria === categoria) {
            lista.push(item)
        }
    }

    return lista
}

export function exibirTransacoes(lista) {
    tbody.innerHTML = ''
    lista.forEach((t, i) => {
        tbody.innerHTML += `
            <tr>
                <td>${t.id ?? i + 1}</td>
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
    lista.forEach((t, i) => {
        tbody.innerHTML += `
            <tr>
                <td>${t.id ?? i + 1}</td>
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

export function carregarHistorico(){
    let lista = []
    let tamanho = localStorage.length - 1

    for (let i = 0; i < tamanho; i++) {
        let item = JSON.parse(localStorage.getItem(i + 1))
            lista.push(item)
    }

    return lista
}

export function exibirHistorico(lista){
    tbody.innerHTML = ''
    lista.forEach((t, i) => {
        tbody.innerHTML += `
            <tr>
                <td>${t.id ?? i + 1}</td>
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