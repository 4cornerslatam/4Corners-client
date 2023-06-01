import { useContext, useEffect, useState} from 'react';
import { AppContext } from '../../context/AppContext';
import { Fade as Hamburger } from 'hamburger-react'
import logoPink from '../../assets/logo_v1_rosa@2x.png';
import logoWhite from '../../assets/logo_v1_bco@2x.png'

function Header() {
    const { showNavbar, setShowNavbar, baseColor, setBaseColor } = useContext(AppContext)
    const [hamburgerColor, setHamburgerColor] = useState(baseColor)
    
    useEffect(() => {
        setBaseColor(showNavbar ? '#C54F81' : '#FCFCFC' );
        setHamburgerColor(showNavbar ? '#FCFCFC' : '#C54F81')
    }, [showNavbar, setBaseColor])

    const handleToggle = () => {
        setShowNavbar(!showNavbar);
    }
    return (
        <header className='header' style={{backgroundColor: baseColor}}>
            <Hamburger size={22} toggled={showNavbar} toggle={handleToggle} color={hamburgerColor}/>
            { showNavbar ? (
                <img src={logoWhite} alt='4corners-logo-white'/>
                ) : (
                    <img src={logoPink} alt='4corners-logo-pink' />
                    )}
        </header>
    )
}

export { Header } 