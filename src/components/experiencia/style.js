import styled from "styled-components";
import { Button, Section } from "../../globalStyles";

export const XpSec = styled(Section)`
	flex-direction: column;
	align-items: center;
`;

export const Cards = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
`;

export const CardXp = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
	justify-content: center;
	align-items: center;
	gap: 4%;
	width: 90%;
	height: 350px;
	margin: 1% 0;
	padding: 1%;
	background: white;

	@media (max-width: 1100px) {
		width: 100%;
	}
	@media (max-width: 600px) {
		flex-direction: column;
		height: fit-content;
		padding: 2%;
		margin: 10px 0;
	}
	@media (max-width: 425px) {
		padding: 4%;
	}
`;

export const Img = styled.img`
	height: 90%;
	object-fit: contain;
	box-shadow: 0px 0px 10px 4px #80808031;

	@media (max-width: 950px) {
		height: 80%;
	}
	@media (max-width: 750px) {
		height: 60%;
	}
	@media (max-width: 600px) {
		width: 90%;
	}
`;

export const CardInfo = styled.div`
	width: 30%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	text-align: ${(props) => (props.reverse ? "right" : "left")};

	h3 {
		margin: 1.5% 0;
	}

	@media (max-width: 750px) {
		width: 40%;
	}
	@media (max-width: 600px) {
		width: 90%;
		text-align: center;
		padding: 1%;
	}
`;

export const BtnBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 4%;
	width: 100%;
	margin: 5% 0 0;

	@media (max-width: 600px) {
		margin: 2% 0 0;
	}
`;
