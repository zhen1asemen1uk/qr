import React, {
	ChangeEvent,
	Dispatch,
	FC,
	SetStateAction,
	useState,
} from "react";
import { FileExtension, Options } from "qr-code-styling";
import Button from "../reusable/Button";
import Input from "../reusable/Input";

import { onDownloadClick } from "../../utils/onDownloadClick";
import { TypeImage } from "../../types/enumes";
import Accordion from "../reusable/Accordeon";
import { Col } from "../../styles/styles";
import InputRagne from "../reusable/InputRagne";

interface IDownload {
	size: { width: number; height: number };
	textTips: string;
	fileExt: FileExtension;
	setFileExt: Dispatch<SetStateAction<FileExtension>>;
	options: Options;
}

const Download: FC<IDownload> = ({
	size,
	textTips,
	fileExt,
	setFileExt,
	options,
}) => {
	const [sizeForDownload, setSizeForDownload] = useState<number>(500);

	return (
		<>
			<Accordion
				title={"Download Settings"}
				content={
					<Col g='20px'>
						<label htmlFor='formateForDownload'>
							Formate of image:
							<select
								value={fileExt}
								id='formateForDownload'
								name='formateForDownload'
								onChange={(e: ChangeEvent<HTMLSelectElement>) =>
									setFileExt(e.target.value as FileExtension)
								}>
								<option value={TypeImage.SVG}>
									{TypeImage.SVG.toLocaleUpperCase()}
								</option>
								<option value={TypeImage.WEBP}>
									{TypeImage.WEBP.toLocaleUpperCase()}
								</option>
								<option value={TypeImage.JPEG}>
									{TypeImage.JPEG.toLocaleUpperCase()}
								</option>
								<option value={TypeImage.PNG}>
									{TypeImage.PNG.toLocaleUpperCase()}
								</option>
							</select>
						</label>
						<Col>
							<label htmlFor='sizeForDownload'>
								{`Resolution of Qr image 
								(${sizeForDownload}px/${sizeForDownload}
								px):`}
							</label>
							<InputRagne
								w='100%'
								id='sizeForDownload'
								name='sizeForDownload'
								min={`300`}
								step={"5"}
								max={"2160"}
								value={`${sizeForDownload}`}
								onChange={(e) => setSizeForDownload(+e.target.value)}
							/>
							or
							<Input
								min={`300`}
								step={"5"}
								max={"2160"}
								type='number'
								onChange={(e) => {
									if (+e.target.value < 2160) {
										setSizeForDownload(+e.target.value);
									} else {
										setSizeForDownload(2160);
									}
								}}
								value={`${sizeForDownload}`}
							/>
						</Col>
					</Col>
				}
			/>

			<Button
				onClick={() => {
					if (sizeForDownload < 300) {
						setSizeForDownload(300);
						onDownloadClick(textTips, fileExt, 300, options);
					} else {
						onDownloadClick(textTips, fileExt, sizeForDownload, options);
					}
				}}
				title={"Download"}
				w={size.width < 1280 ? "100%" : "50%"}
				m={`0 auto`}
			/>
		</>
	);
};

export default Download;
