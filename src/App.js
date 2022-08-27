import React from "react";
import Contato from "./components/contato";
import Experiencias from "./components/experiencia";
import Footer from "./components/footer";
import Formacao from "./components/formacao";
import Header from "./components/header";
import Home from "./components/home";
import Skills from "./components/skills-hobbies";
import SobreMim from "./components/sobre";
import { GlobalStyle } from "./globalStyles";

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<main>
				<Home />
				<SobreMim />
				<Skills />
				<Formacao />
				<Experiencias />
				<Contato />
				<Footer />
			</main>
		</>
	);
}

export default App;
