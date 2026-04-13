
import ImagemIconeDente from '../../../assets/icone/icone dente.png'

import './CardsEspecialidades.css'

function CardsEspecialidades(props) {
    return(
        <div className="CardEspecialidades">
            <img src={props.ImagemIconeEspeciali} alt="" className="ImgIconeCardEspeciali" style={{backgroundColor: props.background}} />
            <h4 className='TituloCardEspeciali'>{props.TituloCardEspeciali}</h4>
            <p className='ParagrafoCardEspeciali'>{props.ParagrafoCardEspeciali}</p>
        </div>
    )
}

export default CardsEspecialidades;