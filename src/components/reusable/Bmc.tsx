import { FC, memo, useEffect } from "react";
import { DefaultTheme } from "styled-components";
import { clearElements } from "../../utils/helpers";

interface IBmc {
	themeNew: DefaultTheme;
}

const Bmc: FC<IBmc> = memo(({ themeNew }) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
		script.setAttribute("data-name", "BMC-Widget");
		script.setAttribute("data-cfasync", "false");
		script.setAttribute("data-id", "YevhenSemeniuk");
		script.setAttribute("data-description", "Support me on Buy me a coffee!");
		script.setAttribute("data-message", "");

		script.setAttribute(
			"data-color",
			themeNew.main === `#000000` ? `#ffffff` : themeNew.main
		);
		script.setAttribute("data-position", "Right");
		script.setAttribute("data-x_margin", "18");
		script.setAttribute("data-y_margin", "18");
		// script.async = true;

		script.onload = function () {
			const evt = new Event("DOMContentLoaded", {
				bubbles: false,
				cancelable: false,
			});
			window.dispatchEvent(evt);
		};

		const scriptParentHead = document.head;

		if (scriptParentHead) scriptParentHead.appendChild(script);

		return () => {
			scriptParentHead.removeChild(script);

			// temporary solution for removing bmc widget 😅
			for (let i = 0; i < 3; i++) {
				clearElements();
			}
		};
	}, [themeNew]);

	return null;
});

export default Bmc;
