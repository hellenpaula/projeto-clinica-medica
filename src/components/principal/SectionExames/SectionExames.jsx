
// css
import  './SectionExames.css'


// componente
import CardExames from './CardsExames.jsx'

// imagem
import ImagemSangue from '../../../assets/icone/icone sangue.png'

import ImagemSeta from '../../../assets/icone/seta.png'


import { useRef, useState } from 'react'

function SectionExames() {

    const DadosExames = [
        {
            Id: 1,
            ImagemIconeExames: ImagemSangue,
            TituloCardExames: 'Coleta de sangue'
        },
        {
            Id: 2,
            ImagemIconeExames: ImagemSangue,
            TituloCardExames: 'Raio-X'
        },
        {
            Id: 3,
            ImagemIconeExames: ImagemSangue,
            TituloCardExames: 'Eletrocardiograma'
        },
        {
            Id: 4,
            ImagemIconeExames: ImagemSangue,
            TituloCardExames: 'Ultrassom'
        },
        {
            Id: 5,
            ImagemIconeExames: ImagemSangue,
            TituloCardExames: 'Ressonância'
        },
        {
            Id: 6,
            ImagemIconeExames: ImagemSangue,
            TituloCardExames: 'Holter e MAPA'
        },
        {
            Id: 7,
            ImagemIconeExames: ImagemSangue,
            TituloCardExames: 'Endoscopia'
        },
        {
            Id: 8,
            ImagemIconeExames: ImagemSangue,
            TituloCardExames: 'Tomografia'
        },
       
    ]


     const carrossel = useRef(null);
     const cardRef = useRef(null);


     function ArrowLeftClick(e) {
        e.preventDefault();

        const larguraCard = cardRef.current.offsetWidth;
        
        const estilosContainer = window.getComputedStyle(carrossel.current);

        const gap = parseInt(estilosContainer.gap);

        const larguraScroll = larguraCard + gap;
        // const novoIndex = Math.max(currentIndex - 1, 0);
        // setCurrentIndex(novoIndex);
        carrossel.current.scrollLeft -= larguraScroll;


        // setTimeout(() => {
        //     e.currentTarget.style.opacity = "0.5";
        // }, 200);
        
    }

    const ArrowRightClick = (e) => {
        e.preventDefault();

        const larguraCard = cardRef.current.offsetWidth;
        const estilosContainer = window.getComputedStyle(carrossel.current);

        const gap =  parseInt(estilosContainer.gap);

        const larguraScroll =
        larguraCard + gap;

        // const novoIndex = Math.min(currentIndex + 1, total - 1);
        // setCurrentIndex(novoIndex);
        carrossel.current.scrollLeft += larguraScroll;

        // setTimeout(() => {
        //     e.currentTarget.style.opacity = '0.5';
        // }, 200);
    }

    return(
        <section className="SectionExames" id='Exames'>
            <h3 className="TituloAreaTextoExames">
                Exames oferecidos
            </h3>

            <div className="ContainerCardsAreaExames" ref={carrossel} >
                {DadosExames.map((dado, index) => (
                    <CardExames
                    Id= {dado.Id}
                    ref= {index === 0 ? cardRef : null}
                    ImagemIconeExames = {dado.ImagemIconeExames}
                    TituloCardExames = {dado.TituloCardExames}
                    />
                ))}
            </div>

            <div className="ContainerSetasCarrosselExames">
                <button onClick={ArrowLeftClick}><img src={ImagemSeta} alt="" className="SetaEsquerdaCarrossel" /></button>

                <button onClick={ArrowRightClick}><img src={ImagemSeta} alt="" className="SetaDireitaCarrossel" /></button>
            </div>


            <div className="ContainerBotaoAreaExames">
                <button className='BotaoExames'>
                    Agendar consulta
                </button>
            </div>
        </section>
    )
}

export default SectionExames;