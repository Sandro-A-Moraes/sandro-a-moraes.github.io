import React from 'react'

const Cards = ({className, id, src, alt, nomeChefe, idParagrafo, textoChefe}) => {
  return (
    <div className={className}>
        <a href="#">
            <div className="animation-border-container">
            <img
                id={id}
                className="imagem"
                src={src}
                alt={alt}
                loading="lazy"/>
            </div>
        </a>
        <h3>{nomeChefe}</h3>
        <p id={idParagrafo}>{textoChefe}</p>
    </div>
  )
}

export default Cards