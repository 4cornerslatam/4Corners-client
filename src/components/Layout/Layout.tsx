import { useContext } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { NavbarMobile } from "../NavbarMobile/NavbarMobile";
import { AppContext } from "../../context/AppContext";

const Layout = (): JSX.Element => {
  const { showNavbar } = useContext(AppContext);
    return(
        <main>
          <Header />
          {showNavbar && <NavbarMobile />}
          {!showNavbar && <Outlet /> }
          <Footer />
        </main>
    )
}

export { Layout }