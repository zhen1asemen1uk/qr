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

import { transformQr } from "../../utils/onCopy";
import Download from "./Download";
import { ToQR } from "./ToQR";
import { Copy } from "./Copy";
import { Settings } from "./Settings";

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
	isTypes: string;
}

const setQrURL = (
	canvas: HTMLCanvasElement,
	setUrl: React.Dispatch<React.SetStateAction<string>>
) => {
	canvas.toBlob((blob) => {
		if (!blob) return;

		setUrl(URL.createObjectURL(blob));
	});
};

const QrMain: React.FC<IQrMain> = ({
	qrCode,
	setFileExt,
	fileExt,
	textTips,
	options,
	size,
	isTypes,
}) => {
	const [qrCodeCopy] = useState<QRCodeStyling>(new QRCodeStyling(options));
	const [resolutionOfQr, setResolutionOfQr] = useState<number>(1024);

	const refQrStyled = useRef<HTMLDivElement>(null);
	const refScrollTo = useRef<HTMLDivElement>(null);
	const refQrStyledCopy = useRef<HTMLDivElement>(document.createElement("div"));

	const [isIphone, setIsIphone] = useState<boolean>(false);
	const [linkFromBlob, setLinkFromBlob] = useState<string>(
		`/images/qr-example-4.png`
	);

	useEffect(() => {
		if (qrCode && refQrStyled.current) {
			setIsIphone(/iPhone|iPad|iPod/i.test(navigator.userAgent));
			qrCode.append(refQrStyled.current);
		}
	}, [qrCode, refQrStyled]);

	// for copy Qr with size 1024
	useEffect(() => {
		if (qrCodeCopy && refQrStyledCopy?.current) {
			transformQr({
				qrCodeCopy: qrCodeCopy,
				qrRefStyledDiv: refQrStyledCopy,
				optionsOfQr: options,
				resolutionOfQr: resolutionOfQr,
				textTips: textTips,
			});
		}
	}, [qrCodeCopy, refQrStyledCopy, textTips, options, resolutionOfQr]);

	useEffect(() => {
		const canvasEl = refQrStyled?.current?.children[0] as HTMLCanvasElement;

		if (canvasEl && size.width < 1280) {
			setQrURL(canvasEl, setLinkFromBlob);
		}
	}, [options, size.width]);

	return (
		<Col w={`100%`}>
			<Col pos={`sticky`} posT={`20px`} g={`15px`} ref={refScrollTo}>
				<QrStyled ref={refQrStyled} />

				{linkFromBlob && <MobilQr src={linkFromBlob} alt='Qr-Code' />}

				<Col g={`15px`} w={`80%`} m={"0 auto"}>
					<Settings
						fileExt={fileExt}
						setFileExt={setFileExt}
						resolutionOfQr={resolutionOfQr}
						setResolutionOfQr={setResolutionOfQr}
					/>

					<Download
						size={size}
						textTips={textTips}
						fileExt={fileExt}
						setFileExt={setFileExt}
						options={options}
						resolutionOfQr={resolutionOfQr}
					/>

					<Copy
						size={size}
						refQrStyledCopy={refQrStyledCopy}
						options={options}
						isTypes={isTypes}
						isIphone={isIphone}
					/>
				</Col>
			</Col>

			{/* "Go Qr" - only mobile */}
			<ToQR size={size.width} refScrollTo={refScrollTo} />
		</Col>
	);
};

export default QrMain;
