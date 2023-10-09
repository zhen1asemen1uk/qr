import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import UploadWidget from "../../utils/UploadWidget";
import Button from "../reusable/Button";
import { Col, FlexBlock } from "../../styles/styles";
import { Options } from "qr-code-styling";

interface IUploadImage {
	disabled: boolean;
	options: Options;
	setOptions: Dispatch<SetStateAction<Options>>;
	setLinkImg: Dispatch<SetStateAction<string>>;
}

interface IResult {
	event: string;
	info: {
		id: string;
		batchId: string;
		asset_id: string;
		public_id: string;
		version: number;
		version_id: string;
		signature: string;
		width: number;
		height: number;
		format: string;
		resource_type: string;
		created_at: string;
		tags: string[];
		pages: number;
		bytes: number;
		type: string;
		etag: string;
		placeholder: boolean;
		url: string;
		secure_url: string;
		folder: string;
		access_mode: string;
		existing: boolean;
		original_filename: string;
		eager: [
			{
				transformation: string;
				width: number;
				height: number;
				bytes: number;
				format: string;
				url: string;
				secure_url: string;
			}
		];
		path: string;
		thumbnail_url: string;
	};
}

const UploadImage = ({
	disabled,
	options,
	setOptions,
	setLinkImg,
}: IUploadImage) => {
	const [error, updateError] = useState();

	const handleOnUpload = (error: any, result: IResult, widget: any) => {
		if (error) {
			updateError(error);
			widget.close({
				quiet: true,
			});
			return;
		}
		setLinkImg(result.info.secure_url);

		setOptions({
			...options,
			image: result.info.secure_url,
		});
	};

	return (
		<Col>
			<UploadWidget onUpload={handleOnUpload}>
				{({ open }: { open: () => void }) => {
					const handleOnClick = (e: ChangeEvent<HTMLInputElement>) => {
						e.preventDefault();
						open();
					};

					return (
						<Button
							w='100%'
							title='Upload a custom image'
							secondary
							disabled={disabled}
							onClick={(e: ChangeEvent<HTMLInputElement>) =>
								e && handleOnClick(e)
							}
						/>
					);
				}}
			</UploadWidget>

			{error && <FlexBlock c={"red"}>{error}</FlexBlock>}
		</Col>
	);
};

export default UploadImage;
