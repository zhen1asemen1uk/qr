import { FC } from "react";
import styled, { useTheme } from "styled-components";
import { Link } from "react-router-dom";

const LinkStyled = styled(Link)`
	font-family: "DollieScript";
	font-size: 40px;

	text-align: center;
	margin: 0;

	color: ${({ theme }) => theme.text.title} !important;
	cursor: pointer;

	@media (max-width: 1280px) {
		margin: 0 auto;
		font-size: 35px;
	}

	@media (max-width: 768px) {
		font-size: 30px;
	}

	@media (max-width: 480px) {
		font-size: 20px;
	}
`;

const Logo: FC = () => {
	const theme = useTheme();

	const textLogo = `QR - code ${
		theme.name.includes("pink") ? `(Barbie style)` : ``
	}`;

	return <LinkStyled to='/'>{textLogo}</LinkStyled>;
};

export default Logo;
