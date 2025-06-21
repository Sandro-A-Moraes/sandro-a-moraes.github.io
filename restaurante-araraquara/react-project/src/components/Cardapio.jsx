import React from 'react'
import ItemCardapio from './ItemCardapio'
import { textoCardapioItens } from '../content/textos'

const Cardapio = () => {
  return (
    <section id="cardapio">
          <h2>Cardápio do Dia</h2>

          <div className="carrossel">
            <div className="list">
                {textoCardapioItens.map((item)=> <ItemCardapio key={item.id} title={item.title} name={item.name} description={item.description} src={item.src} alt={item.alt}/>)}
            </div>

            <div className="arrows">
              <button className="prev">&larr;</button>
              <button className="next">&rarr;</button>
            </div>

            <div className="timeRunning"></div>
          </div>
        </section>
  )
}

export default Cardapio