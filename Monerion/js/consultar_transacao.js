import { Transacao } from "./utils/models.js"
import { filtrarTransacoes } from "./utils/filtro.js"
import { carregarTransacoes } from "./utils/transacaoesView.js"
import { exibirTransacoes } from "./utils/transacaoesView.js"


function mostrarTransacoes(categoria) {
    const lista = carregarTransacoes(categoria)
    exibirTransacoes(lista)
}

function buscarTransacao(categoria) {
    const lista = carregarTransacoes(categoria)

    const filtro = new Transacao(
        null,
        categoria,
        document.getElementById('ano').value,
        document.getElementById('mes').value,
        document.getElementById('dia').value,
        document.getElementById('tipo').value,
        document.getElementById('descricao').value,
        document.getElementById('valor').value
    )

    const listaFiltrada = filtrarTransacoes(lista, filtro)
    exibirTransacoes(listaFiltrada)
}

window.mostrarTransacoes = mostrarTransacoes
window.buscarTransacao = buscarTransacao
