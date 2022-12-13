
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname === "/") {
			navigate("/home");
		}
	}, [location, navigate]);


	return (
		<>
			{/* //Na linha seguinte deverá ser feito um teste se a aplicação
		// está em dark mode e deverá utilizar a classe dark ou light */}
			<div className={`app light}`}>
				<Navbar />
				<main>
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
