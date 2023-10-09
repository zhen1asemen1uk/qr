import { type Dispatch, type SetStateAction, useState, FC } from "react";

// import UploadWidget from "../../utils/UploadWidget";
import { Col } from "../../styles/styles";
// import Button from "../reusable/Button";

interface IUploadImage {
	disabled: boolean;
	selectedImage: string;
	setSelectedImage: Dispatch<SetStateAction<string>>;
}

const UploadImage: FC<IUploadImage> = ({ disabled, setSelectedImage }) => {
	const [error, updateError] = useState();

	const handleOnUpload = (error: any, result: any, widget?: any) => {
		if (error) {
			updateError(error);
			widget.close({
				quiet: true,
			});
			return;
		}
		setSelectedImage(result?.info?.secure_url);
	};

	return (
		<Col>
			UploadWidget
			{/* <UploadWidget onUpload={handleOnUpload}>
				{({ open }) => {
					const handleOnClick = (e: any) => {
						e.preventDefault();
						open();
					};

					return (
						<Button
							title={`Upload a Logo`}
							secondary
							disabled={disabled}
							onClick={handleOnClick}
						/>
					);
				}}
			</UploadWidget>

			{error && <p>{error}</p>} */}
		</Col>
	);
};

export default UploadImage;
