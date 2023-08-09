import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

import { Col } from "../../styles/styles";
import { IInput } from "../../types/resusable";

const WrappInput = styled(Col)`
	cursor: pointer;
	color: rgb(233, 30, 99);
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

	border: 3px solid rgba(246, 0, 82, 0.2);
	border-radius: 50%;
	border-top-color: ${({ theme }) => theme.main};

	background: transparent;

	animation: ${rotating} 1s linear infinite;
`;

const InputConteiner = styled.div`
	position: relative;
`;

const InputStyled = styled.input`
	width: 100%;

	padding: 10px;

	background: ${({ theme }) => theme.secondary};

	border: none;
	border-bottom: ${({ theme }) => `2px solid ${theme.secondary}`} !important;
	border-radius: 2px 2px 0 0;

	outline: none;
	transition: all 0.3s ease-in-out;

	&:focus {
		border-bottom: ${({ theme }) => `2px solid ${theme.main}`} !important;
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
