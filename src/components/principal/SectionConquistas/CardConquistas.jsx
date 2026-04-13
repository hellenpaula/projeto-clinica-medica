
// css
import './CardConquistas.css'


function CardConquistas(props) {

    return(
        <div className="CardConquistas">
            <img src={props.ImagemIconeConquistas} alt="" className='ImagemIconeConquistas'/>
            <h3 className="ValorCardConquistas">{props.ValorCardConquistas}</h3>
            <p className="ParagrafoCardConquistas">{props.ParagrafoCardConquistas}</p>
        </div>
    )

}

export default CardConquistas;