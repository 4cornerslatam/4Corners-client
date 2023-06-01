import { Link } from "react-router-dom"

function NavbarOptionsList() {
    return(
        <ul className="navbar-list">
            <li><Link to='/'>ACERCA DE</Link></li>
            <li><Link to='/about'>SERVICIOS</Link></li>
            <li><Link to='/services'>¿QUIENES SOMOS?</Link></li>
            <li><Link to='/contact'>CONTACTO</Link></li>
        </ul>
    )
}

export { NavbarOptionsList }
