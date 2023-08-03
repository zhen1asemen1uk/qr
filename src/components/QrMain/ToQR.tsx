import React, { FC, RefObject } from "react";
import styled from "styled-components";

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
	color: #fff;
	backdrop-filter: blur(10px);

	img {
		height: 25px;
		width: 30px;
	}
`;

interface IToQR {
	refQrStyled: RefObject<HTMLDivElement>;
}

export const ToQR: FC<IToQR> = ({ refQrStyled }) => {
	return (
		<ToQRStyled
			onClick={() => {
				if (refQrStyled && refQrStyled?.current) {
					refQrStyled?.current.scrollIntoView({ behavior: "smooth" });
				}
			}}>
			<strong>QR</strong>
			{/* <img src={👇🏻} alt='black arrow down' /> */}
			<span>👇🏻</span>
		</ToQRStyled>
	);
};
