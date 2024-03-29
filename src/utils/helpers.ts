export const transformSymbols = (str: string): string => {
	return str
		.replaceAll(/[\u2018\u2019]/g, "'")
		.replaceAll(/[\u201C\u201D]/g, '"');
};

export const calcMargin = (resolutionOfQr: number) => {
	const margin = resolutionOfQr * 0.03;

	return margin;
};

export const firstLetterToUpperCase = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const clearElements = () => {
	const scriptParentBody = document.body as HTMLBodyElement;

	if (scriptParentBody) {
		scriptParentBody.childNodes.forEach((el) => {
			if (el instanceof HTMLElement && el.id !== "root") {
				scriptParentBody.removeChild(el);
			}
		});
	}
};
