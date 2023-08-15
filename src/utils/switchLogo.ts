import { Options } from "qr-code-styling";
import { Dispatch, SetStateAction } from "react";

export const hideLogo = (
	options: Options,
	setOptions: Dispatch<SetStateAction<Options>>
): void => {
	if (!options.image) return;

	localStorage.setItem(
		"temporaly_link",
		JSON.stringify({ image: options.image })
	);

	setOptions?.({
		...options,
		image: "",
	});
};

export const showLogo = (
	options: Options,
	setOptions: Dispatch<SetStateAction<Options>>
) => {
	const linkFromLocalStorage = localStorage.getItem("temporaly_link");

	if (linkFromLocalStorage && linkFromLocalStorage !== "null") {
		const link = JSON.parse(linkFromLocalStorage);
		setOptions?.({
			...options,
			image: link.image,
		});

		localStorage.removeItem("temporaly_link_to_img");
	}
};
