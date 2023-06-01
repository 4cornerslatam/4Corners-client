import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { NavbarMobile } from "../NavbarMobile/NavbarMobile";
import { useState } from "react";

function Layout() {
  const [showNavbar, setShowNavbar] = useState(false)
    return(
        <main>
          <Header onToggle={() => setShowNavbar(!showNavbar)}/>
          {showNavbar && <NavbarMobile />}
          <Outlet />
          <Footer />
        </main>
    )
}

export { Layout }