import { Options } from "qr-code-styling";

const fz = (width: number): string => {
	const crearWidth = width - 300;
	const hundredthТumber = crearWidth * 0.001;
	const multiplier = Math.floor(hundredthТumber * 14);
	const fontSize = `${multiplier + 14}px`;

	return fontSize;
};

export const extension = (
	svg: SVGElement,
	options: Options,
	textTips: string
) => {
	const extensionFn = (svg: SVGElement, options: Options) => {
		const svgNamespace = "http://www.w3.org/2000/svg";

		const textElement = document.createElementNS(svgNamespace, "text");
		textElement.setAttribute("x", "25px");
		textElement.setAttribute("y", "99%");

		textElement.setAttribute("text-anchor", "start");
		textElement.setAttribute("font-size", fz(options.width!));
		textElement.setAttribute(
			"stroke",
			`${options.dotsOptions?.color || "#000"}`
		);
		textElement.setAttribute("fill", `${options.dotsOptions?.color || "#000"}`);
		textElement.textContent = textTips;
		svg.appendChild(textElement);
	};

	return extensionFn(svg, options);
};
