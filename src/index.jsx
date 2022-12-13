import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./Contexts/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalContextProvider>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index path="/home" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/dentist/:id" element={<Detail />} />
					</Route>
				</Routes>
			</GlobalContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
