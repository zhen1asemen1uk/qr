import { FC, useEffect } from "react";
import { DefaultTheme } from "styled-components";

interface IBmc {
	themeNew: DefaultTheme;
}

const Bmc: FC<IBmc> = ({ themeNew }) => {
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
			var evt = document.createEvent("Event");
			evt.initEvent("DOMContentLoaded", false, false);
			window.dispatchEvent(evt);
		};

		const scriptParent = document.head;
		if (scriptParent) {
			scriptParent.appendChild(script);
		}

		return () => {
			scriptParent.removeChild(script);
		};
	}, [themeNew.main]);

	return null;
};

export default Bmc;
