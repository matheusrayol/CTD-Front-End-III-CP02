import styles from "./styles.module.css";

const Card = () => {

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
							{/*
								Na linha seguinte o link deverá utilizar a matricula, 
								nome e sobrenome do dentista que vem da API
							*/}
							<h4 className={`fw-bold text-muted`}>Dr. Name</h4>
							<h6 className={`fw-bold text-muted`}>username</h6>
							<img className={`w-100`} src="images/doctor.jpg" alt="doctor placeholder" />
						</div>
						<a className={`btn btn-primary`} role="button" href="/dentist/MatriculaDoDentista">Visualizar Perfil</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
