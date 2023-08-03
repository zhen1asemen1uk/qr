// export const resizeCanvas = (
// 	canvasEl: HTMLCanvasElement,
// 	newWidth: number,
// 	newHeight: number
// ) => {
// 	// Збереження зображення перед зміною розмірів
// 	const context = canvasEl.getContext("2d");
// 	const imageData = context?.getImageData(
// 		0,
// 		0,
// 		canvasEl.width,
// 		canvasEl.height
// 	);

import QRCodeStyling, { Options } from "qr-code-styling";
import { extension } from "./extension";
import { RefObject } from "react";

// 	// Зміна розмірів елемента <canvas>
// 	canvasEl.width = newWidth;
// 	canvasEl.height = newHeight;

// 	// Відновлення зображення після зміни розмірів
// 	if (context && imageData) {
// 		context.putImageData(imageData, 0, 0);
// 	}
// };

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

export const onCopyClick = (canvasEl: HTMLCanvasElement) => {
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
};
