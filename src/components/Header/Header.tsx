import React from "react";
import styled from "styled-components";

import { Wrapp } from "../../styles/styles";
import Logo from "./sections/Logo";
// import { Link } from "react-router-dom";

const Wrapper = styled(Wrapp)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	height: 50px;
	padding: 0 50px;

	background: ${({ theme }) => theme.main};
	border-bottom: ${({ theme }) => theme.secondary};
	color: #fff;
`;

// const UlStyled = styled.ul`
// 	display: flex;
// 	gap: 20px;
// `;

const Header: React.FC = () => {
	return (
		<Wrapper>
			<Logo />
			{/* <nav>
				<UlStyled>
					<li>
						<Link to={`/`}>ROOT</Link>
					</li>
				</UlStyled>
			</nav> */}
		</Wrapper>
	);
};

export default Header;
