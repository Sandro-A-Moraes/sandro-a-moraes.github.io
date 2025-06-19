import React from 'react'

const Cardapio = () => {
  return (
    <section id="cardapio">
          <h2>Cardápio do Dia</h2>

          <div className="carrossel">
            <div className="list">
              <div className="item">
                <div className="content">
                  <div className="title">BRASA</div>
                  <div className="name">NOBRE</div>
                  <div className="des">
                    Costela bovina assada lentamente por horas até ficar macia e suculenta, com um tempero especial à base de alho, ervas frescas e toque defumado. Sevida com molho barbecue artesanal e acompanhamentos à escolha.
                  </div>
                  <div className="btn">
                    <button>Realizar Pedido</button>
                    <button>Subscribe</button>
                  </div>
                </div>
                <img src="src/assets/imagens/cardapio/prato-1.jpg" alt="Prato Brasa Nobre" />
              </div>

              <div className="item">
                <div className="content">
                  <div className="title">FOGO</div>
                  <div className="name">ITALIANO</div>
                  <div className="des">
                    Uma pizza de massa fina com molho artesanal de tomates italianos, coberta com calabresa levemente picante, cebolas roxas caramelizadas e um toque de pimenta dedo-de-moça. Finalizada com queijo mussarela derretido e orégano fresco.
                  </div>
                  <div className="btn">
                    <button>Realizar Pedido</button>
                    <button>Subscribe</button>
                  </div>
                </div>
                <img src="src/assets/imagens/cardapio/prato-2.jpg" alt="Pizza Fogo Italiano" />
              </div>

              <div className="item">
                <div className="content">
                  <div className="title">CROSTA</div>
                  <div className="name">DOURADA</div>
                  <div className="des">
                    Filé empanado crocante por fora e suculento por dentro, servido com sala freca de folhas, cenoura e repolho, temperada com um toque cítrico. Uma combinação leve e saborosa, perfeita para quem busca equilíbrio no prato.
                  </div>
                  <div className="btn">
                    <button>Realizar Pedido</button>
                    <button>Subscribe</button>
                  </div>
                </div>
                <img src="src/assets/imagens/cardapio/prato-3.jpg" alt="Filé Crosta Dourada" />
              </div>

              <div className="item">
                <div className="content">
                  <div className="title">SABOR</div>
                  <div className="name">NATIVO</div>
                  <div className="des">
                    Pedaços de carne bovina grelhados no ponto certo, acompanhados de um molho rústico feito à base de vinho tinto, cebolas douradas, alho e ervas frescas. O molho é servido à parte, realçando o sabor da carne sem sobrecarregar o prato.
                  </div>
                  <div className="btn">
                    <button>Realizar Pedido</button>
                    <button>Subscribe</button>
                  </div>
                </div>
                <img src="src/assets/imagens/cardapio/prato-4.jpg" alt="Prato Sabor Nativo" />
              </div>

              <div className="item">
                <div className="content">
                  <div className="title">BRISA</div>
                  <div className="name">ORIENTAL</div>
                  <div className="des">
                    Finas lâminas de salmão fresco temperadas com molho cítrico, azeite de gergelim, ervas finas e sementes negras. Finalizado com microverdes e um leve toque de pimenta, trazendo frescor e sofisticação.
                  </div>
                  <div className="btn">
                    <button>Realizar Pedido</button>
                    <button>Subscribe</button>
                  </div>
                </div>
                <img src="src/assets/imagens/cardapio/prato-5.jpg" alt="Prato Brisa Oriental" />
              </div>

              <div className="item">
                <div className="content">
                  <div className="title">SOL</div>
                  <div className="name">QUENTE</div>
                  <div className="des">
                    Inspirado nos sabores do Oriente Médio, esse prato traz ovos delicadamente pochê em um molho vibrante de tomates maduros, alho e especiarias. Uma receita reconfortante, perfeita para começar o dia com energia ou fechar com estilo.
                  </div>
                  <div className="btn">
                    <button>Realizar Pedido</button>
                    <button>Subscribe</button>
                  </div>
                </div>
                <img src="src/assets/imagens/cardapio/prato-6.jpg" alt="Prato Sol Quente" />
              </div>
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