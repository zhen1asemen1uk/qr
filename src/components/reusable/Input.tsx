import { FC } from "react";
import styled from "styled-components";

import { Col } from "../../styles/styles";
import { IInput } from "../../types/resusable";
import Loader from "./Loader";

const WrappInput = styled(Col)`
	cursor: pointer;
	color: ${({ theme }) => theme.text};
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
				{isLoading && <Loader />}
			</InputConteiner>
		</WrappInput>
	);
};

export default Input;
