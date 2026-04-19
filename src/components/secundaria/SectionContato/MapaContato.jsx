
import './MapaContato.css'


function MapaContato() {
    return(
        
        <section className="ContainerMapaContato">
            <iframe
            width="1030"
            height="340"
            
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=-22.906149, -43.177256&z=16&output=embed"
            className="IframeMapa"
            >
            </iframe>
        </section>
    )
}

export default MapaContato;