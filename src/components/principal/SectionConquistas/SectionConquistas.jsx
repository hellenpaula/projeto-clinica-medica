

// css
import './SectionConquistas.css'

// imagem
import ImagemConquista from '../../../assets/icone/icone conquista.png'

import ImagemPessoas from '../../../assets/icone/pessoas.png'

import ImagemMedicos from '../../../assets/icone/equipe-medica.png'


// componente
import CardConquistas from './CardConquistas.jsx'

function SectionConquistas() {

    const DadosConquistas = [
        {
            Id: 1,
            ImagemIconeConquistas: ImagemConquista,
            ValorCardConquistas: "10 +",
            ParagrafoCardConquistas: "Anos de experiência"
        },
        {
            Id: 2,
            ImagemIconeConquistas: ImagemPessoas,
            ValorCardConquistas: "5,000 +",
            ParagrafoCardConquistas: "Paciêntes satisfeitos"
        },
        {
            Id: 3,
            ImagemIconeConquistas: ImagemMedicos,
            ValorCardConquistas: "150 +",
            ParagrafoCardConquistas: "Médicos e funcionários"
        }
    ]

    return(
        <section className="SectionConquistas">

            <div className="ContainerCardsAreaConquistas">
                
                {DadosConquistas.map((dado) => (
                    <CardConquistas
                    Id = {dado.Id}
                    ImagemIconeConquistas = {dado.ImagemIconeConquistas}
                    ValorCardConquistas = {dado.ValorCardConquistas}
                    ParagrafoCardConquistas = {dado.ParagrafoCardConquistas}
                    />
                ))}
            </div>
        </section>
    )
}

export default SectionConquistas;