import React from 'react'

const ItemDuvidas = ({pergunta, resposta}) => {
  return (
    <div className="duvida">
        <h3>{pergunta}</h3>
        <img className="arrowDuvidas" src="src/assets/imagens/down-arrow-svgrepo-com.svg" alt="Seta para abrir" />
        <p className="paragrafo">{resposta}</p>
    </div>
  )
}

export default ItemDuvidas