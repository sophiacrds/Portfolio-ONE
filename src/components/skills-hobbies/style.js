import styled from "styled-components";
import { Section, DivCard } from "../../globalStyles";

export const SkillsSec = styled(Section)`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;

	h2 {
		text-align: center;
	}
`;
export const CardsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: inherit;
	gap: 2%;
	@media (max-width: 1150px) {
		flex-wrap: wrap;
	}
	@media (max-width: 600px) {
		justify-content: space-evenly;
	}
`;
export const Card = styled(DivCard)`
	width: 15%;
	height: 130px;
	background: white;

	img {
		width: 60px;
	}
	p {
		text-transform: uppercase;
		font-size: calc(var(--fs-ordinary) - 2px);
		text-align: center;
	}

	@media (max-width: 1150px) {
		width: 30%;
	}
	@media (max-width: 600px) {
		width: 30%;
		height: 100px;
		min-width: 210px;

		img {
			width: 50px;
		}
	}
	@media (max-width: 500px) {
		min-width: unset;
		width: 45%;
	}
`;
