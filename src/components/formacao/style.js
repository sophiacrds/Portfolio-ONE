import styled from "styled-components";
import { DivCard, Section } from "../../globalStyles";

export const FormacaoSec = styled(Section)`
	flex-direction: column;
	justify-content: space-between;
	h2 {
		width: 80%;
		text-align: center;
	}
`;
export const Cards = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;

	@media (max-width: 650px) {
		flex-direction: column;
		align-items: center;
	}
`;
export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 30%;
	/* height: 300px; */
	margin: 2%;
	text-align: center;

	@media (max-width: 650px) {
		width: 85%;
	}
	@media (max-width: 425px) {
		width: 80%;
		/* height: 200px; */
		margin: 20px 0;
	}
`;

export const Img = styled.img`
	width: 85%;
	height: 150px;
	padding: 6%;
	display: flex;
	align-items: center;
	justify-content: center;
	object-fit: contain;
	background: white;
	border-radius: 15px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.15);

	/* @media (max-width: 1150px) {
		width: 150px;
	} */
	@media (max-width: 650px) {
		width: 80%;
		height: 200px;
	}
	@media (max-width: 425px) {
		height: unset;
	}
`;

export const Label = styled.div`
	margin: 10px 0 0;
	width: 100%;

	@media (max-width: 1150px) {
		p {
			font-size: calc(var(--fs-ordinary) - 3px);
		}
	}
	@media (max-width: 650px) {
		p {
			font-size: initial;
		}
	}
	@media (max-width: 425px) {
		width: 70%;
	}
	@media (max-width: 320px) {
		width: 65%;
	}
`;
