import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppProvider } from "./context/AppContext";
import { Layout } from './components/Layout/Layout'
import { routes } from './utils/routes';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Team } from './pages/Team';
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";

function App() {
  return (
			<BrowserRouter>
				<AppProvider>
					<Routes>
						<Route element={<Layout />}>
							<Route path={routes.HOME} element={<Home />} />
							<Route path={routes.ABOUT} element={<About />} />
							<Route path={routes.TEAM} element={<Team />} />
							<Route path={routes.SERVICES} element={<Services />} />
							<Route path={routes.CONTACT} element={<Contact />} />
						</Route>
					</Routes>
				</AppProvider>
			</BrowserRouter>
		);
}

export default App
