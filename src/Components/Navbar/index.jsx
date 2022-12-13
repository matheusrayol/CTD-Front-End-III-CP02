import styles from "./styles.module.css";

const Navbar = () => {

	return (
		<header className={`sticky-top`}>
			{/*
				Na linha seguinte deverá ser feito um teste se a aplicação
		        está em dark mode e deverá utilizar navbar-dark bg-dark ou 
				navbar-light bg-light 
			*/}
			<nav id="mainNav" className={`navbar navbar-light navbar-expand-md bg-light shadow`}>
				<div className={`container`}>
					{/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
					<a className={`navbar-brand d-flex align-items-center`} href="/">
						<svg className={styles[`odonto-icon`]} xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
							<path d="M394.1 212.8c-20.04 27.67-28.07 60.15-31.18 93.95c-3.748 41.34-8.785 82.46-17.89 122.8l-6.75 29.64c-2.68 12.14-13.29 20.78-25.39 20.78c-12 0-22.39-8.311-25.29-20.23l-29.57-121.2C254.1 322.6 240.1 311.4 224 311.4c-16.18 0-30.21 11.26-34.07 27.23l-29.57 121.2c-2.893 11.92-13.39 20.23-25.29 20.23c-12.21 0-22.71-8.639-25.5-20.78l-6.643-29.64c-9.105-40.36-14.14-81.48-17.1-122.8C81.93 272.1 73.9 240.5 53.86 212.8c-18.75-25.92-27.11-60.15-18.43-96.57c9.428-39.59 40.39-71.75 78.85-82.03c20.14-5.25 39.54-.4375 57.32 9.077l86.14 56.54c6.643 4.375 15.11 1.86 18.96-4.264c4.07-6.454 2.25-15.09-4.18-19.36l-24.21-15.86c3-1.531 6.215-2.735 9-4.813c22.39-16.84 48.75-28.65 76.39-21.33c38.46 10.28 69.43 42.43 78.85 82.03C421.2 152.7 412.9 187 394.1 212.8z"></path>
						</svg>
						<span>DH Odonto</span>
					</a>
					
					<button className={`navbar-toggler`} data-bs-toggle="collapse" data-bs-target="#navMenu">
						<span className={`visually-hidden`}>Toggle navigation</span>
						<span className={`navbar-toggler-icon`}></span>
					</button>

					<div id="navMenu" className={`collapse navbar-collapse`}>
						<ul className={`navbar-nav mx-auto`}>
							<li className={`nav-item`}>
								{/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
								<a className={`nav-link`} href="pricing.html">Home</a>
							</li>
						</ul>
						
						{/* 
							Se o usuário estiver logado, deverá aparecer um botão de logout
							que vai apagar o token do localstorage.
							Se o usuário estiver deslogado, um link fará um redirecionamento, com react-router,
							ao formulário de login
							O botão de logout deverá ser testado darkmode
							se sim, btn-dark, se não, btn-light
						*/}
						<a className={`btn btn-primary shadow`} role="button" href="signup.html">Login</a>
						<div className={`d-flex ms-4`}>
							<div className={`form-check form-switch ms-auto`}>
								{/* 
									Ao ser clicado, esse botão mudará a aplicação para dark mode ou light mode.
				 					Lembre-se de usar um estado no contexto para fazer essa alteração.
				 					Na linha seguinte deverá ser feito um teste se a aplicação
				 					está em dark mode e deverá utilizar o icone ☀ ou 🌙 e btn-dark ou btn-light
								*/}
								<input id="formCheck" className={`form-check-input`} type="checkbox" />
								<label className={`form-check-label`} htmlFor="darkMode">
									<svg className={`bi bi-brightness-high`} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
										<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
									</svg>
								</label>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
