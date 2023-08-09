import { FC, useState } from "react";
import styled, { useTheme } from "styled-components";
import { FlexBlock } from "../../styles/styles";
import ArrowSVG from "./Svg's/ArrowSVG";

const SelectStyled = styled(FlexBlock)<{ isOpen: boolean }>`
	position: relative;

	width: 100%;
	padding: 10px;

	color: ${({ theme }) => theme.main};

	background: ${({ theme }) => theme.secondary};
	border-radius: 2px;

	display: flex;
	justify-content: center;
	align-items: center;

	z-index: 10;

	cursor: pointer;

	border-bottom: ${({ isOpen, theme }) =>
		!isOpen ? `2px solid ${theme.secondary}` : `2px solid ${theme.main}`};
`;

const OptionConteiner = styled(FlexBlock)`
	position: absolute;
	top: 37px;
	left: 0;

	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const OptionStyled = styled(FlexBlock)`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	padding: 10px;

	background: ${({ theme }) => theme.secondary};
	transition: all 0.3s ease-in-out;
	border-bottom: ${({ theme }) => `2px solid ${theme.main}`};

	cursor: pointer;

	&:hover {
		background: ${({ theme }) => theme.secondary};
	}
`;

const ArrowConteiner = styled.div<{ isOpen: boolean }>`
	position: absolute;
	top: 10px;
	right: 10px;

	transform: ${({ isOpen }) => (!isOpen ? `rotate(0deg)` : `rotate(180deg)`)};
	transition: all 0.3s ease-in-out;
	svg {
		width: 15px;
		height: 15px;
	}
`;

interface ISelect {
	label?: string;
	id?: string;
	value: string;
	onClick: (e: any) => void;
	options: { title: string; value: string }[];
}

export const Select: FC<ISelect> = ({
	label = "Test",
	id,
	value,
	onClick,
	options,
}) => {
	const theme = useTheme();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<SelectStyled onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} id={id}>
			{value || label}
			<OptionConteiner>
				{isOpen &&
					options.map((el) => (
						<OptionStyled key={el.value} onClick={() => onClick(el.value)}>
							{el.title}
						</OptionStyled>
					))}
			</OptionConteiner>

			<ArrowConteiner isOpen={isOpen}>
				<ArrowSVG fill={theme.main} />
			</ArrowConteiner>
		</SelectStyled>
	);
};
