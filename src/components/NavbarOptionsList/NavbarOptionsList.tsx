import { Link } from "react-router-dom"

function NavbarOptionsList() {
    return(
        <ul className="navbar-list">
            <li><Link to='/'>ACERCA DE</Link></li>
            <li><Link to='/about'>¿QUE HACEMOS?</Link></li>
            <li><Link to='/services'>ENSAYOS</Link></li>
            <li><Link to='/contact'>CONTACTO</Link></li>
        </ul>
    )
}

export { NavbarOptionsList }
