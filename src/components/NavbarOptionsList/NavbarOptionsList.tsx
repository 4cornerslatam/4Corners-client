import { Link } from "react-router-dom"
import { useContext} from 'react';
import { AppContext } from '../../context/AppContext';
import logoPink from '../../assets/logo_v1_rosa@2x.png'

function NavbarOptionsList() {
    const { showNavbar, setShowNavbar} = useContext(AppContext)
    const handleClick = () => {
        setShowNavbar(!showNavbar);
    }
    return(
        <ul className="navbar-list">
            <li><Link to='/' onClick={handleClick}>ACERCA DE</Link></li>
            <li><Link to='/about' onClick={handleClick}>SERVICIOS</Link></li>
            <div className="navbar-logo-desktop"><img src={logoPink} alt="" /></div>
            <li><Link to='/services' onClick={handleClick}>¿QUIENES SOMOS?</Link></li>
            <li><Link to='/contact' onClick={handleClick}>CONTACTO</Link></li>
        </ul>
    )
}

export { NavbarOptionsList }
