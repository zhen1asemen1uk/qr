import { Themes } from "../types/enumes";

export const transformSymbols = (str: string): string => {
	return str
		.replaceAll(/[\u2018\u2019]/g, "'")
		.replaceAll(/[\u201C\u201D]/g, '"');
};

export const calcMargin = (resolutionOfQr: number) => {
	const margin = resolutionOfQr * 0.03;

	return margin;
};

export const detectTheme = () => {
	const hours = new Date().getHours();
	const isSunTime = hours > 6 && hours < 20;

	if (
		localStorage.getItem(Themes.KEY) !== `null` &&
		!!localStorage.getItem(Themes.KEY)
	) {
		return localStorage.getItem(Themes.KEY);
	} else {
		localStorage.setItem(Themes.KEY, isSunTime ? Themes.WHITE : Themes.BLACK);
		return isSunTime ? Themes.WHITE : Themes.BLACK;
	}
};
