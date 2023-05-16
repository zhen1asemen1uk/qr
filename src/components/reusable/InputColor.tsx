import React, { FC } from "react";
import styled from "styled-components";
import { IInputColor } from "../../types/resusable";

const Color = styled.input`
	width: ${({ size }) => size || "38px"};
	height: ${({ size }) => size || "38px"};
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
		<Color
			onFocus={onFocus}
			onBlur={onBlur}
			id={id}
			type='color'
			value={value}
			onChange={onChange}
			size={size}
		/>
	);
};

export default InputColor;
