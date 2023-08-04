import React, { FC, RefObject } from "react";
import styled from "styled-components";
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

	border: 2px solid #e91e63;
	color: #e91e63;
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
			<ArrowSVG fill='#E91E63' />
		</ToQRStyled>
	);
};
