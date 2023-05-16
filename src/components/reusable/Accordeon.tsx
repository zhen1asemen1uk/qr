import React, { FC, ReactNode, useState } from "react";
import styled from "styled-components";
import { Col, Row } from "../../styles/styles";

interface IAccordion {
	title: string;
	content: string | ReactNode | ReactNode[];
}

const AccordionItem = styled(Col)`
	border: none;
	color: white;
	background: #ddebff !important;

	cursor: pointer;
`;

const AccordionWrappTitle = styled(Row)`
	align-items: center;
	justify-content: space-between;
	background: #0b064b;
	padding: 15px 20px;
	width: 100%;

	img {
		stroke: white;
		fill: white;
		width: 20px;
	}
`;

const WrappArrow = styled.div<{ isRotate: boolean }>`
	transform: ${({ isRotate }) =>
		isRotate ? `rotate(180deg)` : `rotate(0deg)`};
	transition: 0.5s;
`;

const AccordionContent = styled.div`
	padding: 15px 20px;
	color: black;
`;

const Accordion: FC<IAccordion> = ({ title, content }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<AccordionItem>
			<AccordionWrappTitle onClick={() => setIsActive(!isActive)}>
				<h5>{title}</h5>
				<WrappArrow isRotate={isActive}>
					{/* <img src={👇🏻} alt='White arr Down' /> */}
					<span>👇🏻</span>
				</WrappArrow>
			</AccordionWrappTitle>
			{isActive && <AccordionContent>{content}</AccordionContent>}
		</AccordionItem>
	);
};

export default Accordion;
