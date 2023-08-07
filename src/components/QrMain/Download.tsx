import { Dispatch, FC, SetStateAction, useState } from "react";
import { FileExtension, Options } from "qr-code-styling";
import Button from "../reusable/Button";

import { onDownloadClick } from "../../utils/onDownloadClick";

interface IDownload {
	size: { width: number; height: number };
	textTips: string;
	fileExt: FileExtension;
	setFileExt: Dispatch<SetStateAction<FileExtension>>;
	options: Options;
	disabled?: boolean;
	resolutionOfQr: number;
}

const Download: FC<IDownload> = ({
	size,
	textTips,
	fileExt,
	options,
	disabled = false,
	resolutionOfQr,
}) => {
	const [isDownload, setIsDownload] = useState<boolean>(false);

	return (
		<Button
			onClick={() => {
				setIsDownload(true);

				onDownloadClick(textTips, fileExt, resolutionOfQr, options);

				setTimeout(() => {
					setIsDownload(false);
				}, 3000);
			}}
			title={isDownload ? "Downloading..." : "Download"}
			w={size.width < 1280 ? "100%" : "50%"}
			m={`0 auto`}
			disabled={disabled || isDownload}
		/>
	);
};

export default Download;
