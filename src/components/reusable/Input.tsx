import { FC } from "react";
import styled, { keyframes } from "styled-components";

import { Col } from "../../styles/styles";
import { IInput } from "../../types/resusable";

const WrappInput = styled(Col)`
	cursor: pointer;
	color: ${({ theme }) => theme.text};
`;

const rotating = keyframes`
	from {
	  transform: rotate(0deg);
	}
	to {
	  transform: rotate(360deg);
	}
  `;

const Loader = styled.div`
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

const InputConteiner = styled.div`
	position: relative;
	border: none;
	border-bottom: ${({ theme }) => `1px solid ${theme.secondary}`};

	&:focus {
		border-bottom: ${({ theme }) => `2px solid ${theme.input.b}`} !important;
	}
`;

const InputStyled = styled.input`
	width: 100%;

	padding: 10px;

	background: ${({ theme }) => theme.input.bg};

	border: none;
	border-bottom: ${({ theme }) =>
		`2px solid ${theme.input.secondary}`} !important;

	border-radius: 2px 2px 0 0;

	outline: none;
	transition: all 0.3s ease-in-out;

	&:focus {
		border-bottom: ${({ theme }) => `2px solid ${theme.input.b}`} !important;
	}
`;

const Input: FC<IInput> = ({
	title = ``,

	onChange,
	value,
	secondary,
	id,
	type,
	name,
	h,
	w,
	p,
	m,
	placeholder,
	disabled,
	maxLength,
	onMouseDown,
	onMouseUp,
	onFocus,
	onBlur,
	step,
	min,
	max,
	autoFocus = false,
	isLoading,
}) => {
	return (
		<WrappInput h={h} w={w} p={p} m={m}>
			{title}
			<InputConteiner>
				<InputStyled
					disabled={disabled}
					id={id}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					type={type}
					name={name}
					maxLength={maxLength}
					onMouseDown={onMouseDown}
					onMouseUp={onMouseUp}
					onFocus={onFocus}
					onBlur={onBlur}
					step={step}
					min={min}
					max={max}
					autoFocus={autoFocus}
				/>
				{isLoading && (
					<Loader>
						<div />
					</Loader>
				)}
			</InputConteiner>
		</WrappInput>
	);
};

export default Input;
