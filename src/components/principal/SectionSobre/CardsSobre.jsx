
import './CardsSobre.css'

function CardsSobre(props) {
    return(
        <div className="CardSobre">
            {/* icone */}
            <img src= {props.icon} alt=''></img>

            <div className="TextoCardSobre">
                <h4 className="tituloTextoCardSobre">{props.titulo}</h4>
                <p className="paragrafoTextoCardSobre">{props.paragrafo}</p>
            </div>

        </div>
    )
}

export default CardsSobre;