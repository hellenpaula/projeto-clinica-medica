
// css
import  './CardsExames.css'
import { forwardRef } from 'react';

const CardsExames = forwardRef((props, ref) => {
    return(
        <div className="CardExames" ref={ref}>
            <div className="ContainerIcone">
                
                <img src={props.ImagemIconeExames} alt="" className="ImgIconeExames"
                style={{backgroundColor: props.background}} id={props.Id}/>
            </div>
            <h4 className="TituloCardExames">{props.TituloCardExames}</h4>
        </div>
    )
});

export default CardsExames;