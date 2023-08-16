import { FC, useEffect, useRef, useState } from "react";

import Button from "../reusable/Button";

import { onCopy, transformQr } from "../../utils/onCopy";
import QRCodeStyling, { Options } from "qr-code-styling";

interface ICopy {
	options: Options;
	isTypes: string;
	size: { width: number };
	disabled?: boolean;
	isIphone?: boolean;
	resolutionOfQr: number;
	triggerTextTips: string;
}

export const Copy: FC<ICopy> = ({
	options,
	isTypes,
	size,
	disabled = false,
	isIphone = false,
	resolutionOfQr,
	triggerTextTips,
}) => {
	const refQrStyledCopy = useRef<HTMLDivElement>(document.createElement("div"));
	const [qrCodeCopy] = useState<QRCodeStyling>(new QRCodeStyling(options));
	const [isCopied, setIsCopied] = useState<boolean>(false);

	// for copy Qr with size !!! not refactoring it !!!
	useEffect(() => {
		if (qrCodeCopy && refQrStyledCopy?.current) {
			transformQr({
				qrCodeCopy: qrCodeCopy,
				qrRefStyledDiv: refQrStyledCopy,
				optionsOfQr: options,
				resolutionOfQr: resolutionOfQr,
				textTips: triggerTextTips,
			});
		}
	}, [qrCodeCopy, options, resolutionOfQr, triggerTextTips, isTypes]);

	if (isIphone) return null;

	return (
		<Button
			onClick={function () {
				setIsCopied(true);

				const canvasEl = refQrStyledCopy.current
					.children[0] as HTMLCanvasElement;

				onCopy({ canvasEl, isTypes, options });

				setTimeout(() => {
					setIsCopied(false);
				}, 2500);
			}}
			disabled={!!(disabled || isCopied)}
			title={!isCopied ? "Copy" : "Copied!"}
			w={size.width < 768 ? "100%" : "50%"}
			m='0 auto'
		/>
	);
};
