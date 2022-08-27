import { Section, Button } from "../../globalStyles";
import styled from "styled-components";

export const ContatoSec = styled(Section)`
	gap: 3%;
	background: var(--bg-light-green);
`;

export const Img = styled.img`
	width: 45%;
	min-height: 460px;
	object-fit: cover;

	@media (max-width: 650px) {
		display: none;
	}
`;

export const DivContent = styled.div`
	display: flex;
	padding: 3%;
	flex-direction: column;
	justify-content: space-between;

	p {
		margin: 1% 0;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin: 2% 0;
	gap: 1%;

	input,
	textarea {
		width: 100%;
		padding: 1%;
		position: relative;
		margin: 1% 0;
		border: none;
		background: white;
		border-radius: 5px;
		font-family: var(--ff-ordinary);
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-bottom: 4px solid var(--accent-color);
	}

	input {
		height: 2.5rem;
	}
`;

export const Btn = styled(Button)`
	margin: 1.5% 0;
`;
