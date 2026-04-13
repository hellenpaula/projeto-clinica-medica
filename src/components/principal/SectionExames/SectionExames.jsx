
// css
import  './SectionExames.css'


// componente
import CardExames from './CardsExames.jsx'

// imagem
import ImagemSangue from '../../../assets/icone/icone sangue.png'


function SectionExames() {

    const DadosExames = [
        {
            Id: 1,
            ImagemIconeExames: ImagemSangue,
            TituloCardExames: 'Coleta de sangue'
        },
        {
            Id: 1,
            ImagemIconeExames: ImagemSangue,
            TituloCardExames: 'Coleta de sangue'
        },
        {
            Id: 1,
            ImagemIconeExames: ImagemSangue,
            TituloCardExames: 'Coleta de sangue'
        },
        {
            Id: 1,
            ImagemIconeExames: ImagemSangue,
            TituloCardExames: 'Coleta de sangue'
        }
    ]

    return(
        <section className="SectionExames" id='Exames'>
            <h3 className="TituloAreaTextoExames">
                Exames oferecidos
            </h3>

            <div className="ContainerCardsAreaExames">
                {DadosExames.map((dado) => (
                    <CardExames
                    Id= {dado.Id}
                    ImagemIconeExames = {dado.ImagemIconeExames}
                    TituloCardExames = {dado.TituloCardExames}
                    />
                ))}
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