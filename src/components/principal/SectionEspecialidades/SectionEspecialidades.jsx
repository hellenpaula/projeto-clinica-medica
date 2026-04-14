
import './SectionEspecialidades.css';

import CardsEspecialidades from './CardsEspecialidades';


// imagens:
import ImagemIconeOdonto from '../../../assets/icone/icone dente.png'

import ImagemSeta from '../../../assets/icone/seta.png'

import { useRef } from 'react'

function SectionEspecialidades() {

    const DadosCardsEspecialidades = [
        {
            Id: 1,
            background: '#0f6bbb24',
            ImagemIconeEspeciali:  ImagemIconeOdonto,
            TituloCardEspeciali: 'Odontologia',
            ParagrafoCardEspeciali: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos temporibus mollitia libero velit excepturi, voluptas debitis deserunt labore rerum a nesciunt.'

        },
        {
            Id: 2,
            background: '#1cd70330',
            ImagemIconeEspeciali: ImagemIconeOdonto,
            TituloCardEspeciali: 'Neurologia',
            ParagrafoCardEspeciali: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos temporibus mollitia libero velit excepturi, voluptas debitis deserunt labore rerum a nesciunt.'
        },
        {
            Id: 3,
            background: '#d71c031f',
            ImagemIconeEspeciali: ImagemIconeOdonto,
            TituloCardEspeciali: 'Cardiologia',
            ParagrafoCardEspeciali: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos temporibus mollitia libero velit excepturi, voluptas debitis deserunt labore rerum a nesciunt.'
        },
        {
            Id: 4,
            background: '#fae84c58',
            ImagemIconeEspeciali: ImagemIconeOdonto,
            TituloCardEspeciali: 'Gastroenterologia',
            ParagrafoCardEspeciali: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos temporibus mollitia libero velit excepturi, voluptas debitis deserunt labore rerum a nesciunt.'
        },
        {
            Id: 5,
            background: '#ed33cb2c',
            ImagemIconeEspeciali: ImagemIconeOdonto,
            TituloCardEspeciali: 'Orthopedista',
            ParagrafoCardEspeciali: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos temporibus mollitia libero velit excepturi, voluptas debitis deserunt labore rerum a nesciunt.'
        },
        {
            Id: 6,
            background: '#a7a7a74b',
            ImagemIconeEspeciali: ImagemIconeOdonto,
            TituloCardEspeciali: 'Dermatologista',
            ParagrafoCardEspeciali: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos temporibus mollitia libero velit excepturi, voluptas debitis deserunt labore rerum a nesciunt.'
        }

    ]


    const carrossel = useRef(null);

    const ArrowLeftClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    }

    const ArrowRightClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    }


    return(
        <section className="SectionEspecialidades">
            <h3 className='TituloAreaTextoEspecialidade'>Especialidades</h3>
       

            <div className="ContainerCardsAreaEspecialidades" ref={carrossel}>

            {DadosCardsEspecialidades.map((dado) => (
                 <CardsEspecialidades 
                 Id={dado.Id}
                 background= {dado.background} 
                 ImagemIconeEspeciali={dado.ImagemIconeEspeciali}
                 TituloCardEspeciali = {dado.TituloCardEspeciali}
                 ParagrafoCardEspeciali = {dado.ParagrafoCardEspeciali}
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