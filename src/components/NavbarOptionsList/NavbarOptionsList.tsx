import { Link } from "react-router-dom"
import { useContext} from 'react';
import { AppContext } from '../../context/AppContext';
import logoPink from '../../assets/logo_v1_rosa@2x.png'
import data from '../../translation/spanish.json'

const NavbarOptionsList = (): JSX.Element => {
    const { showNavbar, setShowNavbar} = useContext(AppContext)
    const navBar = data.navBar;

    const handleClick = () => {
        showNavbar === true ? 
        (setShowNavbar(!showNavbar)):
        (setShowNavbar(false))
    }

    return(
        <ul className="navbar-list">
            <li><Link to='/' onClick={handleClick}>{navBar.ABOUT}</Link></li>
            <li><Link to='/about' onClick={handleClick}>{navBar.TEAM}</Link></li>
            <div className="navbar-logo-desktop"><img src={logoPink} alt="" /></div>
            <li><Link to='/services' onClick={handleClick}>{navBar.SERVICES}</Link></li>
            <li><Link to='/contact' onClick={handleClick}>{navBar.CONTACT}</Link></li>
        </ul>
    )
}

export { NavbarOptionsList }
