import React from "react";
import styled from "styled-components";

import { type ButtonProps } from "../types/resusable";

const WrappButton = styled.button<ButtonProps>`
	${({ pos }) => pos && `position: ${pos}`};
	${({ posT }) => posT && `top: ${posT}`};
	${({ posL }) => posL && `left: ${posL}`};
	${({ posR }) => posR && `right: ${posR}`};
	${({ posB }) => posB && `bottom: ${posB}`};

	display: flex;
	justify-content: center;
	align-items: center;

	padding: ${({ p }) => p ?? `0`};
	margin: ${({ m }) => m ?? `0`};

	background: ${({ bgColor, secondary }) =>
		bgColor ?? (secondary ? `transparent` : `black`)};

	border: ${({ secondary }) => (secondary ? `1px solid #494e5b` : `none`)};
	border-radius: 5px;

	font-style: normal;
	font-weight: 600;

	text-align: center;
	letter-spacing: 0.75px;
	text-transform: uppercase;

	color: ${({ secondary }) => (secondary ? `#c9a05d` : `white`)};

	transition: 0.2s;
	opacity: ${({ disabled }) => (disabled ? `0.5` : `1`)};
	cursor: ${({ disabled }) => (disabled ? `default` : `pointer`)};

	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Chrome/Safari/Opera */
	-khtml-user-select: none; /* Konqueror */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;

	:hover {
		/* background: ${({ disabled, secondary }) =>
			disabled && secondary
				? `transparent`
				: disabled
				? `#c9a05d`
				: secondary
				? `transparent`
				: `#FFE252`}; */

		color: ${({ disabled, secondary }) =>
			disabled && secondary
				? `c9a05d`
				: disabled
				? `#0b064b`
				: secondary
				? `#FFE252`
				: `#ffffff`};

		box-shadow: ${({ disabled, secondary }) =>
			disabled && secondary
				? `none`
				: disabled
				? `none`
				: secondary
				? `none`
				: `0px 0px 15px 2px rgba(0,0,0,0.75)`};
	}

	:active {
		background: ${({ disabled, secondary }) =>
			disabled && secondary
				? `transparent`
				: disabled
				? `#c9a05d`
				: secondary
				? `transparent`
				: `#000`};

		color: ${({ disabled, secondary }) =>
			disabled && secondary
				? `#c9a05d`
				: disabled
				? `#0b064b`
				: secondary
				? `#D8B300`
				: `#fff`};

		box-shadow: ${({ disabled, secondary }) =>
			disabled && secondary
				? `none`
				: disabled
				? `none`
				: secondary
				? `none`
				: `0px 0px 25px 8px rgba(0,0,0,0.75)`};
	}

	height: ${({ h }) => h ?? `50px`};
	width: ${({ w }) => w ?? `200px`};
`;

const Button: React.FC<ButtonProps> = ({
	title = `Button`,

	onClick,

	pos,
	posT,
	posL,
	posR,
	posB,

	secondary,

	h,
	w,
	p,
	m,

	disabled,
	bgColor,
	as = `button`,
	type = `button`,
}) => {
	return (
		<WrappButton
			pos={pos}
			posT={posT}
			posL={posL}
			posR={posR}
			posB={posB}
			h={h}
			w={w}
			p={p}
			m={m}
			secondary={secondary}
			disabled={disabled}
			bgColor={bgColor}
			as={as}
			type={type}
			onClick={onClick}>
			{title}
		</WrappButton>
	);
};

export default Button;
