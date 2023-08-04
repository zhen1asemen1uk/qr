import { Dispatch, FC, SetStateAction, useCallback } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";

import TextType from "../qrDataTypes/TextType";
import VCardType from "../qrDataTypes/VCardType";
import SmsType from "../qrDataTypes/SmsType";
import WiFiType from "../qrDataTypes/WiFiType";
import EmailType from "../qrDataTypes/EmailType";

import { TypeQr } from "../../types/enumes";
import { Col } from "../../styles/styles";

import Tips from "../Tips";
import { ListOfAccordion } from "./ListOfAccordion";

interface ICustomization {
	options: Options;
	setOptions: Dispatch<SetStateAction<Options>>;
	isTypes: string;
	setTextTips: Dispatch<SetStateAction<string>>;
	textTips: string;
	qrCode: QRCodeStyling;
}

export const Customization: FC<ICustomization> = ({
	options,
	setOptions,
	isTypes,
	qrCode,
	textTips,
	setTextTips,
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
			<Col>{changeTypeQr()}</Col>

			{/* Edit block */}
			<ListOfAccordion options={options} setOptions={setOptions} />

			{/* Tip */}
			<Tips qrCode={qrCode} textTips={textTips} setTextTips={setTextTips} />
		</>
	);
};
