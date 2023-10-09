import styled, { keyframes } from "styled-components";

const textAnimation = keyframes` 
	0%{
	  transform: translate(0, 0);
	}
	
	100%{
	  transform: translate(-100%, 0);
	}
  `;

const BunnerStyled = styled.div`
	position: absolute;
	top: 49px;

	right: 0;

	background: red;
	color: white;

	height: 16px;
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 2px;

	div {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Chrome/Safari/Opera */
		-khtml-user-select: none; /* Konqueror */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none;

		text-align: center;
		animation: ${textAnimation} 20s linear infinite;
		padding-left: 120%;
		white-space: nowrap;

		outline: none !important;
	}

	@media (max-width: 768px) {
		div {
			animation: ${textAnimation} 8s linear infinite;
		}
	}
`;

const Bunner = () => {
	return (
		<BunnerStyled>
			<div>!!! Site in develop mode !!!</div>
		</BunnerStyled>
	);
};

export default Bunner;
