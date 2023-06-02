import { useContext } from "react";
import { AppContext } from '../../context/AppContext';

function Footer () {
    const { baseColor} = useContext(AppContext)
    
    return(
        <footer style={{backgroundColor: baseColor}}>
            I'm the footer
        </footer>
    )
}

export { Footer }