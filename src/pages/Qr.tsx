import React, { useEffect, useState, useCallback, FC } from "react";

import QRCodeStyling, {
	type FileExtension,
	type DrawType,
	type TypeNumber,
	type Mode,
	type ErrorCorrectionLevel,
	type DotType,
	type CornerSquareType,
	type CornerDotType,
	type Options,
} from "qr-code-styling";

import useWindowSize from "../hooks/useWindowSize";

import QrMain from "../components/QrMain";

// DataTypes
import TextType from "../components/qrDataTypes/TextType";
import VCardType from "../components/qrDataTypes/VCardType";
import EmailType from "../components/qrDataTypes/EmailType";
import SmsType from "../components/qrDataTypes/SmsType";
import WiFiType from "../components/qrDataTypes/WiFiType";

import EditQrColors from "../components/EditQrColors/EditQrColors";

import { Col, Row } from "../styles/styles";

import { hardcodeImage } from "../components/reusable/mockData";
import Accordion from "../components/reusable/Accordeon";

import { TypeQr } from "../types/enumes";
import Button from "../components/reusable/Button";
import EditQrSize from "../components/EditQrSize";
import EditQrImage from "../components/EditQrImage/EditQrImage";
import Tips from "../components/Tips";

const arrTypes = [
	{ title: `vCard`, value: `VCARD` },
	{ title: `Sms`, value: `SMS` },
	{ title: `WiFi`, value: `WiFi` },
	{ title: `Email`, value: `EMAIL` },
	{ title: `Text/Link`, value: `TEXT` },
];

export const Qr: FC = () => {
	const size = useWindowSize();

	const [textTips, setTextTips] = useState<string>("");
	const [isTypes, setIsTypes] = useState<string>(TypeQr.TEXT);
	const [fileExt, setFileExt] = useState<FileExtension>(`svg`);

	const [options, setOptions] = useState<Options>({
		width: 300,
		height: 300,
		type: `canvas` as DrawType,
		data: ` `,
		image: hardcodeImage,
		margin: 10,
		qrOptions: {
			typeNumber: 0 as TypeNumber,
			mode: `Byte` as Mode,
			errorCorrectionLevel: `Q` as ErrorCorrectionLevel,
		},
		imageOptions: {
			hideBackgroundDots: true,
			imageSize: 0.5,
			margin: 5,
			crossOrigin: `anonymous`,
		},
		dotsOptions: {
			color: `#0b064b`,
			// gradient: {
			//   type: 'linear', // 'radial'
			//   rotation: 0,
			//   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
			// },
			type: `rounded` as DotType,
		},
		backgroundOptions: {
			color: `#ffffff`,
			// gradient: {
			//   type: 'linear', // 'radial'
			//   rotation: 0,
			//   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
			// },
		},
		cornersSquareOptions: {
			color: `#c9a05d`,
			type: `extra-rounded` as CornerSquareType,
			// gradient: {
			//   type: 'linear', // 'radial'
			//   rotation: 180,
			//   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
			// },
		},
		cornersDotOptions: {
			color: `#0b064b`,
			type: `dot` as CornerDotType,
			// gradient: {
			//   type: 'linear', // 'radial'
			//   rotation: 180,
			//   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
			// },
		},
	});

	const [qrCode] = useState<QRCodeStyling>(new QRCodeStyling(options));

	useEffect(() => {
		if (!qrCode) return;

		qrCode.update(options);
	}, [qrCode, options]);

	const onDownloadClick = () => {
		if (!qrCode) return;

		void qrCode.download({
			name: textTips || "qr-code",
			extension: fileExt,
		});
	};

	const onCopyClick = async (canvasEl: HTMLCanvasElement | undefined) => {
		if (!canvasEl) return;

		canvasEl.toBlob((blob) => {
			if (!blob) return;

			navigator.clipboard
				?.write([new ClipboardItem({ [blob.type]: blob })])
				.then(() => console.log("Logo copied to clipboard"))
				.catch((error) => console.error(error));
		});
	};

	const changeTypeQr = useCallback(() => {
		switch (isTypes) {
			case TypeQr.TEXT:
				return <TextType options={options} setOptions={setOptions} />;

			case TypeQr.VCARD:
				return <VCardType options={options} setOptions={setOptions} />;

			case TypeQr.SMS:
				return <SmsType options={options} setOptions={setOptions} />;

			case TypeQr.WiFi:
				return <WiFiType options={options} setOptions={setOptions} />;

			case TypeQr.EMAIL:
				return <EmailType options={options} setOptions={setOptions} />;

			default:
				return <TextType options={options} setOptions={setOptions} />;
		}
	}, [isTypes, options]);

	return (
		<Row
			w={`100%`}
			jc={`space-between`}
			fd={size.width < 1280 ? `column` : `row`}
			m={`0 0 100px 0`}>
			<Col g={`20px`}>
				{/* Buttons block */}
				<Row
					g={`5px`}
					jc={`space-between`}
					fd={size.width < 1280 ? `column` : `row`}>
					{arrTypes.map((typeData, i) => {
						return (
							<Button
								key={`${typeData.value}_${i}`}
								title={typeData.title}
								fw={typeData.value === isTypes ? 800 : 400}
								td={typeData.value === isTypes ? "underline" : "none"}
								flex='1 1 auto'
								onClick={() => {
									setOptions({ ...options, data: " " });
									setIsTypes(typeData.value);
								}}
							/>
						);
					})}
				</Row>
				{/* Fields block */}
				<Col>{changeTypeQr()}</Col>

				{/* Edit block */}
				<Accordion
					title={"Edit Qr Colors"}
					content={<EditQrColors options={options} setOptions={setOptions} />}
				/>
				<Accordion
					title={"Edit Qr Image"}
					content={<EditQrImage options={options} setOptions={setOptions} />}
				/>
				<Accordion
					title={"Edit Qr Size"}
					content={<EditQrSize options={options} setOptions={setOptions} />}
				/>

				<Tips qrCode={qrCode} textTips={textTips} setTextTips={setTextTips} />
			</Col>

			{/* QR block */}
			<QrMain
				onCopyClick={onCopyClick}
				setFileExt={setFileExt}
				onDownloadClick={onDownloadClick}
				changeTypeQr={changeTypeQr}
				qrCode={qrCode}
			/>
		</Row>
	);
};
