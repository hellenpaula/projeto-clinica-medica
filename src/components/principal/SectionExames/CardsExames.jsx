
// css
import  './CardsExames.css'


function CardsExames(props) {
    return(
        <div className="CardExames">
            <img src={props.ImagemIconeExames} alt="" className="ImgIconeExames" />
            <h4 className="TituloCardExames">{props.TituloCardExames}</h4>
        </div>
    )
}

export default CardsExames;