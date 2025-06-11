let listaDespesas = []
let tbody = document.getElementById('dados')

class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
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
                <td>${listaDespesas[i].id}</td>
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

function buscarDespesa(){
    mostrarHistorico()
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(
        ano,
        mes,
        dia,
        tipo,
        descricao,
        valor
    )

    let listaFiltrada = listaDespesas.filter(
        function(d){
            return (despesa.ano === '' || despesa.ano == d.ano) &&
                   (despesa.mes === '' || despesa.mes == d.mes) &&
                   (despesa.dia === '' || despesa.dia == d.dia) &&
                   (despesa.tipo === '' || despesa.tipo == d.tipo) &&
                   (despesa.descricao === '' || despesa.descricao == d.descricao) &&
                   (despesa.valor === '' || despesa.valor == d.valor)
        }
    )
    
    
    tbody.innerHTML = ''

    listaFiltrada.forEach((despesa)=>{
        tbody.innerHTML += `
            <tr>
                <td>${despesa.id}</td>
                <td>${despesa.ano}</td>
                <td>${despesa.mes}</td>
                <td>${despesa.dia}</td>
                <td>${despesa.tipo}</td>
                <td>${despesa.descricao}</td>
                <td>${despesa.valor}</td>
            </tr>
        ` 
    })

}
