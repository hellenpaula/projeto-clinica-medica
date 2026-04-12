
import './SectionSobre.css'

import CardsSobre from './CardsSobre.jsx'

import ImgSectionSobre from '../../../assets/img/img sobre médica paciente.jpg'

function SectionSobre() {

    const DadosCardSobre = [
        {
            id: 1,
            icon: "fa-solid fa-briefcase-medical" ,
            titulo: "24 Hour Healthcare Services",
            paragrafo: "Call out a feature, benefit, or value of your site or product that can stand on its own."
        },
        {
            id: 2,
            icon: "fa-solid fa-award",
            titulo: "International Standards",
            paragrafo: "Call out a feature, benefit, or value of your site or product that can stand on its own."
        },
        {
            id: 3,
            icon: "fa-regular fa-hospital",
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