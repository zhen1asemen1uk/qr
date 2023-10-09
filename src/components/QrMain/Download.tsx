import { Dispatch, FC, SetStateAction, useCallback, useState } from "react";
import { FileExtension, Options } from "qr-code-styling";
import Button from "../reusable/Button";

import { onDownloadClick } from "../../utils/onDownloadClick";

interface IDownload {
	size: { width: number; height: number };
	triggerTextTips: string;
	fileExt: FileExtension;
	setFileExt: Dispatch<SetStateAction<FileExtension>>;
	options: Options;
	disabled?: boolean;
	resolutionOfQr: number;
	isTypes: string;
}

const Download: FC<IDownload> = ({
	size,
	triggerTextTips,
	fileExt,
	options,
	disabled = false,
	resolutionOfQr,
	isTypes,
}) => {
	const [isDownload, setIsDownload] = useState<boolean>(false);

	const onDownloadClickCallback = useCallback(() => {
		setIsDownload(true);

		onDownloadClick(triggerTextTips, fileExt, resolutionOfQr, options, isTypes);

		setTimeout(() => {
			setIsDownload(false);
		}, 3000);
	}, [triggerTextTips, fileExt, resolutionOfQr, options, isTypes]);

	return (
		<Button
			onClick={onDownloadClickCallback}
			title={isDownload ? "Downloading..." : "Download"}
			w={size.width < 768 ? "100%" : "50%"}
			m={`0 auto`}
			disabled={disabled || isDownload}
		/>
	);
};

export default Download;
