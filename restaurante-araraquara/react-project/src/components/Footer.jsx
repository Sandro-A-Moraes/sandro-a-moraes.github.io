import React from 'react'

const Footer = () => {
  return (
    <footer>
        <h2>Deseja saber mais?</h2>

        <ul>
          <li>
            <img src="src/assets/imagens/instagram.png" alt="Instagram" />
            <a href="#">Instagram</a>
          </li>
          <li>
            <img src="src/assets/imagens/facebook.png" alt="Facebook" />
            <a href="#">Facebook</a>
          </li>
          <li>
            <img src="src/assets/imagens/whatsapp.png" alt="Whatsapp" />
            <a href="https://api.whatsapp.com/send?phone=5594984389699">Whatsapp</a>
          </li>
        </ul>

        <p>&copy; 2025 Restaurante Araraquara. Todos os direitos reservados.</p>
      </footer>
  )
}

export default Footer