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
        let id = localStorage.getItem('id')
        if(id === null){
            localStorage.setItem('id', 0)
        }
    }
    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravarTransacao(d){
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