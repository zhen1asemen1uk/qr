import { FC, memo } from "react";
import styled, { keyframes } from "styled-components";

const rotating = keyframes`
	from {
	  transform: rotate(0deg);
	}
	to {
	  transform: rotate(360deg);
	}
  `;

const LoaderStyled = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;

	width: 15px;
	height: 15px;

	border: ${({ theme }) => `3px solid ${theme.loader.secondary}`};
	border-radius: 50%;
	border-top-color: ${({ theme }) => theme.loader.main};

	background: transparent;

	animation: ${rotating} 1s linear infinite;
`;

const Loader: FC = memo(() => {
	return (
		<LoaderStyled>
			<div />
		</LoaderStyled>
	);
});

export default Loader;
