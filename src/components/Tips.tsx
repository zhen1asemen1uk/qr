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
import { extension } from "../utils/extension";

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

		qrCode.applyExtension((svg: SVGElement, options: Options) =>
			extension(svg, options, triggerTextTips)
		);
	}, [qrCode, triggerTextTips]);

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
