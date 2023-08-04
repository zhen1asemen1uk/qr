import QRCodeStyling, { Options } from "qr-code-styling";
import { extension } from "./extension";
import { RefObject } from "react";

export const transformQr = (
	qrCodeCopy: QRCodeStyling,
	refQrStyledCopy: RefObject<HTMLDivElement>,
	options: Options,
	textTips: string
) => {
	if (!refQrStyledCopy.current) return;

	qrCodeCopy.update({ ...options, width: 1024, height: 1024, margin: 30 });
	qrCodeCopy.applyExtension((svg: SVGElement, options: Options) =>
		extension(svg, options, textTips)
	);

	qrCodeCopy.append(refQrStyledCopy.current);
};

interface IOnCopy {
	(canvasEl: HTMLCanvasElement, isTypes: string, options: Options): void;
}
export const onCopy: IOnCopy = (canvasEl, isTypes, options) => {
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

	// onGenerateQrCodeGTM({
	// 	qr_capture_type: "copy",
	// 	qr_action: isTypes,
	// 	options,
	// });
};
