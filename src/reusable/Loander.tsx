import React from "react";
import styled, { keyframes } from "styled-components";

import DollarSoinSVG from "./Svg's/DollarSoinSVG";
import { FlexBlock } from "../styles/styles";

const bounceInTop = keyframes`
	0% {
		transform: translateY(-500px);
		animation-timing-function: ease-in;
		opacity: 0;
	}
	38% {
		transform: translateY(0);
		animation-timing-function: ease-out;
		opacity: 1;
	}
	55% {
		transform: translateY(-65px);
		animation-timing-function: ease-in;
	}
	72% {
		transform: translateY(0);
		animation-timing-function: ease-out;
	}
	81% {
		transform: translateY(-28px);
		animation-timing-function: ease-in;
	}
	90% {
		transform: translateY(0);
		animation-timing-function: ease-out;
	}
	95% {
		transform: translateY(-8px);
		animation-timing-function: ease-in;
	}
	100% {
		transform: translateY(0);
		animation-timing-function: ease-out;
	}
		`;

const Wrap = styled(FlexBlock)`
	animation: ${bounceInTop} 1.1s linear infinite alternate-reverse both;
`;

const Loander: React.FC = () => {
	return (
		<Wrap>
			<DollarSoinSVG />
		</Wrap>
	);
};

export default Loander;
