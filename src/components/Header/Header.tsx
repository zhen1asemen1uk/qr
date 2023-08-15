import { Dispatch, FC, SetStateAction } from "react";
import styled, { DefaultTheme } from "styled-components";

import { Wrapp } from "../../styles/styles";
import Logo from "./sections/Logo";
import ThemesBlock from "./sections/ThemesBlock";

// import { Link } from "react-router-dom";

const Wrapper = styled(Wrapp)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	height: 50px;
	padding: 0 50px;

	background: ${({ theme }) => theme.main};
	border-bottom: ${({ theme }) => `1px solid ${theme.secondary}`};
	color: ${({ theme }) => theme.text.title};

	a {
		color: ${({ theme }) => theme.logo} !important;
	}
`;

// const UlStyled = styled.ul`
// 	display: flex;
// 	gap: 20px;
// `;

interface IHeader {
	setThemeSwitcher: Dispatch<SetStateAction<DefaultTheme>>;
}
const Header: FC<IHeader> = ({ setThemeSwitcher }) => {
	return (
		<Wrapper>
			<Logo />
			<ThemesBlock setThemeSwitcher={setThemeSwitcher} />
			{/* <nav>
				<UlStyled>
					<li>
						<Link to={`/`}>ROOT</Link>
					</li>
				</UlStyled>
			</nav> */}
		</Wrapper>
	);
};

export default Header;
