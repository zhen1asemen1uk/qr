import React, { FC, useState } from "react";

import Button from "../reusable/Button";
import { Options } from "qr-code-styling";
import { onCopy } from "../../utils/onCopy";

interface ICopy {
	refQrStyledCopy: React.RefObject<HTMLDivElement>;
	options: Options;
	isTypes: string;
	size: { width: number };
	disabled?: boolean;
	isIphone?: boolean;
}

export const Copy: FC<ICopy> = ({
	refQrStyledCopy,
	options,
	isTypes,
	size,
	disabled = false,
	isIphone = false,
}) => {
	const [isCopied, setIsCopied] = useState<boolean>(false);

	if (isIphone) return null;

	return (
		<Button
			onClick={() => {
				setIsCopied(true);

				if (refQrStyledCopy?.current) {
					const canvasEl = refQrStyledCopy.current
						.children[0] as HTMLCanvasElement;

					onCopy({ canvasEl, isTypes, options });

					setTimeout(() => {
						setIsCopied(false);
					}, 2500);
				}
			}}
			disabled={!!(disabled || isCopied)}
			title={!isCopied ? "Copy" : "Copied!"}
			w={size.width < 1280 ? "100%" : "50%"}
			m='0 auto'
		/>
	);
};
