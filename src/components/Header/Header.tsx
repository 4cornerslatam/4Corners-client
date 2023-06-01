import { useContext} from 'react';
import { AppContext } from '../../context/AppContext';
import { Fade as Hamburger } from 'hamburger-react'
import logoPink from '../../assets/logo_v1_rosa@2x.png';

function Header() {
    const { showNavbar, setShowNavbar, baseColor, setBaseColor } = useContext(AppContext)
    const handleToggle = () => {
        setShowNavbar(!showNavbar);
        setBaseColor(showNavbar ? '#C54F81' : '#000000');
    }
    return (
        <header className='header'>
            <Hamburger size={22} toggled={showNavbar} toggle={handleToggle} color={baseColor}/>
            <img src={logoPink} alt="4corners-logo-pink" />
        </header>
    )
}

export { Header } 