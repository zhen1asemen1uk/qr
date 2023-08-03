import React from "react";
import styled from "styled-components";

import { Wrapp } from "../../styles/styles";

const Wrapper = styled(Wrapp)`
	height: 300px;

	padding: 25px 50px;

	background: #fad3e0;
	border-top: 2px solid #e91e63;
`;

const Footer: React.FC = () => {
	return <Wrapper>Here will be footer</Wrapper>;
};

export default Footer;
