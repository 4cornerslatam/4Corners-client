import { Link } from "react-router-dom"
import './_header.scss'

function Header() {
    return (
        <header>
            <Link to='/'>
                <p>ACERCA DE</p>
            </Link>
            <Link to='/about'>
                <p>¿QUÉ HACEMOS?</p>
            </Link>
            <Link to='/services'>
                <p>ENSAYOS</p>
            </Link>
            <Link to='/contact'>
                <p>CONTACTO</p>
            </Link>
        </header>
    )
}

export { Header }