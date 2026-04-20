
import './Header.css'

import {Link} from 'react-router-dom';

import ImagemLogo from '../../assets/icone/estetoscopio.png'

function Header() {

    const scrollToSection = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

    return(
       <header className="ContainerHeader">
        <div className="ContainerLogoHeader">
                <img src={ImagemLogo} alt="" />
                <h1 className="LogoHeader">Medical</h1>
        </div>

            <nav className="Nav">
                <ul className="ContainerListaMenu">
                    <li ><a href="#/" className="ItemListaMenu" >Home</a></li>
                    <li ><a href="#/" className="ItemListaMenu" onClick={() => scrollToSection('Sobre')}>Sobre</a></li>
                    <li ><a href="#/" className="ItemListaMenu" onClick={() => scrollToSection('Especialidade')} >Especialidade</a></li>
                    <li ><a href="#/" className="ItemListaMenu" onClick={() => scrollToSection('Exames')} >Exames</a></li>
                    <li ><Link to="/contato" className="ItemListaMenu">Contato</Link></li>
                </ul>
            </nav>
       </header>    
    )
}

export default Header;