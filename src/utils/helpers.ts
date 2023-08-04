export const transformSymbols = (str: string): string => {
	return str
		.replaceAll(/[\u2018\u2019]/g, "'")
		.replaceAll(/[\u201C\u201D]/g, '"');
};
