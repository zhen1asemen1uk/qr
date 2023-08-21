import styled from "styled-components";

import { type ButtonProps } from "../../types/resusable";
import { FC } from "react";

const WrappButton = styled.button<ButtonProps>`
	${({ pos }) => pos && `position: ${pos}`};
	${({ posT }) => posT && `top: ${posT}`};
	${({ posL }) => posL && `left: ${posL}`};
	${({ posR }) => posR && `right: ${posR}`};
	${({ posB }) => posB && `bottom: ${posB}`};

	display: flex;
	justify-content: center;
	align-items: center;

	padding: ${({ p }) => p ?? `15px 20px`};
	margin: ${({ m }) => m ?? `0`};

	background: ${({ bgColor, secondary, theme }) =>
		bgColor ?? (secondary ? `transparent` : theme.main)};

	border: ${({ secondary, theme }) =>
		secondary
			? `1px solid ${theme.button.main}`
			: `1px solid ${theme.button.secondary}`};
	border-radius: 2px;

	font-style: normal;
	font-weight: ${({ fw }) => fw || 600};

	text-align: center;
	letter-spacing: 0.75px;

	text-transform: uppercase;
	text-decoration: ${({ td }) => td || `none`};

	color: ${({ secondary, theme }) =>
		secondary ? theme.text.simple : theme.text.simple};

	font-size: 12px;

	transition: 0.2s;
	opacity: ${({ disabled }) => (disabled ? `0.5` : `1`)};
	cursor: ${({ disabled }) => (disabled ? `default` : `pointer`)};

	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Chrome/Safari/Opera */
	-khtml-user-select: none; /* Konqueror */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;

	outline: none !important;

	:hover {
		background: ${({ disabled, secondary }) =>
			disabled && secondary
				? `transparent`
				: disabled
				? `#5a6268`
				: secondary
				? `#5a6268`
				: `#5a6268`};

		color: ${({ disabled, secondary, theme }) =>
			disabled && secondary
				? theme.secondary
				: disabled
				? theme.main
				: secondary
				? theme.secondary
				: theme.text};

		box-shadow: ${({ disabled, secondary }) =>
			disabled && secondary
				? `none`
				: disabled
				? `none`
				: secondary
				? `none`
				: `none`};
	}

	:active {
		background: ${({ disabled, secondary }) =>
			disabled && secondary
				? `#5a6268`
				: disabled
				? `#5a6268`
				: secondary
				? `#4f565c`
				: `#4f565c`};

		color: ${({ disabled, secondary, theme }) =>
			disabled && secondary
				? theme.main
				: disabled
				? theme.main
				: secondary
				? `#FFFFFF`
				: `#FFFFFF`};

		box-shadow: ${({ disabled, secondary }) =>
			disabled && secondary
				? `none`
				: disabled
				? `none`
				: secondary
				? `none`
				: `0px 0px 5px 5px rgba(192,196,199,0.9)`};
	}

	${({ flex }) => flex && `flex: ${flex};`}
	min-width: ${({ minW }) => minW || "120px"};

	height: ${({ h }) => h ?? `50px`};
	width: ${({ w }) => w ?? `auto`};
`;

const Button: FC<ButtonProps> = ({
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

	fw,
	td,
	flex,
	minW,
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
			fw={fw}
			td={td}
			flex={flex}
			minW={minW}
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
