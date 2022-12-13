import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Contexts/GlobalContext";

import styles from "./styles.module.css";

const Card = ({nome, matricula, usuario}) => {
	const { theme } = useContext(GlobalContext);
	const isDarkMode = theme === "dark" || false;

	return (

		<>
			{/*
				Na linha seguinte deverá ser feito um teste se a aplicação
				está em dark mode e deverá utilizar o css correto
			*/}
			<div className={`col`}>
				<div className={`card h-100`}>
					<div className={`card-body border-5 d-flex flex-column justify-content-between p-4`}>
						<div className={`pb-4`}>
							<h4 className={`fw-bold text-muted`}>{nome}</h4>
							<h6 className={`fw-bold text-muted`}>{usuario?.username}</h6>
							<img className={`w-100`} src="images/doctor.jpg" alt={nome} />
						</div>
						<a href={`/dentist/${matricula}`} className={`btn btn-primary`} role="button">
							Visualizar Perfil
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
