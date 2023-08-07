import QRCodeStyling, { FileExtension, Options } from "qr-code-styling";
import { extension } from "./extension";
import { calcMargin } from "./helpers";

export const onDownloadClick = (
	textTips: string,
	fileExt: FileExtension,
	resolutionOfQr: number,
	options: Options
) => {
	const qrCode = new QRCodeStyling({
		...options,
		width: resolutionOfQr,
		height: resolutionOfQr,
		margin: calcMargin(resolutionOfQr),
	});

	qrCode.applyExtension((svg: SVGElement, options: Options) =>
		extension(svg, options, textTips)
	);

	void qrCode.download({
		name: textTips || "qr-code",
		extension: fileExt,
	});
};
