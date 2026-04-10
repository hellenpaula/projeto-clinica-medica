
import './SectionHome.css'

// img:
import imagem from '../../../assets/img/img home médico paciente.jpg'

function SectionHome() {
    return(
        <section className="SectionHome" id="Home">

            <div className="AreaTextoContainerHome">
                <h2 className="TituloAreaTextoHome">Sua saúde, <br/>
                Nossa prioridade</h2>

                <p className="ParagrafoAreaTextoHome">
                    Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.
                </p>
            </div>

            {/* <div className="ImgSectionHome">
                <img src={imagem} alt="" className='img'/>
            </div> */}

        </section>
    )
}

export default SectionHome;