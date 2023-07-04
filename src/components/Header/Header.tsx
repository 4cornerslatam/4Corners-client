import { useContext, useEffect, useState} from 'react';
import { AppContext } from '../../context/AppContext';
import { Fade as Hamburger } from 'hamburger-react'
import logoPink from '../../assets/logo_v1_rosa@2x.png';
import logoWhite from '../../assets/logo_v1_bco@2x.png'
import { NavbarOptionsList } from '../NavbarOptionsList/NavbarOptionsList';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
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
        <div className='hamburger-container'>
          <Hamburger size={22} toggled={showNavbar} toggle={handleToggle} color={hamburgerColor} />
        </div>
        { showNavbar ? 
          (<Link to='/' onClick={handleToggle}>
            <img src={logoWhite} alt='4corners-logo-white'/>
          </Link>
          ) 
          :
          (<Link to='/'>
            <img src={logoPink} alt='4corners-logo-pink' />
          </Link>
          )
        }
        <div className='navbar-list-desktop'>
          <NavbarOptionsList />
        </div>
    </header>
    )
}

export { Header } 