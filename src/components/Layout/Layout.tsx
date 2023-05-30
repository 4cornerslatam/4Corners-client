import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return(
        <main>
          <Header/>
          <Footer />
          <Outlet />
        </main>
    )
}

export { Layout }