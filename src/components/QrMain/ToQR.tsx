import React, { FC, RefObject } from "react";
import styled, { useTheme } from "styled-components";
import useIsVisible from "../../hooks/useIsVisible";
import ArrowSVG from "../reusable/Svg's/ArrowSVG";

const ToQRStyled = styled.div`
	position: fixed;
	bottom: 25px;
	right: 25px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 50px;
	height: 50px;

	padding: 0;

	border-radius: 50%;

	border: ${({ theme }) => `2px solid ${theme.secondary}`};
	color: ${({ theme }) => theme.main};
	backdrop-filter: blur(10px);

	svg {
		width: 20px;
	}
`;

interface IToQR {
	refScrollTo: RefObject<HTMLDivElement>;
	size: number;
}

export const ToQR: FC<IToQR> = ({ refScrollTo, size }) => {
	const theme = useTheme();
	const isVisible = useIsVisible(refScrollTo);

	if (size > 1280 || isVisible) return null;

	return (
		<ToQRStyled
			onClick={(e) => {
				if (refScrollTo?.current) {
					refScrollTo?.current.scrollIntoView({
						behavior: "smooth",
					});
				}
			}}>
			<strong>QR</strong>
			<ArrowSVG fill={theme.main} />
		</ToQRStyled>
	);
};
