
import './SectionSobre.css'

import CardsSobre from './CardsSobre.jsx'

import ImgSectionSobre from '../../../assets/img/img sobre médica paciente.jpg'

// import ImgSectionSobre from '../../../assets/img/img sobre médica paciente - Copia.jpg'

import ImgMaletaMedico from '../../../assets/icone/maleta medico.png'

import ImgAward from '../../../assets/icone/award 2.png'

import ImgHospital from '../../../assets/icone/hospital.png'



function SectionSobre() {

    const DadosCardSobre = [
        {
            id: 1,
            icon: ImgMaletaMedico,
            titulo: "24 Hour Healthcare Services",
            paragrafo: "Call out a feature, benefit, or value of your site or product that can stand on its own."
        },
        {
            id: 2,
            icon: ImgAward,
            titulo: "International Standards",
            paragrafo: "Call out a feature, benefit, or value of your site or product that can stand on its own."
        },
        {
            id: 3,
            icon: ImgHospital,
            titulo: "Center of Excellence",
            paragrafo: "Call out a feature, benefit, or value of your site or product that can stand on its own."
        }
    ]


    return(
        <section className="SectionSobre" id="Sobre">

            {/* <div className="ContainerAreaTextoSobre"> */}
            <div className="ContainerAreaSobre"> 
                <div className="IntroducaoAreaTextoSobre">
                    <h3 className="TituloIntroducaoAreaSobre">Nossa Clínica</h3>

                    <p className="ParagrafoIntroducaoAreaSobre">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia obcaecati voluptatibus sunt, iste, autem odit repudiandae facilis vero animi neque voluptate reiciendis. 
                    </p>
                </div>

                <div className="ContainerCardsAreaSobre">
    
                    {DadosCardSobre.map((dado) => (
                         <CardsSobre
                         id={dado.id}
                         icon={dado.icon}
                         titulo={dado.titulo}
                         paragrafo={dado.paragrafo}
                         />
                    ))}

                </div>
               
               <div className="ContainerImgSectionSobre">
    
                <img src={ImgSectionSobre} alt="" className="ImgSectionSobre" />
            </div>

            </div>

            

        </section>
    )
}

export default SectionSobre;