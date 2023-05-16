import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

import { FileExtension } from "qr-code-styling";
import { Row } from "../../styles/styles";

const WrappDropdown = styled.div`
	position: relative;

	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Chrome/Safari/Opera */
	-khtml-user-select: none; /* Konqueror */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;

	height: 38px;
	width: 100%;

	padding: 2px 8px;

	box-sizing: border-box;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		"Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple InputColor Emoji",
		"Segoe UI Emoji", "Segoe UI Symbol", "Noto InputColor Emoji";
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	text-align: left;

	color: #212529;
	cursor: pointer;

	background-color: rgb(255, 255, 255);
	border-color: rgb(204, 204, 204);
	border-radius: 4px;
	border-style: solid;
	border-width: 1px;

	display: flex;
	align-items: center;

	transition: all 100ms ease 0s;

	outline: 0px !important;

	img {
		width: 20px;
		margin-left: 5px;
	}
	max-width: 80%;
	margin: 20px auto 0 auto;
`;

const WrappArrow = styled(Row)<{ isRotate: boolean }>`
	align-items: center;
	justify-content: center;
	transform: ${({ isRotate }) =>
		isRotate ? `rotate(180deg)` : `rotate(0deg)`};
	transition: 0.5s;
`;

const DropdownList = styled.ul`
	position: absolute;
	top: 40px;
	left: 0;

	width: 100%;
	height: fit-content;

	background-color: rgb(255, 255, 255);
	border-color: rgb(204, 204, 204);
	border-radius: 4px;
	border-style: solid;
	border-width: 1px;
	color: black;
`;

const DropdownEl = styled.li`
	padding: 2px 8px;
	width: 100%;
	height: fit-content;
	background: white;

	:hover {
		background: #ddebff !important;
		color: black !important;
	}
`;

interface IOption {
	title: string;
	value: FileExtension;
}
interface IDropdown {
	value: FileExtension;
	setValue: Dispatch<SetStateAction<FileExtension>>;
	options: IOption[];
}

const Dropdown: React.FC<IDropdown> = ({ options, value, setValue }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<WrappDropdown onClick={() => setIsOpen(!isOpen)}>
			<Row jc={`space-between`} w={`100%`}>
				<Row>{value.toUpperCase()}</Row>
				<Row>
					|
					<WrappArrow isRotate={isOpen}>
						{/* <img src={👇🏻} alt='black arr down' /> */}
						👇🏻
					</WrappArrow>
				</Row>
			</Row>

			{isOpen && (
				<DropdownList>
					{options.map((el) => (
						<DropdownEl
							key={`${el.value}`}
							onClick={() => {
								setIsOpen(false);
								setValue(el.value);
							}}
							style={{
								background: `${
									value.toLowerCase() === el.value ? `#2584FF` : `white`
								}`,
								color: `${
									value.toLowerCase() === el.value ? `white` : `black`
								}`,
							}}>
							{el.title}
						</DropdownEl>
					))}
				</DropdownList>
			)}
		</WrappDropdown>
	);
};

export default Dropdown;
