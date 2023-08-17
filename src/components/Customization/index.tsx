import {
	lazy,
	Suspense,
	Dispatch,
	FC,
	SetStateAction,
	useCallback,
} from "react";
import QRCodeStyling, { Options } from "qr-code-styling";

import { TypeQr } from "../../types/enumes";
import { Col } from "../../styles/styles";

import Tips from "../Tips";
import { ListOfAccordion } from "./ListOfAccordion";
import Loader from "../reusable/Loader";

const TextType = lazy(() => import("../qrDataTypes/TextType"));
const VCardType = lazy(() => import("../qrDataTypes/VCardType"));
const SmsType = lazy(() => import("../qrDataTypes/SmsType"));
const WiFiType = lazy(() => import("../qrDataTypes/WiFiType"));
const EmailType = lazy(() => import("../qrDataTypes/EmailType"));

interface ICustomization {
	triggerOptions: Options;
	options: Options;
	setOptions: Dispatch<SetStateAction<Options>>;
	isTypes: string;
	qrCode: QRCodeStyling;
	triggerTextTips: string;
	textTips: string;
	setTextTips: Dispatch<SetStateAction<string>>;
	isLoading: boolean;
}

export const Customization: FC<ICustomization> = ({
	triggerOptions,
	options,
	setOptions,
	isTypes,
	qrCode,
	triggerTextTips,
	textTips,
	setTextTips,
	isLoading,
}) => {
	const changeTypeQr = useCallback(() => {
		switch (isTypes) {
			case TypeQr.TEXT:
				return <TextType options={options} setOptions={setOptions} />;

			case TypeQr.VCARD:
				return <VCardType options={options} setOptions={setOptions} />;

			case TypeQr.SMS:
				return <SmsType options={options} setOptions={setOptions} />;

			case TypeQr.WIFI:
				return <WiFiType options={options} setOptions={setOptions} />;

			case TypeQr.EMAIL:
				return <EmailType options={options} setOptions={setOptions} />;

			default:
				return <TextType options={options} setOptions={setOptions} />;
		}
	}, [isTypes, options, setOptions]);

	return (
		<>
			{/* Fields block */}
			<Col>
				<Suspense fallback={<Loader />}>{changeTypeQr()}</Suspense>
			</Col>

			{/* Edit block */}
			<ListOfAccordion options={triggerOptions} setOptions={setOptions} />

			{/* Tip */}
			<Tips
				qrCode={qrCode}
				triggerTextTips={triggerTextTips}
				textTips={textTips}
				setTextTips={setTextTips}
				isLoading={isLoading}
			/>
		</>
	);
};
