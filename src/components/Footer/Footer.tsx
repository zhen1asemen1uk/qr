import { Dispatch, FC, SetStateAction } from "react";
import styled, { DefaultTheme } from "styled-components";

import { Row, Wrapp } from "../../styles/styles";
import ThemesBlock from "./sections/ThemesBlock";

const Wrapper = styled(Wrapp)`
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 300px;

	padding: 25px 50px;

	background: ${({ theme }) => theme.main};
	border-top: ${({ theme }) => `2px solid ${theme.secondary}}`};

	@media (max-width: 768px) {
		min-height: 300px;
		height: auto;
		justify-content: space-between;
		align-items: center;
		gap: 25px;
	}
`;

const DevelopStyled = styled(Row)`
	gap: 2.5px;
	color: ${({ theme }) => theme.text.simple};

	a {
		color: ${({ theme }) => theme.text.link} !important;
		text-decoration: underline;
	}
`;
interface IFooter {
	setThemeSwitcher: Dispatch<SetStateAction<DefaultTheme>>;
}

const Footer: FC<IFooter> = ({ setThemeSwitcher }) => {
	return (
		<Wrapper>
			<Row jc={"space-between"}>
				<ThemesBlock setThemeSwitcher={setThemeSwitcher} />
			</Row>

			<DevelopStyled>
				Developed by{" "}
				<a href='https://github.com/zhen1asemen1uk' target='_black'>
					Yevhen S.
				</a>
			</DevelopStyled>
		</Wrapper>
	);
};

export default Footer;
