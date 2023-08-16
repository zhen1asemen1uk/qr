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
	top: 0;
	right: 0;

	background: red;
	color: white;

	width: 200px;
	height: 50px;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 2px;
	opacity: 0.5;

	@media (max-width: 768px) {
		top: 49px;
		height: 16px;
		width: 100%;
		div {
			text-align: center;
			animation: ${textAnimation} 8s linear infinite;
			padding-left: 120%;
			white-space: nowrap;
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
