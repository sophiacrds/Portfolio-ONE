import React from "react";
import { Content, HomeSec, Image, Nav } from "./style";
import Photo from "../../images/sophia.jpg";
import Arrow from "../../images/arrow.png";

export default function Home() {
	return (
		<HomeSec>
			<Content>
				<h1>Olá, meu nome é Sophia Leão e sou desenvolvedora Front-End!</h1>
				{/* <p>
					Sou Técnica Ambiental do IBAMA e graduanda em Direito pela
					Universidade Federal de Rondônia. Estou em transição de carreira para
					o mundo do desenvolvimento web – atualmente, sou aluna de
					desenvolvimento Front-End pela Escola Vai na Web
				</p> */}
				<Nav>
					<ul>
						<a
							href="https://github.com/sophiacrds"
							title="Me encontre no Github"
						>
							<li>
								Github <img src={Arrow} alt="" />
							</li>
						</a>
						<a
							href="https://www.linkedin.com/in/sophia-leão-733880101/"
							title="Me adicione no Linkedin"
						>
							<li>
								Linkedin <img src={Arrow} alt="" />
							</li>
						</a>
					</ul>
				</Nav>
			</Content>
			<Image src={Photo} alt="Foto da Sophia" />
		</HomeSec>
	);
}
