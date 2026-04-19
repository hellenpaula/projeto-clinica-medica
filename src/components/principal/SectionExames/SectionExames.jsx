
// css
import  './SectionExames.css'


// componente
import CardExames from './CardsExames.jsx'

// imagem
import ImagemSangue from '../../../assets/icone/icone sangue.png'

import ImagemRaioX from '../../../assets/icone/raio x.png'

import ImagemEletro from '../../../assets/icone/eletrocardiograma.png'

import ImagemUltrassom from '../../../assets/icone/ultrassom.png'

import ImagemRessonancia from '../../../assets/icone/ressonancia.png'

import ImagemHolter from '../../../assets/icone/holter.png'

import ImagemEstomago from '../../../assets/icone/estomago.png'

import ImagemTomografia from '../../../assets/icone/tomografia.png'

import ImagemSeta from '../../../assets/icone/seta.png'


import { useRef, useState } from 'react'

function SectionExames() {

    const DadosExames = [
        {
            Id: 1,
            ImagemIconeExames: ImagemSangue,
            TituloCardExames: 'Coleta de sangue',
            background: 'rgba(15, 107, 187, 0.14)',
            className: 'icon1'
        },
        {
            Id: 2,
            ImagemIconeExames: ImagemRaioX,
            TituloCardExames: 'Raio-X',
            background: 'rgba(28, 215, 3, 0.19)',
            className: 'icon2'
        },
        {
            Id: 3,
            ImagemIconeExames: ImagemEletro,
            TituloCardExames: 'Eletrocardiograma',
            background: 'rgba(215, 28, 3, 0.12)'
        },
        {
            Id: 4,
            ImagemIconeExames: ImagemUltrassom,
            TituloCardExames: 'Ultrassom',
            background: 'rgba(255, 252, 74, 0.66)'
        },
        {
            Id: 5,
            ImagemIconeExames: ImagemRessonancia,
            TituloCardExames: 'Ressonância',
            background:'rgba(237, 51, 203, 0.173)'
        },
        {
            Id: 6,
            ImagemIconeExames: ImagemHolter,
            TituloCardExames: 'Holter e MAPA',
            background:'rgba(11 234 221 / 9%)'
        },
        {
            Id: 7,
            ImagemIconeExames: ImagemEstomago,
            TituloCardExames: 'Endoscopia',
            background: 'hsla(23, 90%, 60%, 0.62)'
        },
        {
            Id: 8,
            ImagemIconeExames: ImagemTomografia,
            TituloCardExames: 'Tomografia',
            background:'rgba(96 125 139 / 39%)'
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

        carrossel.current.scrollLeft -= larguraScroll;

    }

    const ArrowRightClick = (e) => {
        e.preventDefault();

        const larguraCard = cardRef.current.offsetWidth;
        const estilosContainer = window.getComputedStyle(carrossel.current);

        const gap =  parseInt(estilosContainer.gap);

        const larguraScroll =
        larguraCard + gap;

        carrossel.current.scrollLeft += larguraScroll;

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
                    background = {dado.background}
                    className = {dado.className}
                    />
                ))}
            </div>

            <div className="ContainerSetasCarrosselExames">
                <button onClick={ArrowLeftClick}><img src={ImagemSeta} alt="" className="SetaEsquerdaCarrossel" /></button>

                <button onClick={ArrowRightClick}><img src={ImagemSeta} alt="" className="SetaDireitaCarrossel" /></button>
            </div>


            <div className="ContainerBotaoAreaExames">
                <button className='BotaoExames'>
                    Agendar exame
                </button>
            </div>
        </section>
    )
}

export default SectionExames;