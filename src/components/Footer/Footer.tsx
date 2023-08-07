import React from "react";
import styled from "styled-components";

import { Col, Row, Wrapp } from "../../styles/styles";

const Wrapper = styled(Wrapp)`
	height: 300px;

	padding: 25px 50px;

	background: #fad3e0;
	border-top: 2px solid #e91e63;
`;

const Footer: React.FC = () => {
	return (
		<Wrapper>
			<Col h={"100%"} jc='space-between'>
				<Row>Here will be footer</Row>
				<Row g='2.5px'>
					Developed by <a href='https://github.com/zhen1asemen1uk'>Yevhen S.</a>
				</Row>
			</Col>
		</Wrapper>
	);
};

export default Footer;
