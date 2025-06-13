export class Transacao{
    constructor(id, categoria, ano, mes, dia, tipo, descricao, valor){
        this.id = id
        this.categoria = categoria
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor  = valor 
    }
}

export class Bd{
    constructor(){
        if (localStorage.getItem('id_despesa') === null) {
            localStorage.setItem('id_despesa', 0)
        }

        if (localStorage.getItem('id_receita') === null) {
            localStorage.setItem('id_receita', 0)
        }
    }

    getProximoId(categoria){
        let chaveId = categoria === 'despesa' ? 'id_despesa' : 'id_receita'
        let proximoId = Number(localStorage.getItem(chaveId)) + 1
        localStorage.setItem(chaveId, proximoId)
        return proximoId
    }

    gravarTransacao(d){
        const chave = `${d.categoria}_${d.id}`
        localStorage.setItem(chave, JSON.stringify(d))
    }
}
