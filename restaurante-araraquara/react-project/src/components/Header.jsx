import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header>
        <NavBar/>
        <div className="bg"></div>
        <div className="content">
          <h1>Restaurante Araraquara</h1>
          <p>Em cada prato, uma sinfonia de sabores que transforma cada refeição em uma experiência culinária inesquecível.</p>
        </div>
      </header>
  )
}

export default Header