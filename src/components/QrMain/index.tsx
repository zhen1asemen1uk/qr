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
import styled, { keyframes } from "styled-components";
import QRCodeStyling from "qr-code-styling";
import { FileExtension, Options } from "qr-code-styling";

import { Settings } from "./Settings/Settings";

import Download from "./Download";

import { ToQR } from "./ToQR";

import { Col, Row } from "../../styles/styles";
import useDebounce from "../../hooks/useDebounce";
import Loader from "../reusable/Loader";

const Copy = lazy(() => import("./Copy"));

const Wrapp = styled(Col)`
	width: 100%;
`;

const animation = keyframes`
0%{
	opacity: 0;
}
50%{
	opacity: 0;
}
75%{
	opacity: 0.5;
}
100%{
	opacity: 1;
}
`;

const QrStyled = styled(Row)`
	animation: ${animation} 2s ease-in;

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

	const triggerResolutionOfQr = useDebounce(resolutionOfQr, 800);

	const refQrStyled = useRef<HTMLDivElement>(null);
	const refScrollTo = useRef<HTMLDivElement>(null);

	const [isIphone, setIsIphone] = useState<boolean>(false);
	const triggerQrCode = useDebounce(qrCode, 300);

	useEffect(() => {
		if (triggerQrCode && refQrStyled.current) {
			setIsIphone(/iPhone|iPad|iPod/i.test(navigator.userAgent));

			refQrStyled.current.innerHTML = "";
			triggerQrCode.append(refQrStyled.current);
		}
	}, [triggerQrCode]);

	return (
		<Wrapp>
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
		</Wrapp>
	);
};
export default QrMain;
