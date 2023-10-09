import QRCodeStyling, { Options } from "qr-code-styling";
import { extension } from "./extension";
import { RefObject } from "react";
import { onGenerateQrCodeGTM } from "./googleTagManager";

interface ITransformQr {
	qrCodeCopy: QRCodeStyling;
	qrRefStyledDiv: RefObject<HTMLDivElement>;
	optionsOfQr: Options;
	resolutionOfQr: number;
	textTips: string;
}

export const transformQr = ({
	qrCodeCopy,
	qrRefStyledDiv,
	optionsOfQr,
	resolutionOfQr,
	textTips,
}: ITransformQr) => {
	if (!qrRefStyledDiv.current) return;

	qrCodeCopy.update({
		...optionsOfQr,
		width: resolutionOfQr,
		height: resolutionOfQr,
		margin: 40,
	});

	qrCodeCopy.applyExtension((svg: SVGElement, optionsOfQr: Options) =>
		extension(svg, optionsOfQr, textTips)
	);

	qrCodeCopy.append(qrRefStyledDiv.current);
};

interface IOnCopy {
	canvasEl: HTMLCanvasElement;
	isTypes: string;
	options: Options;
}

export const onCopy = ({ canvasEl, isTypes, options }: IOnCopy) => {
	if (!canvasEl) return;

	canvasEl.toBlob((blob) => {
		if (!blob) return;

		navigator.clipboard.write([
			new window.ClipboardItem({
				[blob.type]: new Promise(async (resolve) => {
					resolve(new Blob([blob], { type: blob.type }));
				}),
			}),
		]);
	});

	onGenerateQrCodeGTM({
		qr_capture_type: "copy",
		qr_action: isTypes,
		options,
	});
};

export const getUrlFromCanvas = async (
	canvas: HTMLCanvasElement
): Promise<string> => {
	return await new Promise((resolve) => {
		canvas.toBlob((blob) => {
			if (!blob) {
				resolve("");
				return;
			}

			const url = URL.createObjectURL(blob);
			resolve(url);
		});
	});
};
