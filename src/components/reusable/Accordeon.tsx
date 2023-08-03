import React, { FC, ReactNode, useState } from "react";
import styled from "styled-components";
import { Col, Row } from "../../styles/styles";
import ArrowSVG from "./Svg's/ArrowSVG";

interface IAccordion {
	title: string;
	content: string | ReactNode | ReactNode[];
}

const AccordionItem = styled(Col)`
	border: none;
	color: white;
	background: #fad3e0 !important;

	cursor: pointer;
`;

const AccordionWrappTitle = styled(Row)`
	align-items: center;
	justify-content: space-between;
	background: #e91e63;
	padding: 15px 20px;
	width: 100%;
	border-radius: 2px;
`;

const WrappArrow = styled.div<{ isRotate: boolean }>`
	transform: ${({ isRotate }) =>
		isRotate ? `rotate(180deg)` : `rotate(0deg)`};
	transition: 0.5s;

	* {
		width: 20px;
		height: 20px;
	}
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
					<ArrowSVG fill='#FFF' />
				</WrappArrow>
			</AccordionWrappTitle>
			{isActive && <AccordionContent>{content}</AccordionContent>}
		</AccordionItem>
	);
};

export default Accordion;
