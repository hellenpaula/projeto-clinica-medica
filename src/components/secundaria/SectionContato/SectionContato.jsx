
import './SectionContato.css'

import CardsContato from '../../secundaria/SectionContato/CardsContato'

import FormularioContato from './FormularioContato.jsx'

import MapaContato from '../../secundaria/SectionContato/MapaContato.jsx'

// imagens:
import IconeLocalizacao from '../../../assets/icone/location.png'

import IconeTelefone from '../../../assets/icone/telefone.png'


import IconeEmail from '../../../assets/icone/email.png'

import IconeWhatsapp from '../../../assets/icone/whatsapp.png'

import IconeInstagram from '../../../assets/icone/instagram.png'

import IconeFacebook from '../../../assets/icone/facebook.png'

import IconeYoutube from '../../../assets/icone/youtube.png'

function SectionContato() {

    const DadosContato = [
        {
            Id: 1,
            Icone: IconeLocalizacao,
            Titulo: 'Endereço',
            Paragrafo: 'Rio de janeiro, Centro',
            background: 'rgb(15 107 187 / 23%)'
        },
        {
            Id: 2,
            Icone: IconeTelefone,
            Titulo: 'Telefone',
            Paragrafo: '+55 210000-0000 ',
            background: 'rgb(28 215 3 / 21%)'
        },
         {
            Id: 3,
            Icone: IconeEmail,
            Titulo: 'E-Mail',
            Paragrafo: 'fulano@gmail.com',
            background: 'rgb(215 28 3 / 17%)'
        },

    ]



    return(
        <section className="SectionContato">
            <div className="TituloPrincipalSectionContato">
                <h3 className="TituloSectionContato">Duvidas?</h3>
                <p className="ParagrafoPrincipalSectionContato">  
           Para mais informações entre em contato conosco pelas                                             nossas redes sociais ou envie uma mensagem pelo formulário.
                </p>
            </div>

            <div className="ContainerConteudoSectionContato">
                <div className="AreaTextoSectionContato">
                    <h4 className="TituloAreaTextoSectionContato">Informações de contato</h4>
                    <p className="ParagrafoAreaTextoSectionContato">Há mais de 15 anos cuidando da saúde e bem-estar de nossos pacientes. Nossa missão é proporcionar atendimento médico </p>

                    <hr className="LinhaDivisoria" />

                    <div className="ContainerCardsContatos">
                        {DadosContato.map((dado) => (
                            <CardsContato
                            Id={dado.Id}
                            Icone={dado.Icone}
                            Titulo={dado.Titulo}
                            Paragrafo={dado.Paragrafo}
                            background={dado.background}
                            />
                        ))}
                    </div>

                    <hr className='LinhaDivisoria'/>

                    <div className="ContainerRedesSectionContato">
                        <h4 className="TituloAreaRedes">
                            Nossas redes sociais:
                        </h4>

                        <div className="IconesRedesSectionContato">
                        <button className="DivIconeRede">
                            <img src={IconeWhatsapp} alt="" />
                        </button>

                        <button className="DivIconeRede">
                            <img src={IconeInstagram} alt="" />
                        </button>

                        <button className="DivIconeRede">
                            <img src={IconeFacebook} alt="" />
                        </button>

                        <button className="DivIconeRede">
                            <img src={IconeYoutube} alt="" />
                        </button>
                        
                        
                        </div>
                        
                    </div>
                </div>

                <div className="AreaFormularioSectionContato">
                        <FormularioContato />
                </div>
            </div>

            
            <div className="AreaMapaContato">
                        <MapaContato />
            </div>

        </section>
    )
}

export default SectionContato;