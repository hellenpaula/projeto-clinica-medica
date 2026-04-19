
import './Header.css'

import {Link} from 'react-router-dom';

import ImagemLogo from '../../assets/icone/estetoscopio.png'

function Header() {
    return(
       <header className="ContainerHeader">
        <div className="ContainerLogoHeader">
                <img src={ImagemLogo} alt="" />
                <h1 className="LogoHeader">Medical</h1>
        </div>

            <nav className="Nav">
                <ul className="ContainerListaMenu">
                    <li ><a href="/#Home" className="ItemListaMenu" >Home</a></li>
                    <li ><a href="/#Sobre" className="ItemListaMenu">Sobre</a></li>
                    <li ><a href="/#Especialidade" className="ItemListaMenu" >Especialidade</a></li>
                    <li ><a href="/#Exames" className="ItemListaMenu" >Exames</a></li>
                    <li ><Link to="/contato" className="ItemListaMenu">Contato</Link></li>
                </ul>
            </nav>
       </header>    
    )
}

export default Header;