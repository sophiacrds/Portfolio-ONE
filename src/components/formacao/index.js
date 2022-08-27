import React from "react";
import unir from "../../images/unir.png";
import vnw from "../../images/vnw.png";
import alura from "../../images/alura.png";
import { Card, Cards, FormacaoSec, Img, Label } from "./style";

export default class Formacao extends React.Component {
	state = {
		courses: [
			{
				title: "Grad. em Direito",
				img: unir,
				inst: "Univ. Federal de Rondônia (2017-!)",
				link: "https://www.unir.br/homepage",
			},
			{
				title: "Des. Front-end",
				img: vnw,
				inst: "Escola Vai na Web (2022)",
				link: "https://www.vainaweb.com.br",
			},
			{
				title: "Des. Full-stack Java",
				img: alura,
				inst: "Alura / Oracle - ONE (2022)",
				link: "https://www.alura.com.br",
			},
		],
	};

	render() {
		return (
			<FormacaoSec>
				<h2 id="academic">Formação acadêmica e profissional</h2>
				<Cards>
					{this.state.courses.map((i, index) => (
						<Card>
							<Img src={i.img} alt={i.title} title={i.inst} />
							<Label>
								<a href={i.link}>
									<h4>{i.title}</h4>
								</a>
								<p>{i.inst}</p>
							</Label>
						</Card>
					))}
				</Cards>
			</FormacaoSec>
		);
	}
}
