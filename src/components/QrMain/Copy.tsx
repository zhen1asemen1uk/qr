import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";

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

const Copy: FC<ICopy> = ({
	options,
	isTypes,
	size,
	disabled = false,
	isIphone = false,
	resolutionOfQr,
	triggerTextTips,
}) => {
	const refQrStyledCopy = useRef<HTMLDivElement>(null);
	const qrCodeCopy = useMemo(() => new QRCodeStyling(options), [options]);
	const [isCopied, setIsCopied] = useState<boolean>(false);

	const onCopyCallback = useCallback(() => {
		setIsCopied(true);

		const canvasEl = refQrStyledCopy.current?.children[0] as HTMLCanvasElement;

		onCopy({ canvasEl, isTypes, options });

		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	}, [isTypes, options]);

	useEffect(() => {
		if (refQrStyledCopy.current) {
			transformQr({
				qrCodeCopy,
				qrRefStyledDiv: refQrStyledCopy,
				optionsOfQr: options,
				resolutionOfQr,
				textTips: triggerTextTips,
			});
		}
	}, [qrCodeCopy, options, resolutionOfQr, triggerTextTips]);

	if (isIphone) return null;

	return (
		<Button
			onClick={onCopyCallback}
			disabled={!!(disabled || isCopied)}
			title={!isCopied ? "Copy" : "Copied!"}
			w={size.width < 768 ? "100%" : "50%"}
			m='0 auto'
		/>
	);
};

export default Copy;
