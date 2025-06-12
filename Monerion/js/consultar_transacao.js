import { Transacao } from "./utils/models.js"
import { filtrarTransacoes } from "./utils/filtro.js"
import { carregarTransacoes, exibirTransacoes, carregarHistorico, exibirHistorico, exibirHistoricoFiltrado } from "./utils/transacaoesView.js"

function mostrarTransacoes(categoria) {
    let lista = carregarTransacoes(categoria)
    exibirTransacoes(lista)
}

function mostrarHistorico(){
    let lista = carregarHistorico()
    exibirHistorico(lista)
}

function buscarHistorico(){
    const lista = carregarHistorico()

    const filtro = new Transacao(
        null,
        document.getElementById('categoria').value,
        document.getElementById('ano').value,
        document.getElementById('mes').value,
        document.getElementById('dia').value,
        document.getElementById('tipo').value,
        document.getElementById('descricao').value,
        document.getElementById('valor').value
    )

    const listaFiltrada = filtrarTransacoes(lista, filtro)
    exibirHistoricoFiltrado(listaFiltrada)
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
window.mostrarHistorico = mostrarHistorico
window.buscarHistorico = buscarHistorico