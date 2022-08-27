import React from "react";
import logo from "../../images/logo-tree.png";
import { HeaderStyle, Logo, Nav } from "./style";

export default function Header() {
	return (
		<HeaderStyle>
			<Logo>
				<img src={logo} alt="" />
			</Logo>
			<Nav>
				<ul>
					<a href="#about">
						<li>Sobre mim</li>
					</a>
					<a href="#skills">
						<li>Skills</li>
					</a>
					<a href="#academic">
						<li>Formação</li>
					</a>
					<a href="#experience">
						<li>Projetos</li>
					</a>
				</ul>
			</Nav>
			<p>sphleaocardoso@gmail.com</p>
		</HeaderStyle>
	);
}
