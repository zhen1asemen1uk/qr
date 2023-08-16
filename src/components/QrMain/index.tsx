import {
	FC,
	useEffect,
	useState,
	SetStateAction,
	Dispatch,
	useRef,
	Suspense,
	lazy,
} from "react";
import styled from "styled-components";
import QRCodeStyling from "qr-code-styling";
import { FileExtension, Options } from "qr-code-styling";

import { Settings } from "./Settings/Settings";

import Download from "./Download";

import { ToQR } from "./ToQR";

import { Col, Row } from "../../styles/styles";
import useDebounce from "../../hooks/useDebounce";
import Loader from "../reusable/Loader";

const Copy = lazy(() => import("./Copy"));

const QrStyled = styled(Row)`
	align-items: center;
	justify-content: center;

	* {
		border-radius: 20px;
	}
	background: transparent;
`;

const ConteinerStyled = styled(Col)`
	gap: 15px;
	width: 80%;
	margin: 0 auto;

	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
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

	const triggerResolutionOfQr = useDebounce(resolutionOfQr, 5000);

	const refQrStyled = useRef<HTMLDivElement>(null);
	const refScrollTo = useRef<HTMLDivElement>(null);

	const [isIphone, setIsIphone] = useState<boolean>(false);

	useEffect(() => {
		if (qrCode && refQrStyled.current) {
			setIsIphone(/iPhone|iPad|iPod/i.test(navigator.userAgent));
			qrCode.append(refQrStyled.current);
		}
	}, [qrCode, refQrStyled]);

	return (
		<Col w={`100%`}>
			<Col pos={`sticky`} posT={`20px`} g={`15px`} ref={refScrollTo}>
				<QrStyled ref={refQrStyled} />

				<ConteinerStyled>
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
						resolutionOfQr={triggerResolutionOfQr}
						isTypes={isTypes}
					/>

					<Suspense fallback={<Loader />}>
						<Copy
							size={size}
							options={options}
							isTypes={isTypes}
							isIphone={isIphone}
							resolutionOfQr={triggerResolutionOfQr}
							triggerTextTips={triggerTextTips}
						/>
					</Suspense>
				</ConteinerStyled>
			</Col>

			<ToQR size={size.width} refScrollTo={refScrollTo} />
		</Col>
	);
};
export default QrMain;
