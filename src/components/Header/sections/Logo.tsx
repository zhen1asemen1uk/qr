import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkStyled = styled(Link)`
	font-family: "DollieScript";

	font-size: 40px;

	margin: 0;

	color: white;
	cursor: pointer;

	@media (max-width: 1280px) {
		margin: 0 auto;
	}
`;

const Logo: FC = () => <LinkStyled to='/'>QR - code (Barbie style)</LinkStyled>;

export default Logo;
