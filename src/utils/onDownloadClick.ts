import QRCodeStyling, { FileExtension, Options } from "qr-code-styling";
import { extension } from "./extension";

export const onDownloadClick = (
	textTips: string,
	fileExt: FileExtension,
	sizeForDownload: number,
	options: Options
) => {
	const qrCode = new QRCodeStyling({
		...options,
		width: sizeForDownload,
		height: sizeForDownload,
		margin: 30,
	});

	qrCode.applyExtension((svg: SVGElement, options: Options) =>
		extension(svg, options, textTips)
	);

	void qrCode.download({
		name: textTips || "qr-code",
		extension: fileExt,
	});
};
