import { useContext, useEffect, useState } from "react";
import { AppContext } from '../../context/AppContext';

const Footer = (): JSX.Element => {
    const { showNavbar, baseColor, setBaseColor } = useContext(AppContext)
    const [brandColor, setBrandColor] = useState(baseColor)
    
    useEffect(() => {
        setBaseColor(showNavbar ? '#C54F81' : '#FCFCFC' );
        setBrandColor(showNavbar ? '#FCFCFC' : '#C54F81')
    }, [showNavbar, setBaseColor])

    return(
        <footer style={{backgroundColor: baseColor}}>
          <div className="social-media_container" >
            <i className="fa-brands fa-linkedin-in" style={{color: brandColor}}></i>
            <i className="fa-brands fa-instagram" style={{color: brandColor}}></i>
            <i className="fa-brands fa-youtube" style={{color: brandColor}}></i>
          </div>
          <div className="copyright-container">
            <i className="fa-regular fa-copyright"></i>
            <p>2023 - 4corners</p>
          </div>
        </footer>
    )
}

export { Footer }