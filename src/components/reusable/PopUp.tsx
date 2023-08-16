import { useState, type PropsWithChildren, FC } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { FlexBlock } from "../../styles/styles";
import Button from "./Button";

const portal = document.getElementById(`portal`) as HTMLElement;

interface Props extends PropsWithChildren {
	title: string;
	secondary?: boolean;
}

const ModalWrapp = styled(FlexBlock)`
	position: fixed;
	top: 0;
	left: 0;

	width: 100vw;
	height: 100vh;

	align-items: center;
	justify-content: center;

	z-index: 1000;

	cursor: poinet;
`;

const ModalOverview = styled(FlexBlock)`
	position: absolute;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;

	opacity: 0.5;
	background: black;

	cursor: pointer;
`;

const ModalBody = styled(FlexBlock)`
	align-items: center;
	justify-content: center;

	padding: 20px;
	background: white;
	border-radius: 20px;

	z-index: 1001;
`;

const PopUp: FC<Props> = ({ children, title, secondary }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<Button
				title={title}
				onClick={() => setIsOpen(!isOpen)}
				secondary={secondary}
			/>

			{isOpen &&
				createPortal(
					<ModalWrapp onClick={() => setIsOpen(!isOpen)}>
						<ModalBody onClick={(e) => e.stopPropagation()}>
							{children}
						</ModalBody>
						<ModalOverview />
					</ModalWrapp>,
					portal
				)}
		</>
	);
};

export default PopUp;
