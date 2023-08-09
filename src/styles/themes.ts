declare module "styled-components" {
	export interface DefaultTheme extends CustomTheme {}
}

interface CustomTheme {
	main: string;
	secondary: string;
}

export const theme = {
	white: {
		main: "#FFFFFF",
		secondary: "#000000",
	},
	black: {
		main: "#000000",
		secondary: "#FFFFFF",
	},
	pink: {
		main: "#E91E63",
		secondary: "#FAD3E0",
	},
};
