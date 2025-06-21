import React from 'react'

const Cards = ({className, id, imagem, alt, nome, paragrafoId, descricao}) => {
  return (
    <div className={className}>
        <a href="#">
            <div className="animation-border-container">
            <img
                id={id}
                className="imagem"
                src={imagem}
                alt={alt}
                loading="lazy"/>
            </div>
        </a>
        <h3>{nome}</h3>
        <p id={paragrafoId}>{descricao}</p>
    </div>
  )
}

export default Cards