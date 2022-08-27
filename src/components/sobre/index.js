import React from "react";
import styled from "styled-components";
import { Section } from "../../globalStyles";

const SobreSec = styled(Section)`
	background: var(--bg-light-green);
	div {
		padding: 0 30% 0 0;
	}
	p {
		margin: 2% 0;
	}
	@media (max-width: 800px) {
		div {
			padding: 0;
		}
	}
`;

export default function SobreMim() {
	return (
		<SobreSec>
			<div class="content">
				<h2 id="about">Sobre mim</h2>
				<p>
					Sou mineira morando em Rondônia, tenho 23 anos e estou passando por
					uma intensa, mas gratificante, transição de carreira para o mundo do
					desenvolvimento web. Sou curiosa, criativa e autoditada apaixonada por
					aprendizados.
				</p>
				<p>
					Atualmente, sou Técnica Ambiental do IBAMA, graduanda em Direito pela
					Universidade Federal de Rondônia, aluna de desenvolvimento Front-End
					pela Escola Vai na Web.
				</p>
				<p>
					Tenho experiência com HTML, CSS e Javascript – com foco na biblioteca
					React. Possuo conhecimentos de UX/UI, metodologias ágeis, gestão de
					projetos e inovação aberta. Pretendo direcionar meus estudos e
					experiências para o desenvolvimento de soluções tecnológicas de
					impacto socioambiental.
				</p>
			</div>
		</SobreSec>
	);
}
