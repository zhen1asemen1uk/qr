import React from "react";
import styled from "styled-components";

import { Wrapp } from "../../styles/styles";

const Wrapper = styled(Wrapp)`
	height: 300px;

	padding: 25px 50px;

	background-color: silver;
`;

const Footer: React.FC = () => {
	return <Wrapper>Footer</Wrapper>;
};

export default Footer;
