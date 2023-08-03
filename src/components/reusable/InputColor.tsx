import React, { FC } from "react";
import styled from "styled-components";
import { IInputColor } from "../../types/resusable";

const Color = styled.input`
	width: ${({ size }) => size || "38px"};
	height: ${({ size }) => size || "38px"};
`;

const LabelStyled = styled.label`
	${Color}[type="color"] {
		padding: 0;

		border: none;
		border-radius: 50%;

		background: transparent;

		overflow: hidden;
		outline: none;
		cursor: pointer;
	}
`;

const InputColor: FC<IInputColor> = ({
	id,
	value,
	onChange,
	size,
	onFocus,
	onBlur,
}) => {
	return (
		<LabelStyled>
			<Color
				onFocus={onFocus}
				onBlur={onBlur}
				id={id}
				type='color'
				value={value}
				onChange={onChange}
				size={size}
			/>
		</LabelStyled>
	);
};

export default InputColor;
