import React, {
	useEffect,
	useState,
	SetStateAction,
	Dispatch,
	useRef,
} from "react";
import styled from "styled-components";
import QRCodeStyling from "qr-code-styling";
import { FileExtension, Options } from "qr-code-styling";

import { Col, Row } from "../../styles/styles";
import Button from "../reusable/Button";

import useIsVisible from "../../hooks/useIsVisible";

import { onCopyClick, transformQr } from "../../utils/onCopyClick";
import Download from "./Download";
import { ToQR } from "./ToQR";

const QrStyled = styled(Row)`
	align-items: center;
	justify-content: center;

	svg,
	canvas {
		border-radius: 20px;
	}

	@media (max-width: 1280px) {
		display: none;
	}
`;

const MobilQr = styled.img`
	display: none;

	@media (max-width: 1280px) {
		display: flex;
	}
`;

interface IQrMain {
	qrCode: QRCodeStyling;
	setFileExt: Dispatch<SetStateAction<FileExtension>>;
	fileExt: FileExtension;
	textTips: string;
	options: Options;
	setOptions: Dispatch<SetStateAction<Options>>;
	size: { width: number; height: number };
}

const QrMain: React.FC<IQrMain> = ({
	qrCode,
	setFileExt,
	fileExt,
	textTips,
	options,
	size,
}) => {
	const [qrCodeCopy] = useState<QRCodeStyling>(new QRCodeStyling(options));

	const refQrStyled = useRef<HTMLDivElement>(null);
	const refQrStyledCopy = useRef<HTMLDivElement>(document.createElement("div"));

	const isVisible = useIsVisible(refQrStyled);

	const [isCopied, setIsCopied] = useState<boolean>(false);
	const [linkFromBlob, setLinkFromBlob] = useState<string>(
		`/images/qr-example-4.png`
	);

	useEffect(() => {
		if (!refQrStyled?.current) return;

		qrCode.append(refQrStyled.current);
	}, [qrCode, refQrStyled]);

	// for copy Qr with size 1024
	useEffect(() => {
		if (!qrCodeCopy) return;

		if (refQrStyledCopy?.current) {
			transformQr(qrCodeCopy, refQrStyledCopy, options, textTips);
		}
	}, [qrCodeCopy, refQrStyledCopy, textTips, options]);

	useEffect(() => {
		if (!refQrStyled?.current || !refQrStyled?.current?.children[0]) return;

		if (size.width < 1280) {
			(refQrStyled?.current?.children[0] as HTMLCanvasElement).toBlob(
				(blob) => {
					if (!blob) return;

					setLinkFromBlob(URL.createObjectURL(blob));
				}
			);
		}
	}, [options, size.width]);

	return (
		<Col w={`100%`}>
			<Col pos={`sticky`} posT={`20px`} g={`15px`}>
				<QrStyled ref={refQrStyled} />
				<MobilQr src={linkFromBlob} alt='Qr-Code' />

				<Col g={`15px`} w={`80%`} m={"0 auto"}>
					<Download
						size={size}
						textTips={textTips}
						fileExt={fileExt}
						setFileExt={setFileExt}
						options={options}
					/>
					{/* Copy */}
					<Button
						onClick={() => {
							setIsCopied(true);

							const canvasEl = refQrStyledCopy?.current
								?.children[0] as HTMLCanvasElement;

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
			{size.width < 1280 && !isVisible && <ToQR refQrStyled={refQrStyled} />}
		</Col>
	);
};

export default QrMain;
