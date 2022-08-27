import styled from "styled-components";

export const HeaderStyle = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: var(--pad-header);
	background: var(--bg-home-color);

	p {
		font-size: var(--fs-ordinary);
	}

	& > p {
		padding: 5px;
		font-weight: bold;
		width: fit-content;
		text-align: end;
		margin: 0 0 0 20px;
		&:hover {
			color: var(--accent-color-sec);
		}
		@media (max-width: 425px) {
			margin: 0;
		}
	}
	a {
		cursor: pointer;
	}
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	align-items: center;
	width: fit-content;

	img {
		width: 50px;
		@media (max-width: 425px) {
			width: 40px;
		}
	}
`;

export const Nav = styled.nav`
	width: 80%;

	ul {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		align-items: center;
		gap: 4%;
	}
	li {
		padding: 5px;
		font-size: var(--fs-ordinary);
	}
	@media (max-width: 950px) {
		ul {
			gap: 3%;
		}
		li {
			font-size: calc(var(--fs-ordinary) - 2.5px);
		}
	}
	@media (max-width: 860px) {
		display: none;
	}
`;
