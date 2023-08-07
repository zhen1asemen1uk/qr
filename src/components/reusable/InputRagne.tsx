import { FC } from "react";
import styled from "styled-components";

import { Col } from "../../styles/styles";
import { IInput } from "../../types/resusable";

const WrappInput = styled(Col)`
	cursor: pointer;

	input[type="range"] {
		height: 26px;
		-webkit-appearance: none;
		margin: 10px 0;
		width: 100%;
	}

	input[type="range"]:focus {
		outline: none;
	}

	input[type="range"]::-webkit-slider-runnable-track {
		width: 100%;
		height: 7px;
		cursor: pointer;
		animate: 0.2s;
		box-shadow: 0px 0px 0px #000000;
		background: #f6a6c0;
		border-radius: 2px;
		border: 0px solid #000000;
	}

	input[type="range"]::-webkit-slider-thumb {
		box-shadow: 0px 0px 0px #f6a6c0;
		border: 0px solid #f6a6c0;
		height: 20px;
		width: 5px;
		border-radius: 2px;
		background: #e91e63;
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -6.5px;
	}

	input[type="range"]:focus::-webkit-slider-runnable-track {
		background: #f6a6c0;
	}

	input[type="range"]::-moz-range-track {
		width: 100%;
		height: 7px;
		cursor: pointer;
		animate: 0.2s;
		box-shadow: 0px 0px 0px #000000;
		background: #f6a6c0;
		border-radius: 2px;
		border: 0px solid #000000;
	}

	input[type="range"]::-moz-range-thumb {
		box-shadow: 0px 0px 0px #f6a6c0;
		border: 0px solid #f6a6c0;
		height: 20px;
		width: 5px;
		border-radius: 2px;
		background: #e91e63;
		cursor: pointer;
	}

	input[type="range"]::-ms-track {
		width: 100%;
		height: 7px;
		cursor: pointer;
		animate: 0.2s;
		background: transparent;
		border-color: transparent;
		color: transparent;
	}

	input[type="range"]::-ms-fill-lower {
		background: #f6a6c0;
		border: 0px solid #000000;
		border-radius: 4px;
		box-shadow: 0px 0px 0px #000000;
	}

	input[type="range"]::-ms-fill-upper {
		background: #f6a6c0;
		border: 0px solid #000000;
		border-radius: 4px;
		box-shadow: 0px 0px 0px #000000;
	}

	input[type="range"]::-ms-thumb {
		margin-top: 1px;
		box-shadow: 0px 0px 0px #f6a6c0;
		border: 0px solid #f6a6c0;
		height: 20px;
		width: 5px;
		border-radius: 2px;
		background: #e91e63;
		cursor: pointer;
	}

	input[type="range"]:focus::-ms-fill-lower {
		background: #f6a6c0;
	}

	input[type="range"]:focus::-ms-fill-upper {
		background: #f6a6c0;
	}
`;

const InputConteiner = styled.div`
	position: relative;
`;

const InputStyled = styled.input`
	width: 100%;
	padding: 10px;

	background: #fad3e0;

	border: none;
	border-radius: 2px 2px 0 0;

	outline: none;
	transition: all 0.3s ease-in-out;
`;

const InputRagne: FC<IInput> = ({
	title = ``,

	onChange,
	value,
	secondary,
	id,
	type = `range`,
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
			</InputConteiner>
		</WrappInput>
	);
};

export default InputRagne;
