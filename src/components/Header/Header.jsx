
import './Header.css'

function Header() {
    return(
       <header className="ContainerHeader">
            <h1 className="LogoHeader">Medical</h1>

            <nav className="Nav">
                <ul className="ContainerListaMenu">
                    <li className="ItemListaMenu">Home</li>
                    <li className="ItemListaMenu">Especialidades</li>
                    <li className="ItemListaMenu">Info</li>
                    <li className="ItemListaMenu">Exames</li>
                    <li className="ItemListaMenu">Contato</li>
                </ul>
            </nav>
       </header>    
    )
}

export default Header;