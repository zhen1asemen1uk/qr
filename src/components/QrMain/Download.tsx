import { Dispatch, FC, SetStateAction, useState } from "react";
import { FileExtension, Options } from "qr-code-styling";
import Button from "../reusable/Button";
import Input from "../reusable/Input";

import { onDownloadClick } from "../../utils/onDownloadClick";
import { TypeImage } from "../../types/enumes";
import Accordion from "../reusable/Accordeon";
import { Col, Row } from "../../styles/styles";
import InputRagne from "../reusable/InputRagne";
import { Dropdown } from "../reusable/Dropdown";

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
						Formate of image:
						<Dropdown
							value={fileExt}
							id='formateForDownload'
							onClick={(value) => setFileExt(value as FileExtension)}
							options={[
								{ value: TypeImage.SVG, title: TypeImage.SVG },
								{ value: TypeImage.WEBP, title: TypeImage.WEBP },
								{ value: TypeImage.JPEG, title: TypeImage.JPEG },
								{ value: TypeImage.PNG, title: TypeImage.PNG },
							]}
						/>
						<Col>
							<label htmlFor='sizeForDownload'>
								{`Resolution of Qr image 
								(${sizeForDownload}px/${sizeForDownload}px):`}
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
							<Row m='0 auto'>or</Row>
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
