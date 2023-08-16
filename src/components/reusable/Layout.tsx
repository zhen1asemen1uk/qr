import { FC, useState } from "react";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Col } from "../../styles/styles";
import { MainLayoutProps } from "../../types/components";

import { theme } from "../../styles/themes";
import { detectTheme } from "../../utils/themes";
import Bmc from "./Bmc";

const Main = styled.div`
	flex: 1 1 auto;
	padding: 50px;

	min-height: 100vh;
	a {
		color: ${({ theme }) => theme.text.link} !important;
	}

	@media (max-width: 768px) {
		padding: 15px;
	}
`;

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	const [themeNew, setThemeSwitcher] = useState<DefaultTheme>(
		theme[detectTheme() as keyof typeof theme]
	);

	return (
		<ThemeProvider theme={themeNew}>
			<Col>
				<Header />
				<Main>{children}</Main>
				<Footer setThemeSwitcher={setThemeSwitcher} />
				<Bmc themeNew={themeNew} />
			</Col>
		</ThemeProvider>
	);
};

export default MainLayout;
