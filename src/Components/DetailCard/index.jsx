import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Contexts/GlobalContext";

import ScheduleFormModal from "../ScheduleFormModal";

import styles from "./styles.module.css";

const DetailCard = () => {
	const { id } = useParams();
	const [dentista, setDentista] = useState(undefined);
	const { theme } = useContext(GlobalContext);
	const isDarkMode = theme === "dark" || false;

	useEffect(() => {
		async function fetchData() {
			fetch(`https://dhodonto.ctdprojetos.com.br/dentista?matricula=${id}`)
				.then((response) => response.json())
				.then((data) => {
					setDentista(data);
				});
		}
		fetchData();
	}, [id]);
	return (
		<>
			{dentista ? (
				<>
					<section className={`py-5`}>
						<div className={`container`}>
							<div className={`row`}>
								<div className={`col-md-6 text-center`}>
									<img className={`img-fluid w-100`} src="../images/doctor.jpg" alt={dentista.nome} />
								</div>
								<div className={`col-md-5 col-xl-4 text-center text-md-start`}>
									<h2 className={`display-6 fw-bold mb-5`}>
										<span className={`underline pb-1`}>{dentista.nome}</span>
									</h2>
									<ul className={`list-group`}>
										<li className={`list-group-item`}>
											<span>{dentista.nome}</span>
										</li>
										<li className={`list-group-item`}>
											<span>{dentista.sobrenome}</span>
										</li>
										<li className={`list-group-item`}>
											<span>{dentista.usuario.username}</span>
										</li>
									</ul>
									<form method="post">
										<div className={`mb-3`}></div>
										<div className={`text-center mb-5`}>
											<button className={`btn btn-primary shadow`} data-bs-toggle="modal" data-bs-target="#exampleModal">Marcar Consulta</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>
				</>
			) : null}
			<ScheduleFormModal />
		</>
	);
};

export default DetailCard;
