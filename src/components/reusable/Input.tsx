import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

import { Col } from "../../styles/styles";
import { IInput } from "../../types/resusable";

const WrappInput = styled(Col)`
	cursor: pointer;
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
	right: 3px;
	top: 3px;

	width: 15px;
	height: 15px;

	border: 3px solid rgba(6, 35, 75, 0.2);
	border-radius: 50%;
	border-top-color: rgb(6, 35, 75);

	background: transparent;

	animation: ${rotating} 1s linear infinite;
`;

const InputConteiner = styled.div`
	position: relative;
`;

const InputStyled = styled.input`
	width: 100%;

	outline: none;
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
