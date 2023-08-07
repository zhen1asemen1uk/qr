import { FC, ReactNode, useState } from "react";
import styled from "styled-components";
import { Col, Row } from "../../styles/styles";
import ArrowSVG from "./Svg's/ArrowSVG";

interface IAccordion {
	title: string;
	content: string | ReactNode | ReactNode[];
}

const AccordionItem = styled(Col)`
	background: #fad3e0 !important;

	border: none;
	color: white;

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

const AccordionContent = styled.div<{ isActive: boolean }>`
	color: black;

	padding: ${({ isActive }) => (isActive ? `15px 20px` : `0 20px`)};

	overflow: hidden;
	transition: padding 0.6s;

	* {
		${({ isActive }) =>
			isActive
				? `
			max-height: 1000px;
			transition: max-height 0.5s ease-in;
			`
				: `
			max-height: 0;
			overflow: hidden;
			transition: max-height 0.5s ease-out;
			`}

		transform-origin: top;
	}
`;

const Accordion: FC<IAccordion> = ({ title, content }) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<AccordionItem>
			<AccordionWrappTitle onClick={() => setIsActive(!isActive)}>
				<h5>{title}</h5>
				<WrappArrow isRotate={isActive}>
					<ArrowSVG fill='#FFFFFF' />
				</WrappArrow>
			</AccordionWrappTitle>
			<AccordionContent isActive={isActive}>{content}</AccordionContent>
		</AccordionItem>
	);
};

export default Accordion;
