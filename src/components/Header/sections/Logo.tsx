import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FlexBlock } from "../../../styles/styles";

const Wrapp = styled(FlexBlock)`
	font-family: "DollieScript";

	font-size: 40px;
	color: white;
	cursor: pointer;
`;

const Logo: React.FC = () => (
	<Link to='/'>
		<Wrapp>QR - code (Barbie style)</Wrapp>
	</Link>
);

export default Logo;
