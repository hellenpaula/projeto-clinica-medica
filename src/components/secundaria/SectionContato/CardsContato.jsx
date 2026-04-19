
import './CardsContato.css'

function CardsContato(props) {
    return(
        <div className="CardContato">
            <div className="DivIconeCardContato" style={{backgroundColor: props.background}}>
                <img src={props.Icone} alt="" className="IconeCardContato" />
            </div>

            <div className="TextoCardContato">
                <h4 className="TituloCardContao">{props.Titulo}</h4>
                <p className="ParagrafoCardContato">{props.Paragrafo}</p>
            </div>
        </div>
    )
}

export default CardsContato;