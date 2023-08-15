import {
	FC,
	useEffect,
	useState,
	SetStateAction,
	Dispatch,
	useRef,
} from "react";
import styled from "styled-components";
import QRCodeStyling from "qr-code-styling";
import { FileExtension, Options } from "qr-code-styling";

import { Settings } from "./Settings";

import Download from "./Download";
import { Copy } from "./Copy";

import { ToQR } from "./ToQR";

import { getUrlFromCanvas } from "../../utils/onCopy";
import { Col, Row } from "../../styles/styles";

const QrStyled = styled(Row)`
	align-items: center;
	justify-content: center;

	* {
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
	triggerTextTips: string;
	options: Options;
	size: { width: number; height: number };
	isTypes: string;
}

const QrMain: FC<IQrMain> = ({
	qrCode,
	setFileExt,
	fileExt,
	triggerTextTips,
	options,
	size,
	isTypes,
}) => {
	const [resolutionOfQr, setResolutionOfQr] = useState<number>(1024);

	const refQrStyled = useRef<HTMLDivElement>(null);
	const refScrollTo = useRef<HTMLDivElement>(null);

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

	useEffect(() => {
		const canvasEl = refQrStyled?.current?.children[0] as HTMLCanvasElement;

		if (canvasEl && size.width < 1280) {
			getUrlFromCanvas(canvasEl).then((url) => {
				setLinkFromBlob(url);
			});
		}
	}, [options, size.width, triggerTextTips]);

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
						triggerTextTips={triggerTextTips}
						fileExt={fileExt}
						setFileExt={setFileExt}
						options={options}
						resolutionOfQr={resolutionOfQr}
						isTypes={isTypes}
					/>

					<Copy
						size={size}
						options={options}
						isTypes={isTypes}
						isIphone={isIphone}
						resolutionOfQr={resolutionOfQr}
						triggerTextTips={triggerTextTips}
					/>
				</Col>
			</Col>

			<ToQR size={size.width} refScrollTo={refScrollTo} />
		</Col>
	);
};

export default QrMain;
