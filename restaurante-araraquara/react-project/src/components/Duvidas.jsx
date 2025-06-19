import React from 'react'

const Duvidas = () => {
  return (
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
  )
}

export default Duvidas