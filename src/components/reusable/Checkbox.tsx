import { ChangeEvent, FC } from "react";
import styled from "styled-components";

const Checkmark = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: 25px;
	width: 25px;
	background-color: #fad3e0;
	border: 1px solid #e91e63;
	border-radius: 2px;

	&:after {
		content: "";
		position: absolute;
		display: none;
	}
`;

const LabelStyled = styled.label`
	display: block;

	position: relative;

	width: fit-content;

	padding-left: 35px;
	margin-bottom: 12px;
	cursor: pointer;

	font-size: 22px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	input:checked ~ ${Checkmark} {
		background-color: #fad3e0;
	}

	input:checked ~ ${Checkmark}:after {
		display: block;
	}

	&:hover input ~ ${Checkmark} {
		background-color: #f6a6c0;
	}

	${Checkmark}:after {
		left: 8px;
		top: 4px;
		width: 5px;
		height: 10px;
		border: solid #e91e63;
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
`;

const InputStyled = styled.input`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
`;

interface ICheckbox {
	label: string;
	id?: string;
	name?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	defaultChecked?: boolean;
}

const Checkbox: FC<ICheckbox> = ({
	label,
	id,
	name,
	onChange,
	defaultChecked,
}) => {
	return (
		<>
			<LabelStyled htmlFor={id}>
				{label}
				<InputStyled
					type='checkbox'
					id={id}
					name={name}
					onChange={onChange}
					defaultChecked={defaultChecked}
				/>
				<Checkmark />
			</LabelStyled>
		</>
	);
};

export default Checkbox;
