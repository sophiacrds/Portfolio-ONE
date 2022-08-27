import React from "react";
import styled from "styled-components";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.svg";

const FooterBox = styled.footer`
	display: flex;
	height: 120px;
	justify-content: center;
	align-items: center;
	background: #c5d3d3;
`;

const FooterContent = styled.div`
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4px;

	p {
		width: 60%;
		text-align: center;
		font-size: calc(var(--fs-ordinary) - 3px);
		@media (max-width: 425px) {
			width: 80%;
		}
	}
`;

const SocialBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	a {
		width: fit-content;
	}
	img {
		width: 40px;
		@media (max-width: 425px) {
			width: 30px;
		}
	}
`;

export default function Footer() {
	return (
		<FooterBox>
			<FooterContent>
				<p>© 2022, Sophia Leão. All rights reserved.</p>
				<p>
					Projeto desenvolvido no escopo do programa Oracle Next Education –
					ONE.
				</p>
				<SocialBox>
					<a href="https://www.linkedin.com/in/sophialeao/">
						<img
							src={linkedin}
							alt="Linkedin"
							title="Me encontre no Linkedin!"
						/>
					</a>
					<a href="https://github.com/sophiacrds">
						<img src={github} alt="Github" title="Acompanhe meu Github!" />
					</a>
				</SocialBox>
			</FooterContent>
		</FooterBox>
	);
}
