import React, {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import QRCodeStyling, { Options } from "qr-code-styling";

import Input from "./reusable/Input";
import useDebounce from "../hooks/useDebounce";

import { Row } from "../styles/styles";

interface ITips {
	qrCode: QRCodeStyling;
	textTips: string;
	setTextTips: Dispatch<SetStateAction<string>>;
}
const Tips: FC<ITips> = ({ qrCode, textTips, setTextTips }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const triggerTextTips = useDebounce(textTips, 1800, setIsLoading);

	useEffect(() => {
		if (!triggerTextTips) return;
		const extension = (svg: SVGElement, options: Options) => {
			const svgNamespace = "http://www.w3.org/2000/svg";

			const textElement = document.createElementNS(svgNamespace, "text");
			textElement.setAttribute("x", "25px");
			textElement.setAttribute("y", "99%");

			textElement.setAttribute("text-anchor", "start");
			textElement.setAttribute("font-size", "14px");
			textElement.setAttribute(
				"stroke",
				`${options.dotsOptions?.color || "#000"}`
			);
			textElement.setAttribute(
				"fill",
				`${options.dotsOptions?.color || "#000"}`
			);
			textElement.textContent = textTips;
			svg.appendChild(textElement);
		};

		qrCode.applyExtension(extension);
	}, [triggerTextTips]);

	return (
		<Input
			title={<Row>Tips:</Row>}
			onChange={(e) => setTextTips(e.target.value)}
			value={textTips}
			isLoading={isLoading}
		/>
	);
};

export default Tips;
