import { Dispatch, FC, SetStateAction } from "react";
import { FileExtension } from "qr-code-styling";

import { Select } from "../reusable/Select";
import Accordion from "../reusable/Accordeon";
import InputRagne from "../reusable/InputRagne";
import Input from "../reusable/Input";

import { TypeImage } from "../../types/enumes";
import { Col, Row } from "../../styles/styles";

interface ISettings {
	fileExt: FileExtension;
	setFileExt: Dispatch<SetStateAction<FileExtension>>;
	resolutionOfQr: number;
	setResolutionOfQr: Dispatch<SetStateAction<number>>;
}

export const Settings: FC<ISettings> = ({
	fileExt,
	setFileExt,
	resolutionOfQr,
	setResolutionOfQr,
}) => {
	return (
		<Accordion
			title={"Download Settings"}
			content={
				<Col g='20px'>
					Formate of image:
					<Select
						value={fileExt.toUpperCase()}
						id='formateForDownload'
						onClick={(value) => setFileExt(value as FileExtension)}
						options={[
							{ value: TypeImage.SVG, label: TypeImage.SVG },
							{ value: TypeImage.WEBP, label: TypeImage.WEBP },
							{ value: TypeImage.JPEG, label: TypeImage.JPEG },
							{ value: TypeImage.PNG, label: TypeImage.PNG },
						]}
					/>
					<Col>
						<label htmlFor='resolutionOfQr'>
							{`Resolution of Qr image 
								(${resolutionOfQr}px/${resolutionOfQr}px):`}
						</label>
						<InputRagne
							w='100%'
							id='resolutionOfQr'
							name='resolutionOfQr'
							min={`300`}
							step={"5"}
							max={"2160"}
							value={`${resolutionOfQr}`}
							onChange={(e) => setResolutionOfQr(+e.target.value)}
						/>

						<Row m='0 auto'>or set resulution here (optionally) ↙️</Row>

						<Input
							min={`300`}
							step={"5"}
							max={"2160"}
							type='number'
							onChange={(e) => {
								if (+e.target.value < 300) {
									setResolutionOfQr(300);
								} else if (+e.target.value < 2160) {
									setResolutionOfQr(+e.target.value);
								} else {
									setResolutionOfQr(2160);
								}
							}}
							value={`${resolutionOfQr}`}
						/>
					</Col>
				</Col>
			}
		/>
	);
};
