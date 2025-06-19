import React from 'react'
import { textoQuemSomos } from '../content/textos'
import CardsContainer from './CardsContainer'

const QuemSomos = () => {
  return (
    <section id="quemsomos">
          <div className="container-texto">
            <div className="conteudo">
              <h2>{textoQuemSomos.titulo}</h2>
              <p>{textoQuemSomos.paragrafo1}</p>
              <p>{textoQuemSomos.paragrafo2}</p>
            </div>
            <CardsContainer/>
          </div>
        </section>
  )
}

export default QuemSomos