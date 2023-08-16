import { Dispatch, FC, SetStateAction, memo, useEffect } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";

import Input from "./reusable/Input";

import { Row } from "../styles/styles";
import { extension } from "../utils/extension";

interface ITips {
	qrCode: QRCodeStyling;
	triggerTextTips: string;
	textTips: string;
	isLoading: boolean;
	setTextTips: Dispatch<SetStateAction<string>>;
}
const Tips: FC<ITips> = memo(
	({ qrCode, triggerTextTips, textTips, setTextTips, isLoading }) => {
		useEffect(() => {
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
	}
);

export default Tips;
