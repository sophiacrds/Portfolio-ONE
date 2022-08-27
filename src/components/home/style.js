import styled from "styled-components";
import { Section } from "../../globalStyles";

export const HomeSec = styled(Section)`
	justify-content: space-between;
	background-color: var(--bg-home-color);

	@media (max-width: 650px) {
		flex-direction: column-reverse;
		align-items: flex-start;
		gap: 10px;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 65%;
	min-width: 425px;
	gap: 5px;

	h1 {
		font-size: var(--fs-h1);
	}
	p {
		font-size: var(--fs-ordinary);
	}
	@media (max-width: 650px) {
		width: 100%;
		min-width: unset;
	}
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 3% 0;

	ul {
		width: inherit;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 5px;
	}

	li {
		padding: 5px;
		margin: 2px;
		display: flex;
		align-items: center;
		gap: 4px;
		font-size: var(--fs-ordinary);
	}
	@media (max-width: 850px) {
		ul {
			justify-content: flex-start;
			gap: 10px;
		}
	}
	@media (max-width: 425px) {
		/* ul {
			justify-content: space-between;
			gap: 1%;
		} */
		/* li {
			font-size: calc(var(--fs-ordinary) - 2px);
		} */
	}
`;

export const Image = styled.img`
	width: 30%;
	border-radius: 100%;
	@media (max-width: 710px) {
		width: 27%;
	}
	@media (max-width: 650px) {
		width: 30%;
	}
	@media (max-width: 425px) {
		width: 35%;
	}
`;
