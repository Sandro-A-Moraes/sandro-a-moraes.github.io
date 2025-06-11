//  Definição das variáveis
let listaDespesas = []
let tbody = document.getElementById('dados')

class Despesa{
    constructor(id, ano, mes, dia, tipo, descricao, valor){
        this.id = id
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor  = valor 
    }
}

class Bd{
    constructor(){
        let id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }
    }
    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravarDespesa(d){
        let id = localStorage.getItem('id')
 
        if(id === null) {
            id = 0
        } else {
            id = this.getProximoId()
        }
    
        localStorage.setItem(id, JSON.stringify(d))
    
        localStorage.setItem('id', id)     
        
    }

}

let bd = new Bd()


function mostrarHistorico(){
    listaDespesas.splice(0, listaDespesas.length)
    let tamanhoLocalStorage = localStorage.length - 1

    for(let i = 0; i < tamanhoLocalStorage; i++){
        listaDespesas.push(JSON.parse(localStorage.getItem(i+1)))
    }

    tbody.innerHTML = ''

    for(let i = 0; i<tamanhoLocalStorage; i++){
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
}


function registrarDespesa(){
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value


    if(ano === '' || mes === '' || (dia === '' || (dia<1 || dia>31))|| tipo === '' || descricao === '' || valor === ''){
        alert('Um dos campos está vazio ou incorreto! Preencha-o corretamente.')
    } else{
        let despesa = new Despesa(
                id = bd.getProximoId(),
                ano,
                mes,
                dia,
                tipo,
                descricao,
                valor
            )

            bd.gravarDespesa(despesa)

            listaDespesas.push(despesa)

            mostrarHistorico()
    }
    
}