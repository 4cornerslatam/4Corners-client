import { Link } from "react-router-dom"
import './_header.scss'

function Header() {
    return (
        <header>
            <Link to='/'>
                <p>Home</p>
            </Link>
            <Link to='/about'>
                <p>About us</p>
            </Link>
            <Link to='/services'>
                <p>Our services</p>
            </Link>
            <Link to='/contact'>
                <p>Contact us</p>
            </Link>
        </header>
    )
}

export { Header }