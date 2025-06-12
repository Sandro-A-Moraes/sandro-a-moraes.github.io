import { Transacao, Bd } from "./utils/models.js"

//  Definição das variáveis
let listaDespesas = []
let listaReceitas = []
let tbody = document.getElementById('dados')

let bd = new Bd()

function mostrarTransacoes(categoria){

    if(categoria === 'despesa'){
        listaDespesas.splice(0, listaDespesas.length)
        let tamanhoLocalStorage = localStorage.length - 1
        
        for(let i = 0; i < tamanhoLocalStorage; i++){
            let transacao = JSON.parse(localStorage.getItem(i+1))
            if(transacao && transacao.categoria === 'despesa'){
                listaDespesas.push(transacao)
            }
        }

        tbody.innerHTML = ''

        for(let i = 0; i<listaDespesas.length; i++){
            tbody.innerHTML += `
                <tr>
                    <td>${i+1}</td>
                    <td>${listaDespesas[i].ano}</td>
                    <td>${listaDespesas[i].mes}</td>
                    <td>${listaDespesas[i].dia}</td>
                    <td>${listaDespesas[i].tipo}</td>
                    <td>${listaDespesas[i].descricao}</td>
                    <td>${listaDespesas[i].valor}</td>
                </tr>
            ` 
        }
    } else{
        listaReceitas.splice(0, listaReceitas.length)
        let tamanhoLocalStorage = localStorage.length - 1

        for(let i = 0; i < tamanhoLocalStorage; i++){
            let transacao = JSON.parse(localStorage.getItem(i+1))
            if(transacao && transacao.categoria === 'receita'){
                listaReceitas.push(transacao)
            }
       
        }

        tbody.innerHTML = ''

        for(let i = 0; i<listaReceitas.length; i++){
            tbody.innerHTML += `
                <tr>
                    <td>${i+1}</td>
                    <td>${listaReceitas[i].ano}</td>
                    <td>${listaReceitas[i].mes}</td>
                    <td>${listaReceitas[i].dia}</td>
                    <td>${listaReceitas[i].tipo}</td>
                    <td>${listaReceitas[i].descricao}</td>
                    <td>${listaReceitas[i].valor}</td>
                </tr>
            ` 
        }
    }
}


function registrarTransacao(categoria){

    if(categoria === 'despesa'){
        let ano = document.getElementById('ano').value
        let mes = document.getElementById('mes').value
        let dia = document.getElementById('dia').value
        let tipo = document.getElementById('tipo').value
        let descricao = document.getElementById('descricao').value
        let valor = document.getElementById('valor').value


        if(ano === '' || mes === '' || (dia === '' || (dia<1 || dia>31))|| tipo === '' || descricao === '' || valor === ''){
            alert('Um dos campos está vazio ou incorreto! Preencha-o corretamente.')
        } else{
            let id = bd.getProximoId()
            let transacao = new Transacao(
                    id = id,
                    categoria,
                    ano,
                    mes,
                    dia,
                    tipo,
                    descricao,
                    valor
                )

                bd.gravarTransacao(transacao)

                listaDespesas.push(transacao)

                mostrarTransacoes(categoria)
        }
    } else{
        let ano = document.getElementById('ano').value
        let mes = document.getElementById('mes').value
        let dia = document.getElementById('dia').value
        let tipo = document.getElementById('tipo').value
        let descricao = document.getElementById('descricao').value
        let valor = document.getElementById('valor').value


        if(ano === '' || mes === '' || (dia === '' || (dia<1 || dia>31))|| tipo === '' || descricao === '' || valor === ''){
            alert('Um dos campos está vazio ou incorreto! Preencha-o corretamente.')
        } else{
            let id = bd.getProximoId()
            let transacao = new Transacao(
                    id = id,
                    categoria,
                    ano,
                    mes,
                    dia,
                    tipo,
                    descricao,
                    valor
                )

                bd.gravarTransacao(transacao)

                listaReceitas.push(transacao)

                mostrarTransacoes(categoria)
        }
    }
}

window.mostrarTransacoes = mostrarTransacoes
window.registrarTransacao = registrarTransacao