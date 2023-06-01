import './_header.scss'
import { useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react'
import logoPink from '../../assets/logo_v1_rosa@2x.png';

interface HeaderProps {
    onToggle: (isOpen: boolean) => void;
}

function Header(props: HeaderProps) {
    const [isOpen, setOpen] = useState(false);
    const [baseColor, setBaseColor] = useState('#DE5590')

    const handleToggle = () => {
        setOpen(!isOpen);
        props.onToggle(!isOpen);
        setBaseColor(isOpen ? '#DE5590' : '#000000');
    }

    return (
        <header className='header'>
            <Hamburger size={22} toggled={isOpen} toggle={handleToggle} color={baseColor}/>
            <img src={logoPink} alt="4corners-logo-pink" />
            {/* <div className='img-container'>
            </div> */}
        </header>
    )
}

export { Header } 