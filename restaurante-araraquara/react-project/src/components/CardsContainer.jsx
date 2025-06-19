import React from 'react'
import Cards from './Cards'
import { textoChefes } from '../content/textos'

const CardsContainer = () => {
  return (
    <div className="imagens-container">
        <Cards className={"imagem-1"} id={"dubois"} src={"https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={"Chef Alexander Dubois"} nomeChefe={textoChefes.nomeChefe1} idParagrafo={"texto-dubois"} textoChefe={textoChefes.paragrafoChefe1}/>

        <Cards className={"imagem-2"} id={"ricardo"} src={"https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={"Chef Ricardo Santos"} nomeChefe={textoChefes.nomeChefe2} idParagrafo={"texto-ricardo"} textoChefe={textoChefes.paragrafoChefe2}/>
    </div>
  )
}

export default CardsContainer