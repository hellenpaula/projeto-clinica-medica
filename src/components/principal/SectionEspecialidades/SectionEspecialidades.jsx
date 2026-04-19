
import './SectionEspecialidades.css';

import CardsEspecialidades from './CardsEspecialidades';


// imagens:
import ImagemIconeOdonto from '../../../assets/icone/icone dente.png'

import ImagemIconeNeuro from '../../../assets/icone/cerebro.png'

import ImagemIconeCardio from '../../../assets/icone/coracao.png'

import ImagemIconeGastro from '../../../assets/icone/estomago 2.png'

import ImagemIconeOrto from '../../../assets/icone/osso.png'

import ImagemIconeDerma from '../../../assets/icone/pele.png'


import ImagemSeta from '../../../assets/icone/seta.png'

import { useRef, useState } from 'react'

function SectionEspecialidades() {

    const DadosCardsEspecialidades = [
        {
            Id: 1,
            background: '#0f6bbb24',
            ImagemIconeEspeciali:  ImagemIconeOdonto,
            TituloCardEspeciali: 'Odontologia',
            ParagrafoCardEspeciali: 'Cuidados completos com a sua saúde bucal, de consultas preventivas a tratamentos estéticos e restauradores.',
            width:'2.9rem'

        },
        {
            Id: 2,
            background: '#1cd70330',
            ImagemIconeEspeciali: ImagemIconeNeuro,
            TituloCardEspeciali: 'Neurologia',
            ParagrafoCardEspeciali: 'Diagnóstico e tratamento de doenças do sistema nervoso com tecnologia avançada e equipe especializada.',
            width:'3.1rem'
        },
        {
            Id: 3,
            background: '#d71c031f',
            ImagemIconeEspeciali: ImagemIconeCardio,
            TituloCardEspeciali: 'Cardiologia',
            ParagrafoCardEspeciali: 'Acompanhamento preventivo e tratamento das doenças cardiovasculares com foco na qualidade de vida.',
            width:'3.3rem'
        },
        {
            Id: 4,
            background: '#fae84c58',
            ImagemIconeEspeciali: ImagemIconeGastro,
            TituloCardEspeciali: 'Gastroenterologia',
            ParagrafoCardEspeciali: 'Avaliação e tratamento do sistema digestivo, do esôfago          ao intestino, com cuidado e precisão.',
            width:'3.3rem'
        },
        {
            Id: 5,
            background: '#ed33cb2c',
            ImagemIconeEspeciali: ImagemIconeOrto,
            TituloCardEspeciali: 'Orthopedista',
            ParagrafoCardEspeciali: 'Tratamento de lesões, dores articulares e problemas musculoesqueléticos para sua mobilidade e bem-estar.',
            width:'3.3rem'
        },
        {
            Id: 6,
            background: '#a7a7a74b',
            ImagemIconeEspeciali: ImagemIconeDerma,
            TituloCardEspeciali: 'Dermatologista',
            ParagrafoCardEspeciali: 'Cuidados com a pele, cabelos e unhas, unindo saúde e estética com procedimentos modernos e seguros.',
            width:'3.3rem'
        }

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
        <section className="SectionEspecialidades" id='Especialidade'>
            <h3 className='TituloAreaTextoEspecialidade'>Especialidades</h3>
       

            <div className="ContainerCardsAreaEspecialidades" ref={carrossel} >

            {DadosCardsEspecialidades.map((dado, index) => (
                 <CardsEspecialidades 
                 Id={dado.Id}
                 ref={index === 0 ? cardRef : null}
                 background= {dado.background} 
                 ImagemIconeEspeciali={dado.ImagemIconeEspeciali}
                 TituloCardEspeciali = {dado.TituloCardEspeciali}
                 ParagrafoCardEspeciali = {dado.ParagrafoCardEspeciali}
                 width={dado.width}
                 />
            ))}
           

            </div>

            <div className="ContainerSetasCarrossel">
                <button onClick={ArrowLeftClick}><img src={ImagemSeta} alt="" className="SetaEsquerdaCarrossel" /></button>

                <button onClick={ArrowRightClick}><img src={ImagemSeta} alt="" className="SetaDireitaCarrossel" /></button>
            </div>


            <div className="ContainerBotaoAreaEspecialidade">
                <button className='BotaoEspecialidade'>
                    Agendar consulta
                </button>
            </div>
        </section>
    )
}

export default SectionEspecialidades;