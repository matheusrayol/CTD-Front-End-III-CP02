import { useEffect } from "react";
import Card from "../Components/Card";

const Home = () => {

	useEffect(() => {
		//Nesse useEffect, deverá ser obtido todos os dentistas da API
		//Armazena-los em um estado para posteriormente fazer um map
		//Usando o componente <Card />
	}, []);

	return (

		<section className={`py-0`}>
			<div className={`container py-4 py-xl-5`}>
				<div className={`row mb-5`}>
					<div className={`col-md-8 col-xl-6 text-center mx-auto`}>
						<h2 className={`display-6 fw-bold mb-4`}>Home</h2>
					</div>
				</div>
				<div className={`row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4`}>
					<Card />
				</div>
			</div>
		</section>

	);
};

export default Home;
