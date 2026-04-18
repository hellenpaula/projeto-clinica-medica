
// css
import  './CardsExames.css'
import { forwardRef } from 'react';

const CardsExames = forwardRef((props, ref) => {
    return(
        <div className="CardExames" ref={ref}>
            <img src={props.ImagemIconeExames} alt="" className="ImgIconeExames" style={{backgroundColor: props.background}} />
            <h4 className="TituloCardExames">{props.TituloCardExames}</h4>
        </div>
    )
});

export default CardsExames;