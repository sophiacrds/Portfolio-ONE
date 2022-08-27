import React from "react";
import portflow from "../../images/demos/portflow.gif";
import encriptador from "../../images/demos/encriptador.gif";
import lol from "../../images/demos/lolpage.gif";
import contador from "../../images/demos/contador.gif";
import calculadora from "../../images/demos/calculadora.gif";
import todo from "../../images/demos/todo.gif";
import flavo from "../../images/demos/flavo.gif";
import movies from "../../images/demos/movies.gif";
import { BtnBox, CardInfo, Cards, CardXp, Img, XpSec } from "./style";
import { Button } from "../../globalStyles";

export default class Experiencias extends React.Component {
	state = {
		works: [
			{
				title: "Portflow",
				img: portflow,
				about: "Projeto de landing page resposiva em HTML5 e CSS3",
				code: "Projeto-Final-mod1-VaiNaWeb-Portflow",
				reverse: false,
			},
			{
				title: "Encriptador",
				img: encriptador,
				about:
					"Pequeno sistema de encriptação e desencriptação de texto feito em HTML5, CSS3 e Javascript",
				code: "Encriptador-ONE",
				reverse: true,
			},
			{
				title: "Landing page League of Legends",
				img: lol,
				about:
					"Landing page responsiva do jogo League of Legends utilizando Javascript para validação de login",
				code: "Landing-Page-LOL-VNW",
				reverse: false,
			},
			{
				title: "Contador simplicado",
				img: contador,
				about: "Pequeno projeto de contagem feito em HTML5, CSS3 e Javascript",
				code: "Contador-React-VNW",
				reverse: true,
			},
			{
				title: "Calculadora em React",
				img: calculadora,
				about: "Projeto de calculadora simplificada em React.js",
				code: "Calculator-REACT",
				reverse: false,
			},
			{
				title: "Todo List em React",
				img: todo,
				about:
					"Pequeno projeto que simula uma aplicação no estilo Todo-list, feito em React.js",
				code: "TodoList-VNW",
				reverse: true,
			},
			{
				title: "Flavo mobile",
				img: flavo,
				about:
					"Página desenvolvida em React.js para aprendizado sobre o conceito 'Mobile First'",
				code: "Flavo-MobileFirst-VNW",
				reverse: false,
			},
			{
				title: "Movies DB",
				img: movies,
				about: "Página desenvolvida em React.js com consumo de API",
				code: "Movies-api",
				reverse: true,
			},
		],
	};

	render() {
		return (
			<XpSec color={true}>
				<h2 id="experience">Experiência Profissional</h2>
				<Cards>
					{this.state.works.map((i, index) => (
						<CardXp key={index} reverse={i.reverse}>
							<Img src={i.img} alt={i.title} title={i.title} />
							<CardInfo reverse={i.reverse}>
								<h3>{i.title}</h3>
								<p>{i.about}</p>
								<BtnBox>
									<Button
										onClick={() => {
											document.location = `https://github.com/sophiacrds/${i.code}`;
										}}
									>
										Repositório
									</Button>
									<Button
										onClick={() => {
											document.location = `https://sophiacrds.github.io/${i.code}`;
										}}
										color={true}
									>
										Ver demo
									</Button>
								</BtnBox>
							</CardInfo>
						</CardXp>
					))}
				</Cards>
			</XpSec>
		);
	}
}
