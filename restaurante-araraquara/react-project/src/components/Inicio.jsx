import React from 'react'
import {textoInicio} from '../content/textos.js'

const Inicio = () => {
  return (
        <section id="inicio">
          <h1>{textoInicio.titulo}</h1>
          <p>{textoInicio.paragrafo1}</p>
          <p>{textoInicio.paragrafo2}</p>
        </section>
  )
}

export default Inicio