import React from "react";
import github from "../../images/github.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import figma from "../../images/figma.png";
import kombucha from "../../images/kombucha.png";
import meditate from "../../images/meditate.png";
import photo from "../../images/photo.png";
import book from "../../images/book.png";
import samba from "../../images/samba.png";
import tennis from "../../images/tennis.png";
import { Card, CardsContainer, Container, SkillsSec } from "./style";

export default class Skills extends React.Component {
	state = {
		skills: [
			{
				title: "Github",
				img: github,
			},
			{
				title: "Html5",
				img: html,
			},
			{
				title: "Css3",
				img: css,
			},
			{
				title: "Javascript",
				img: js,
			},
			{
				title: "React",
				img: react,
			},
			{
				title: "Figma",
				img: figma,
			},
		],
		hobbies: [
			{
				title: "Kombucha",
				img: kombucha,
			},
			{
				title: "Meditar",
				img: meditate,
			},
			{
				title: "Fotografar",
				img: photo,
			},
			{
				title: "Ler",
				img: book,
			},
			{
				title: "Dançar samba",
				img: samba,
			},
			{
				title: "Jogar tênnis",
				img: tennis,
			},
		],
	};
	render() {
		return (
			<SkillsSec color={true}>
				<Container>
					<h2 id="skills">Skills</h2>
					<CardsContainer>
						{this.state.skills.map(({ img, title }, index) => (
							<Card key={index}>
								<img src={img} alt={title} title={title} />
								<p>{title}</p>
							</Card>
						))}
					</CardsContainer>
				</Container>
				<Container>
					<h2>Hobbies</h2>
					<CardsContainer>
						{this.state.hobbies.map(({ img, title }, index) => (
							<Card key={index}>
								<img src={img} alt={title} title={title} />
								<p>{title}</p>
							</Card>
						))}
					</CardsContainer>
				</Container>
			</SkillsSec>
		);
	}
}
