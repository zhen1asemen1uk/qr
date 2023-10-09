import { FC } from "react";
import styled from "styled-components";
import { IInputColor } from "../../types/resusable";

const Color = styled.input`
	width: ${({ size }) => size || "38px"};
	height: ${({ size }) => size || "38px"};
`;

const LabelStyled = styled.label`
	border-radius: 50%;

	${Color}[type="color"] {
		cursor: pointer;
		-webkit-appearance: none;
		border: ${({ theme }) => `1px solid ${theme.input.bg}`};
		background: transparent;
		border-radius: 50%;
		overflow: hidden;
		outline: none;
	}

	${Color}[type="color"]::-webkit-color-swatch-wrapper {
		padding: 0;
	}

	${Color}[type="color"]::-webkit-color-swatch {
		border: none;
		border-radius: 50%;
	}

	/* firefox */
	${Color}[type="color"]::-moz-focus-inner {
		border: none;
		padding: 0;
		border-radius: 50%;
	}

	${Color}[type="color"]::-moz-color-swatch {
		border: none;
		border-radius: 50%;
	}
`;

const InputColor: FC<IInputColor> = ({
	id,
	value,
	onChange,
	size,
	onFocus,
	onBlur,
	onMouseDown,
	onMouseUp,
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
				onMouseDown={onMouseDown}
				onMouseUp={onMouseUp}
			/>
		</LabelStyled>
	);
};

export default InputColor;
