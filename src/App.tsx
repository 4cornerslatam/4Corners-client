import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from './components/Layout/Layout'
import { routes } from './utils/routes';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.HOME} element={<Home />}/>
          <Route path={routes.ABOUT} element={<About />} />
          <Route path={routes.SERVICES} element={<Services />}/>
          <Route path={routes.CONTACT} element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
