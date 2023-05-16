// @ts-nocheck
import React, { useRef } from "react";

import { Cloudinary } from "@cloudinary/url-gen";

interface IUploadWidget {
	children: (props: { open: () => void }) => ReactElement;
	onUpload: (error: any, result: any, widget?: any) => void; // Use 'any' for widget type
}

const UploadWidget: FC<IUploadWidget> = ({ children, onUpload }) => {
	const cloudinary = useRef<Cloudinary | null>(null);
	const widget = useRef<any | null>(null); // Use 'any' for widget type

	const createWidget = () => {
		const options = {
			cloudName: process.env.GATSBY_CLOUD_NAME,
			uploadPreset: process.env.GATSBY_UPLOAD_PRESET,
			folder: "qr-codes",
		};

		return cloudinary.current?.createUploadWidget(
			options,
			(error: any, result: any) => {
				if (error || result.event === "success") {
					onUpload(error, result);
				}
			}
		);
	};

	const open = () => {
		if (!widget?.current) {
			widget.current = createWidget();
		}

		widget?.current && widget.current.open();
	};

	const handleOnLoad = () => {
		cloudinary.current = window?.cloudinary;
	};

	return (
		<>
			{children({ open })}
			{/* <Script
				id='cloudinary'
				src='https://widget.cloudinary.com/v2.0/global/all.js'
				onLoad={handleOnLoad}
			/> */}
		</>
	);
};

export default UploadWidget;
