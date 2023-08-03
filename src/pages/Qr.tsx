import React, { useEffect, useState, FC } from "react";

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

import { Col, Row } from "../styles/styles";

import { TypeImage, TypeQr } from "../types/enumes";
import Button from "../components/reusable/Button";

import { Customization } from "../components/Customization";

const arrTypes = [
	{ title: `vCard`, value: TypeQr.VCARD },
	{ title: `Sms`, value: TypeQr.SMS },
	{ title: `WiFi`, value: TypeQr.WiFi },
	{ title: `Email`, value: TypeQr.EMAIL },
	{ title: `Text/Link`, value: TypeQr.TEXT },
];

const initOptions = {
	width: 300,
	height: 300,
	type: `canvas` as DrawType,
	data: ` `,
	image: ``,
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
		color: `#E91E63`,
		// gradient: {
		//   type: 'linear', // 'radial'
		//   rotation: 0,
		//   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
		// },
		type: `rounded` as DotType,
	},
	backgroundOptions: {
		color: `#FFF`,
		// gradient: {
		//   type: 'linear', // 'radial'
		//   rotation: 0,
		//   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
		// },
	},
	cornersSquareOptions: {
		color: `#E91E63`,
		type: `extra-rounded` as CornerSquareType,
		// gradient: {
		//   type: 'linear', // 'radial'
		//   rotation: 180,
		//   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
		// },
	},
	cornersDotOptions: {
		color: `#E91E63`,
		type: `dot` as CornerDotType,
		// gradient: {
		//   type: 'linear', // 'radial'
		//   rotation: 180,
		//   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
		// },
	},
};

export const Qr: FC = () => {
	const size = useWindowSize();

	const [textTips, setTextTips] = useState<string>("");
	const [isTypes, setIsTypes] = useState<string>(TypeQr.TEXT);
	const [fileExt, setFileExt] = useState<FileExtension>(TypeImage.SVG);

	const [options, setOptions] = useState<Options>(initOptions);

	const [qrCode] = useState<QRCodeStyling>(new QRCodeStyling(options));

	useEffect(() => {
		if (!qrCode) return;

		qrCode.update(options);
	}, [qrCode, options]);

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

				<Customization
					options={options}
					setOptions={setOptions}
					isTypes={isTypes}
					qrCode={qrCode}
					textTips={textTips}
					setTextTips={setTextTips}
				/>
			</Col>

			{/* QR block */}
			<QrMain
				size={size}
				options={options}
				setOptions={setOptions}
				setFileExt={setFileExt}
				fileExt={fileExt}
				qrCode={qrCode}
				textTips={textTips}
			/>
		</Row>
	);
};
