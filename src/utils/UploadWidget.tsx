import { useEffect, useRef } from "react";

declare global {
	interface Window {
		cloudinary: any;
	}
}

interface IUploadWidget {
	children: any;
	onUpload: any;
}

let isCreated = false;

const UploadWidget = ({ children, onUpload }: IUploadWidget) => {
	const cloudinary = useRef<any>(null);
	const widget = useRef<any>(null);

	useEffect(() => {
		const script = document.createElement("script");

		script.src = "https://widget.cloudinary.com/v2.0/global/all.js";

		script.onload = function () {
			const evt = new Event("DOMContentLoaded", {
				bubbles: false,
				cancelable: false,
			});
			window.dispatchEvent(evt);

			cloudinary.current = window.cloudinary;
		};

		const scriptParentHead = document.head;

		if (scriptParentHead && !isCreated) {
			document.head.append(script);

			scriptParentHead.appendChild(script);
			isCreated = true;
		}

		return () => {
			scriptParentHead.removeChild(script);
		};
	}, []);

	const open = () => {
		if (!widget.current) {
			widget.current = createWidget();
		}

		widget.current && widget.current.open();
	};

	const createWidget = () => {
		const widget = cloudinary.current.createUploadWidget(
			{
				cloudName: process.env.REACT_APP_CLOUDNAME,
				uploadPreset: process.env.REACT_APP_UPLOADPRESET,
				folder: process.env.REACT_APP_FOLDER1,
				sources: ["local"],
				multiple: false,
			},
			(error: any, result: any) => {
				if (!error && result && result.event === "success") {
					onUpload(error, result, widget);
				}
			}
		);

		return widget;
	};

	return <div>{children({ open })}</div>;
};

export default UploadWidget;
