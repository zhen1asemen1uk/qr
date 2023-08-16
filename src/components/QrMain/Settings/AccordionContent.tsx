import { FC } from "react";
import { Col } from "../../../styles/styles";
import { Select } from "../../reusable/Select";
import InputRagne from "../../reusable/InputRagne";
import { FileExtension } from "qr-code-styling";
import { TypeImage } from "../../../types/enumes";

interface IAccordionContent {
	fileExt: FileExtension;
	setFileExt: (value: FileExtension) => void;
	resolutionOfQr: number;
	setResolutionOfQr: (value: number) => void;
}

const AccordionContent: FC<IAccordionContent> = ({
	fileExt,
	setFileExt,
	resolutionOfQr,
	setResolutionOfQr,
}) => {
	return (
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
				{/* Need fix logic of this component 👇🏻 */}
				{/* <Row m='0 auto'>or set resulution here (optionally) ↙️</Row>

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
						/> */}
			</Col>
		</Col>
	);
};

export default AccordionContent;
