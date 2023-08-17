import { DefaultTheme } from "styled-components";
import { Themes } from "../types/enumes";

export const setTheme = (theme: DefaultTheme["name"]) =>
	localStorage.setItem(Themes.KEY_THEME, theme);

export const getTheme = () => `${localStorage.getItem(Themes.KEY_THEME)}`;

const themes: Themes[] = [
	Themes.WHITE,
	Themes.BLACK,
	Themes.PINK,
	Themes.GREEN,
	Themes.BLUE,
	Themes.PURPLE,
	Themes.ORANGE,
	Themes.YELLOW,
	Themes.RED,
];

export const detectTheme = () => {
	// const hours = new Date().getHours();
	// const isSunTime = hours > 6 && hours < 20;

	const themeFromStorage = getTheme();

	let theme: string = Themes.DEFAULT;

	if (
		themes.includes(themeFromStorage as Themes) &&
		themeFromStorage !== `null` &&
		!!themeFromStorage
	) {
		theme = themeFromStorage;
	} else {
		// Check to see if Media-Queries are supported && Check if the dark-mode Media-Query matches
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			// Black
			setTheme(Themes.BLACK);
			theme = Themes.BLACK;
		} else if (
			// White
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: light)").matches
		) {
			// White
			setTheme(Themes.WHITE);
			theme = Themes.WHITE;
		} else {
			// Default (when Media-Queries are not supported)
			// set random theme one from WHITE, BLACK, PINK, GREEN, BLUE, PURPLE, ORANGE, YELLOW, RED

			const randomTheme = Math.floor(Math.random() * themes.length);

			console.log(randomTheme);

			setTheme(themes[randomTheme]);
			theme = themes[randomTheme];
		}
	}
	return theme;
};
