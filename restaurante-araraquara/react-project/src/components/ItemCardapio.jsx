import React from 'react'

const ItemCardapio = ({title, name, description, src, alt}) => {
  return (
    <div className="item">
        <div className="content">
            <div className="title">{title}</div>
            <div className="name">{name}</div>
            <div className="des">
            {description}
            </div>
            <div className="btn">
                <button>Realizar Pedido</button>
                <button>Subscribe</button>
            </div>
        </div>
        <img src={src} alt={alt} />
    </div>
  )
}

export default ItemCardapio