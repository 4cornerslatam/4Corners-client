import { NavbarOptionsList } from '../NavbarOptionsList/NavbarOptionsList';

const NavbarMobile = (): JSX.Element => {
    return(
        <nav className='navbar-mobile'>
            <NavbarOptionsList />
        </nav>
    )
}

export { NavbarMobile }