import { useEffect, useState, FC, useMemo } from "react";

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

import { Col, Row } from "../styles/styles";

import { TypeImage, TypeQr } from "../types/enumes";
import Button from "../components/reusable/Button";

import { Customization } from "../components/Customization";
import { useTheme } from "styled-components";
import useDebounce from "../hooks/useDebounce";

const arrTypes = [
	{ title: `vCard`, value: TypeQr.VCARD },
	{ title: `Sms`, value: TypeQr.SMS },
	{ title: `WiFi`, value: TypeQr.WIFI },
	{ title: `Email`, value: TypeQr.EMAIL },
	{ title: `Text/Link`, value: TypeQr.TEXT },
];

interface InitOptions {
	dotsC: string;
	backgroundC: string;
	cornersSquareC: string;
	cornersDotC: string;
}

const initOptions = ({
	dotsC,
	backgroundC,
	cornersSquareC,
	cornersDotC,
}: InitOptions) => ({
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
		color: `${dotsC}`,
		// gradient: {
		//   type: 'linear', // 'radial'
		//   rotation: 0,
		//   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
		// },
		type: `rounded` as DotType,
	},
	backgroundOptions: {
		color: `${backgroundC}`,
		// gradient: {
		//   type: 'linear', // 'radial'
		//   rotation: 0,
		//   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
		// },
	},
	cornersSquareOptions: {
		color: `${cornersSquareC}`,
		type: `extra-rounded` as CornerSquareType,
		// gradient: {
		//   type: 'linear', // 'radial'
		//   rotation: 180,
		//   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
		// },
	},
	cornersDotOptions: {
		color: `${cornersDotC}`,
		type: `dot` as CornerDotType,
		// gradient: {
		//   type: 'linear', // 'radial'
		//   rotation: 180,
		//   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
		// },
	},
});

export const Qr: FC = () => {
	const size = useWindowSize();
	const theme = useTheme();

	const [textTips, setTextTips] = useState<string>("");
	const [isTypes, setIsTypes] = useState<string>(TypeQr.TEXT);
	const [fileExt, setFileExt] = useState<FileExtension>(TypeImage.PNG);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [options, setOptions] = useState<Options>(
		initOptions({
			dotsC: theme.main,
			backgroundC: theme.secondary,
			cornersSquareC: theme.main,
			cornersDotC: theme.main,
		})
	);
	const triggerTextTips = useDebounce(textTips, 1300, setIsLoading);

	const qrCode = useMemo(() => new QRCodeStyling(options), [options]);

	useEffect(() => {
		if (!qrCode) return;

		if (options?.dotsOptions?.color !== theme.main) {
			setOptions({
				...options,
				dotsOptions: {
					...options.dotsOptions,
					color: theme.main,
				},
				backgroundOptions: {
					...options.backgroundOptions,
					color: theme.secondary,
				},
				cornersSquareOptions: {
					...options.cornersSquareOptions,
					color: theme.main,
				},
				cornersDotOptions: {
					...options.cornersDotOptions,
					color: theme.main,
				},
			});
		}

		qrCode.update(options);
	}, [qrCode, options, theme]);

	return (
		<Row
			w={`100%`}
			jc={`space-between`}
			fd={size.width < 768 ? `column` : `row`}
			m={`0 auto 100px auto`}
			maxW='1440px'>
			<Col g={`20px`} w='100%'>
				{/* Buttons block */}
				<Row
					g={`5px`}
					jc={`space-between`}
					fd={size.width < 768 ? `column` : `row`}
					m='0 0 29px 0'>
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
					triggerTextTips={triggerTextTips}
					textTips={textTips}
					setTextTips={setTextTips}
					isLoading={isLoading}
				/>
			</Col>

			{/* QR block */}
			<QrMain
				size={size}
				options={options}
				setFileExt={setFileExt}
				fileExt={fileExt}
				qrCode={qrCode}
				isTypes={isTypes}
				triggerTextTips={triggerTextTips}
			/>
		</Row>
	);
};
