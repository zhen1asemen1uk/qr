import { Options } from "qr-code-styling";

interface IGenerateQrCodeGTM {
	qr_capture_type: string;
	qr_action: string;
	options: Options;
}

export const onGenerateQrCodeGTM = ({
	qr_capture_type,
	qr_action,
	options,
}: IGenerateQrCodeGTM) => {
	let colorsOfQr =
		[
			options?.dotsOptions?.color,
			options?.backgroundOptions?.color,
			options?.cornersSquareOptions?.color,
			options?.cornersDotOptions?.color,
		] || [];

	colorsOfQr = [...new Set(colorsOfQr)];

	if (window.dataLayer) {
		window.dataLayer.push({
			event: "generate_qr_code",
			qr_action,
			qr_color: colorsOfQr.join(" "),
			qr_logo: options.image || "none",
			qr_logo_size: (options?.imageOptions?.imageSize || 1) > 0.3 ? "L" : "XL",
			qr_capture_type,
		});
	}
};
