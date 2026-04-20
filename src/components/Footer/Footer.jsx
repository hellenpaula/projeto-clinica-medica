
// import Contato from '../../pages/contato/Contato.jsx'

import './Footer.css'

import {Link} from 'react-router-dom';

import ImagemLogoFooter from '../../assets/icone/estetoscopio.png'

function Footer() {

    
    const scrollToSection = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

    return(
        <footer className="ContainerFooter">

        <div className="TextAreaFooter">
            
            <div className="ContainerLogo">
                <div className="ContainerLogoImagemFooter">
                    <img src={ImagemLogoFooter} alt="" />
                    <h1 className="LogoFooter">
                        Medical
                    </h1>
                </div>

                <p className="ParagrafoLogoFooter">
                    Cuidando da sua saúde com dedicação, tecnologia e respeito.
                </p>
            </div>

            <div className="ContainerLinksPagFooter">
                <h4 className="TituloLinksPagFooter">Links da página</h4>

                <ul className="ListaLinksPagFooter">
                    
                    <li><a rel="stylesheet" href="#/" onClick={() => scrollToSection('Home')} >Home</a></li>
                    
                    <li><a rel="stylesheet" href="#/"onClick={() => scrollToSection('Sobre')} >Sobre</a></li>

                    <li><a rel="stylesheet" href="#/" onClick={() => scrollToSection('Especialidade')}>Especialidades</a></li>

                    <li><a rel="stylesheet" href="#/" onClick={() => scrollToSection('Exames')} >Exames</a></li>

                    <li><Link to="/contato" className="">Contato</Link></li>

                </ul>
            </div>

            <div className="ContainerLinksSuporteFooter">
                <h4 className="TituloLinksSuporteFooter">Suporte</h4>

                <ul className="ListaLinksSuporteFooter">
                    
                    <li><a rel="stylesheet" href="#" >Política e Privacidade</a></li>
                    
                    <li><a rel="stylesheet" href="#" >Termos e Condições</a></li>

                    <li><a rel="stylesheet" href="#" >FAQ</a></li>

                    <li><a rel="stylesheet" href="#" >Contato</a></li>
                </ul>
            </div>
        </div>
            
        </footer>
    )
}

export default Footer;