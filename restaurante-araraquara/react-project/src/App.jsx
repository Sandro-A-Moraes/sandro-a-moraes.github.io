import React from 'react';

const App = () => {
  return (
    <>
      <header>
        <nav>
          <a href="#inicio">Início</a>
          <a href="#quemsomos">Quem Somos</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <div className="bg"></div>
        <div className="content">
          <h1>Restaurante Araraquara</h1>
          <p>Em cada prato, uma sinfonia de sabores que transforma cada refeição em uma experiência culinária inesquecível.</p>
        </div>
      </header>

      <main>
        <section id="inicio">
          <h1>Bem-vindo ao Restaurante Araraquara!</h1>
          <p>
            Bem-vindo ao Restaurante Araraquara, onde a arte da culinária encontra a sofisticação do sabor! Embarque em uma jornada gastronômica única, onde nossos chefs dedicados criam verdadeiras obras-primas para satisfazer o seu paladar...
          </p>
          <p>
            No Restaurante Araraquara, não é apenas sobre comer; é sobre se entregar a uma jornada culinária, onde cada garfada é uma celebração...
          </p>
        </section>

        <section id="quemsomos">
          <div className="container-texto">
            <div className="conteudo">
              <h2>Quem Somos?</h2>
              <p>
                O Restaurante Araraquara é o fruto de uma paixão pela culinária que começou há décadas. Fundado por um grupo de amigos apaixonados por gastronomia...
              </p>
              <p>
                Aqui, cada refeição é uma celebração da diversidade de sabores que a região oferece...
              </p>
            </div>

            <div className="imagens-container">
              <div className="imagem-1">
                <a href="#">
                  <div className="animation-border-container">
                    <img
                      id="dubois"
                      className="imagem"
                      src="https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Chef Alexander Dubois"
                      loading="lazy"
                    />
                  </div>
                </a>
                <h3>Chef Alexander Dubois</h3>
                <p id="texto-dubois">
                  Chef francês conhecido por sua maestria na arte da alta cozinha...
                </p>
              </div>

              <div className="imagem-2">
                <a href="#">
                  <div className="animation-border-container">
                    <img
                      id="ricardo"
                      src="https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Chef Ricardo Santos"
                      loading="lazy"
                    />
                  </div>
                </a>
                <h3>Chef Ricardo Santos</h3>
                <p id="texto-ricardo">
                  Chef brasileiro conhecido por sua abordagem inovadora na culinária fusion...
                </p>
              </div>
            </div>
          </div>
        </section>

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

        <section id="duvidas">
          <div className="imagem-container">
            <img className="imagem-duvidas" src="src/assets/imagens/restaurante.jpg" alt="Imagem do restaurante" />
          </div>
          <div>
            <h2>Ficou alguma dúvida?</h2>

            <div className="duvida">
              <h3>É necessário fazer reserva antecipada?</h3>
              <img className="arrowDuvidas" src="src/assets/imagens/down-arrow-svgrepo-com.svg" alt="Seta para abrir" />
              <p className="paragrafo">
               Sim, recomendamos fortemente que os clientes façam reservas antecipadas, especialmente aos finais de semana e em datas comemorativas. Isso garante uma experiência exclusiva e sem espera, com atendimento personalizado desde sua chegada.
              </p>
            </div>

            <div className="duvida">
              <h3>O menu oferece opções gourmet para dietas restritivas?</h3>
              <img className="arrowDuvidas" src="src/assets/imagens/down-arrow-svgrepo-com.svg" alt="Seta para abrir" />
              <p className="paragrafo">
                Certamente. Nosso chef desenvolveu opções sofisticadas para dietas vegetarianas, veganas e sem glúten, sem comprometer o sabor ou a apresentação. Basta informar sua preferência ao realizar a reserva ou ao chegar ao restaurante.
              </p>
            </div>

            <div className="duvida">
              <h3>O restaurante possui dress code?</h3>
              <img className="arrowDuvidas" src="src/assets/imagens/down-arrow-svgrepo-com.svg" alt="Seta para abrir" />
              <p className="paragrafo">
                Sim, mantemos um padrão de elegância em nosso ambiente. Sugerimos traje esporte fino ou social para todos os clientes, a fim de preservar a atmosfera sofisticada e a experiência gastronômica elevada que oferecemos.
              </p>
            </div>

            <div className="duvida">
              <h3>Há estacionamento com serviço de valet?</h3>
              <img className="arrowDuvidas" src="src/assets/imagens/down-arrow-svgrepo-com.svg" alt="Seta para abrir" />
              <p className="paragrafo">
               Oferecemos estacionamento privativo com serviço de valet incluso, para sua maior comodidade e segurança. Nossa equipe está preparada para recebê-lo desde o momento da sua chegada com toda a atenção que você merece.
              </p>
            </div>
          </div>
        </section>
      </main>

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
    </>
  );
};

export default App;
