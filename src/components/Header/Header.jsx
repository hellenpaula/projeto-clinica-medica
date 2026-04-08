
import './Header.css'

function Header() {
    return(
       <header className="ContainerHeader">
            <h1 className="LogoHeader">Medical</h1>

            <nav className="Nav">
                <ul className="ContainerListaMenu">
                    <li ><a href="#Home" className="ItemListaMenu" >Home</a></li>
                    <li ><a href="#Especialidade" className="ItemListaMenu">Especialidades</a></li>
                    <li ><a href="#Info" className="ItemListaMenu" >Info</a></li>
                    <li ><a href="#Exames" className="ItemListaMenu" >Exames</a></li>
                    <li className="ItemListaMenu">Contato</li>
                </ul>
            </nav>
       </header>    
    )
}

export default Header;