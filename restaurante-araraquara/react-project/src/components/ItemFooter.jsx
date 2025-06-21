import React from 'react'

const ItemFooter = ({src, alt, link, nome}) => {
  return (
    <li>
        <img src={src} alt={alt} />
        <a href={link}>{nome}</a>
    </li>
  )
}

export default ItemFooter