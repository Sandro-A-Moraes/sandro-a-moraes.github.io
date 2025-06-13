import { Transacao, Bd } from "./utils/models.js"

//  Definição das variáveis
let listaDespesas = []
let listaReceitas = []
let tbody = document.getElementById('dados')

let bd = new Bd()

function excluirTransacao(id, categoria){
    
    localStorage.removeItem(id)
    localStorage.setItem('id', localStorage.length-1)
    if(categoria === 'despesa'){
        mostrarTransacoes('despesa')
    } else{
        mostrarTransacoes('receita')
    }

}

function mostrarTransacoes(categoria){

    if(categoria === 'despesa'){
        listaDespesas.splice(0, listaDespesas.length)
        
        for(let i = 0; i < localStorage.length; i++){
            let chave = localStorage.key(i)
            let item = JSON.parse(localStorage.getItem(chave))

            if (item && item.categoria === 'despesa') {
                listaDespesas.push(item)
            }
        }

        tbody.innerHTML = ''

        for(let i = 0; i<listaDespesas.length; i++){
            tbody.innerHTML += `
                <tr>
                    <td>${listaDespesas[i].id}</td>
                    <td>${listaDespesas[i].ano}</td>
                    <td>${listaDespesas[i].mes}</td>
                    <td>${listaDespesas[i].dia}</td>
                    <td>${listaDespesas[i].tipo}</td>
                    <td>${listaDespesas[i].descricao}</td>
                    <td>${listaDespesas[i].valor}</td>
                    <td>
                        <button onclick="excluirTransacao(${listaDespesas[i].id}, 'despesa')" id="${listaDespesas[i].id}" class="btn btn-primary">
                            <i class="fas fa-window-close"></i>
                        </button>
                    </td>
                </tr>
            ` 
        }
    } else{
        listaReceitas.splice(0, listaReceitas.length)

        for(let i = 0; i < localStorage.length; i++){
            let chave = localStorage.key(i)
            let item = JSON.parse(localStorage.getItem(chave))

            if (item && item.categoria === 'receita') {
                listaReceitas.push(item)
            }
       
        }

        tbody.innerHTML = ''
         
        //testar foreach depois
        for(let i = 0; i<listaReceitas.length; i++){
            tbody.innerHTML += `
                <tr>
                    <td>${listaReceitas[i].id}</td>
                    <td>${listaReceitas[i].ano}</td>
                    <td>${listaReceitas[i].mes}</td>
                    <td>${listaReceitas[i].dia}</td>
                    <td>${listaReceitas[i].tipo}</td>
                    <td>${listaReceitas[i].descricao}</td>
                    <td>${listaReceitas[i].valor}</td>
                    <td>
                        <button onclick="excluirTransacao(${listaReceitas[i].id}, 'receita')" id="${listaReceitas[i].id}" class="btn btn-primary">
                            <i class="fas fa-window-close"></i>
                        </button>
                    </td>
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
window.excluirTransacao = excluirTransacao