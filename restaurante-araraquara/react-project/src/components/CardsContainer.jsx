import React from 'react'
import Cards from './Cards'
import { textoChefes } from '../content/textos'

const CardsContainer = () => {
  return (
    <div className="imagens-container">
        {textoChefes.map((chefe)=>
            <Cards key={chefe.id} id={chefe.id} className={chefe.className} nome={chefe.nome} descricao={chefe.descricao} imagem={chefe.imagem} alt={chefe.alt} paragrafoId={chefe.paragrafoId}/>
        )}
    </div>
  )
}

export default CardsContainer