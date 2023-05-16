import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FlexBlock } from "../../../styles/styles";

const Wrapp = styled(FlexBlock)`
	cursor: pointer;
`;

const Logo: React.FC = () => (
	<Link to='/'>
		<Wrapp>You logo</Wrapp>
	</Link>
);

export default Logo;
