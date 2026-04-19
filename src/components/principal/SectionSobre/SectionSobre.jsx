
import './SectionSobre.css'

import CardsSobre from './CardsSobre.jsx'

// img:
import ImgSectionSobre from '../../../assets/img/img sobre médica paciente.jpg'

import ImgMaletaMedico from '../../../assets/icone/maleta medico.png'

import ImgAward from '../../../assets/icone/award 2.png'

import ImgHospital from '../../../assets/icone/hospital.png'



function SectionSobre() {

    const DadosCardSobre = [
        {
            id: 1,
            icon: ImgMaletaMedico,
            titulo: "Serviços de saúde 24 horas",
            paragrafo: "Atendimento disponível 24 horas por dia, 7 dias por semana, para cuidar de você quando mais precisar."
        },
        {
            id: 2,
            icon: ImgAward,
            titulo: "Padrões internacionais",
            paragrafo: "Seguimos protocolos internacionais de saúde para garantir segurança e qualidade em cada procedimento."
        },
        {
            id: 3,
            icon: ImgHospital,
            titulo: "Centro excelência",
            paragrafo: "Uma equipe multidisciplinar comprometida com os melhores resultados para a sua saúde."
        }
    ]


    return(
        <section className="SectionSobre" id="Sobre">

            
            <div className="ContainerAreaSobre"> 
                <div className="IntroducaoAreaTextoSobre">
                    <h3 className="TituloIntroducaoAreaSobre">Nossa Clínica</h3>

                    <p className="ParagrafoIntroducaoAreaSobre">
                        Há mais de 10 anos oferecemos atendimento humanizado e de excelência. Nossa clínica reúne especialistas em diversas áreas garantindo um cuidado completo, do diagnóstico ao tratamento.
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