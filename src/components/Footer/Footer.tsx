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
            <a href="http://linkedin.com/company/4corners-coding-dreams" target="_blank"><i className="fa-brands fa-linkedin-in" style={{color: brandColor}}></i></a>
            <i className="fa-brands fa-instagram" style={{color: brandColor}}></i>
            <a href="https://www.youtube.com/channel/UC0XeWF8JhWQ1fknpvDSsQRA" target="_blank"><i className="fa-brands fa-youtube" style={{color: brandColor}}></i></a>
          </div>
          <div className="copyright-container">
            <i className="fa-regular fa-copyright"></i>
            <p>2023 - 4corners</p>
          </div>
        </footer>
    )
}

export { Footer }

