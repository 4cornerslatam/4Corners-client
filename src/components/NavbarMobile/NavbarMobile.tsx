import { NavbarOptionsList } from '../NavbarOptionsList/NavbarOptionsList';
import './_navbarMovile.scss'

function NavbarMobile() {
    return(
        <nav className='navbar-mobile'>
            <NavbarOptionsList />
        </nav>
    )
}

export { NavbarMobile }