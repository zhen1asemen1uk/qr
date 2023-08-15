import React from "react";
import styled from "styled-components";

import { Col, Row, Wrapp } from "../../styles/styles";
import Banner from "./sections/Bunner";

const Wrapper = styled(Wrapp)`
	position: relative;

	height: 300px;

	padding: 25px 50px;

	background: ${({ theme }) => theme.secondary};
	border-top: ${({ theme }) => `2px solid ${theme.main}}`};

	a {
		color: ${({ theme }) => theme.text.link} !important;
	}
`;

const Footer: React.FC = () => {
	return (
		<Wrapper>
			<Col h={"100%"} jc='space-between'>
				<Row>Here will be footer</Row>
				<Row g='2.5px'>
					Developed by{" "}
					<a href='https://github.com/zhen1asemen1uk' target='_black'>
						Yevhen S.
					</a>
				</Row>
				<Banner />
			</Col>
		</Wrapper>
	);
};

export default Footer;
