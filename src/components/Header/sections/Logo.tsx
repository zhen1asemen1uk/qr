import { FC } from "react";
import styled from "styled-components";
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

const Logo: FC = () => <LinkStyled to='/'>QR - code (Barbie style)</LinkStyled>;

export default Logo;
