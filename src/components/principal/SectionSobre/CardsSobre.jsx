
import './CardsSobre.css'

function CardsSobre(props) {
    return(
        <div className="CardSobre">
            {/* icone */}
            <i className={props.icon}></i>

            {/* div.textoCardSobre */}
            {/* h1 + p */}

            <div className="TextoCardSobre">
                <h4 className="tituloTextoCardSobre">{props.titulo}</h4>
                <p className="paragrafoTextoCardSobre">{props.paragrafo}</p>
            </div>

        </div>
    )
}

export default CardsSobre;