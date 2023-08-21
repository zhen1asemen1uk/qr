import styled from "styled-components";

interface FlexProps {
	pos?: string;
	posT?: string;
	posL?: string;
	posR?: string;
	posB?: string;
	d?: string;
	fd?: string;
	jc?: string;
	ai?: string;
	p?: string;
	m?: string;
	w?: string;
	minW?: string;
	maxW?: string;
	h?: string;
	minH?: string;
	maxH?: string;
	bg?: string;
	c?: string;
	g?: string;
	b?: string;
	br?: string;
	flex?: string;
	op?: string;
	ov?: string;
}

export const FlexBlock = styled.div<FlexProps>`
	${({ pos }) => pos && `position: ${pos}`};
	${({ posT }) => posT && `top: ${posT}`};
	${({ posL }) => posL && `left: ${posL}`};
	${({ posR }) => posR && `right: ${posR}`};
	${({ posB }) => posB && `bottom: ${posB}`};

	display: ${({ d }) => d ?? `flex`};
	flex-direction: ${({ fd }) => fd ?? `row`};
	${({ jc }) => jc && `justify-content:${jc}`};
	${({ ai }) => ai && `align-items:${ai}`};

	${({ p }) => p && `padding: ${p}`};
	${({ m }) => m && `margin: ${m}`};

	${({ w }) => w && `width: ${w}`};
	${({ minW }) => minW && `min-width: ${minW}`};
	${({ maxW }) => maxW && `max-width: ${maxW}`};

	${({ h }) => h && `height: ${h}`};
	${({ minH }) => minH && `min-height: ${minH}`};
	${({ maxH }) => maxH && `max-height: ${maxH}`};

	${({ c }) => c && `color: ${c}`};
	${({ bg }) => bg && `background: ${bg}`};
	${({ g }) => g && `gap: ${g}`};
	${({ b }) => b && `border: ${b}`};
	${({ br }) => br && `border-radius: ${br}`};
	${({ flex }) => flex && `flex: ${flex}`};
	${({ op }) => op && `opacity: ${op}`};
	${({ ov }) => ov && `overflow: ${ov}`};
`;

export const Wrapp = styled(FlexBlock)`
	flex-direction: ${({ fd }) => fd ?? `column`};
`;

export const Row = styled(FlexBlock)``;

export const Col = styled(FlexBlock)`
	flex-direction: ${({ fd }) => fd ?? `column`};
`;

const Text = styled.div`
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Chrome/Safari/Opera */
	-khtml-user-select: none; /* Konqueror */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;

	outline: none !important;
`;

export const Title = styled(Text)`
	color: ${({ theme }) => theme.text.title};

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}

	@media (max-width: 576px) {
		font-size: 1.2rem;
	}

	@media (max-width: 320px) {
		font-size: 1rem;
	}
`;

export const SimpleText = styled(Text)`
	color: ${({ theme }) => theme.text.simple};

	@media (max-width: 768px) {
		font-size: 1.2rem;
	}

	@media (max-width: 576px) {
		font-size: 1rem;
	}

	@media (max-width: 320px) {
		font-size: 0.8rem;
	}
`;

export const SmallText = styled.span`
	color: ${({ theme }) => theme.text.simple};

	@media (max-width: 768px) {
		font-size: 1rem;
	}

	@media (max-width: 576px) {
		font-size: 0.8rem;
	}

	@media (max-width: 320px) {
		font-size: 0.6rem;
	}
`;
