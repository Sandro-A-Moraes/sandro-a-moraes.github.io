import React from 'react'
import ItemFooter from './ItemFooter'
import { itensFooter } from '../content/textos'

const Footer = () => {
  return (
    <footer>
        <h2>Deseja saber mais?</h2>

        <ul>
          {itensFooter.map((item)=> <ItemFooter key={item.id} src={item.src} alt={item.alt} link={item.link} nome={item.nome}/>)}
        </ul>

        <p>&copy; 2025 Restaurante Araraquara. Todos os direitos reservados.</p>
      </footer>
  )
}

export default Footer