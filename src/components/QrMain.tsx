import React, {
	useRef,
	useEffect,
	useState,
	SetStateAction,
	Dispatch,
} from "react";
import styled from "styled-components";

import type QRCodeStyling from "qr-code-styling";

import { Col, Row } from "../styles/styles";
import Button from "./reusable/Button";

import useWindowSize from "../hooks/useWindowSize";

import useIsVisible from "../hooks/useIsVisible";
import Dropdown from "./reusable/Dropdown";
import { FileExtension } from "qr-code-styling";

const ToQRStyled = styled.div`
	position: fixed;
	bottom: 25px;
	right: 25px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 50px;
	height: 50px;

	padding: 0;

	border-radius: 50%;

	border: 2px solid #0b064b;
	color: #b4975a;
	backdrop-filter: blur(10px);

	img {
		height: 25px;
		width: 30px;
	}
`;

const QrStyled = styled(Row)`
	align-items: center;
	justify-content: center;

	svg,
	canvas {
		border-radius: 20px;
	}
`;
interface IQrMain {
	onDownloadClick: () => void;
	onCopyClick: (e: HTMLCanvasElement | undefined) => void;
	qrCode: QRCodeStyling;
	changeTypeQr: () => JSX.Element;
	setFileExt: Dispatch<SetStateAction<FileExtension>>;
}

const QrMain: React.FC<IQrMain> = ({
	onDownloadClick,
	onCopyClick,
	qrCode,
	setFileExt,
}) => {
	const size = useWindowSize();
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIsVisible(ref);

	const [isCopied, setIsCopied] = useState<boolean>(false);

	useEffect(() => {
		if (ref?.current) {
			qrCode.append(ref.current);
		}
	}, [qrCode, ref]);

	return (
		<Col w={`100%`}>
			<Col pos={`sticky`} posT={`20px`} g={`15px`}>
				{/* Qr */}
				<QrStyled ref={ref} />

				<Col g={`15px`}>
					<Dropdown
						value={"svg"}
						setValue={setFileExt}
						options={[
							{ title: "SVG", value: "svg" },
							{ title: "WEBP", value: "webp" },
							{ title: "JPEG", value: "jpeg" },
							{ title: "PNG", value: "png" },
						]}
					/>
					{/* Download */}
					<Button
						onClick={() => onDownloadClick()}
						title={"Download"}
						w={size.width < 1280 ? "100%" : "50%"}
						m={`0 auto`}
					/>

					{/* Copy */}
					<Button
						onClick={() => {
							const canvasEl = ref?.current?.children[0] as HTMLCanvasElement;
							setIsCopied(true);
							onCopyClick(canvasEl);
							setTimeout(() => {
								setIsCopied(false);
							}, 2500);
						}}
						disabled={isCopied}
						title={!isCopied ? "Copy" : "Copied!"}
						w={size.width < 1280 ? "100%" : "50%"}
						m={`0 auto`}
					/>
				</Col>
			</Col>

			{/* "Go Qr" - only mobile */}
			{size.width < 1280 && !isVisible && (
				<ToQRStyled
					onClick={() => {
						if (ref && ref?.current) {
							ref?.current.scrollIntoView({ behavior: "smooth" });
						}
					}}>
					<strong>QR</strong>
					{/* <img src={👇🏻} alt='black arrow down' /> */}
					<span>👇🏻</span>
				</ToQRStyled>
			)}
		</Col>
	);
};

export default QrMain;
