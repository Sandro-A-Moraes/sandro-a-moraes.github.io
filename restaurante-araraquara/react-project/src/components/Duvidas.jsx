import React from 'react'
import { textoDuvidas } from '../content/textos'
import ItemDuvidas from './itemDuvidas'

const Duvidas = () => {
  return (
    <section id="duvidas">
          <div className="imagem-container">
            <img className="imagem-duvidas" src="src/assets/imagens/restaurante.jpg" alt="Imagem do restaurante" />
          </div>
          <div>
            <h2>Ficou alguma dúvida?</h2>

            {textoDuvidas.map((item)=> <ItemDuvidas key={item.id} pergunta={item.pergunta} resposta={item.resposta}/>)}
          </div>
        </section>
  )
}

export default Duvidas