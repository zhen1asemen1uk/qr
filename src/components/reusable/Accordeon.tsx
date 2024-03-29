import { FC, ReactNode, memo, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Col, Row, Title } from "../../styles/styles";
import ArrowSVG from "./Svg's/ArrowSVG";

interface IAccordion {
	title: string;
	content: string | ReactNode | ReactNode[];
}

const AccordionItem = styled(Col)`
	background: ${({ theme }) => theme.main} !important;
	border: ${({ theme }) => `1px solid ${theme.secondary}`};
	color: ${({ theme }) => theme.text};

	cursor: pointer;
`;

const AccordionWrappTitle = styled(Row)`
	align-items: center;
	justify-content: space-between;

	background: ${({ theme }) => theme.main} !important;

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
	color: ${({ theme }) => theme.text.simple};

	padding: ${({ isActive }) => (isActive ? `15px 20px` : `0 20px`)};

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

const Accordion: FC<IAccordion> = memo(({ title, content }) => {
	const theme = useTheme();
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<AccordionItem>
			<AccordionWrappTitle onClick={() => setIsActive(!isActive)}>
				<Title>{title}</Title>
				<WrappArrow isRotate={isActive}>
					<ArrowSVG fill={theme.secondary} />
				</WrappArrow>
			</AccordionWrappTitle>
			<AccordionContent isActive={isActive}>{content}</AccordionContent>
		</AccordionItem>
	);
});

export default Accordion;
