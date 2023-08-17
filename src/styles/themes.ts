declare module "styled-components" {
	export interface DefaultTheme extends CustomTheme {}
}

export interface CustomTheme {
	name: string;
	main: string;
	secondary: string;
	background: string;
	text: {
		title: string;
		simple: string;
		link: string;
	};
	loader: {
		main: string;
		secondary: string;
	};
	input: {
		b: string;
		bg: string;
		secondary: string;
	};
	button: {
		main: string;
		secondary: string;
	};
	accordeon?: {
		bg: string;
	};
	logo: string;
}

export const theme = {
	white: {
		name: "white",
		main: "#FFFFFF",
		secondary: "#000000",
		background: "#fff",
		text: {
			title: "#000000",
			simple: "#000000",
			link: "#FFFFFF",
		},
		loader: {
			main: "#000000",
			secondary: "silver",
		},
		input: {
			b: "#00000033",
			bg: "#FFFFFF",
			secondary: "#000000",
		},
		button: {
			main: "#000000",
			secondary: "#000000",
		},
		accordeon: {
			bg: "#FFFFFF",
		},
		logo: "#000000",
	},
	black: {
		name: "black",
		main: "#000000",
		secondary: "#FFFFFF",
		background: "#000000",
		text: {
			title: "#FFFFFF",
			simple: "#FFFFFF",
			link: "#FFFFFF",
		},
		loader: {
			main: "#000000",
			secondary: "#00000033",
		},
		input: {
			b: "#00000033",
			bg: "#FFFFFF",
			secondary: "#000000",
		},
		button: {
			main: "#FFFFFF",
			secondary: "#000000",
		},
		accordeon: {
			bg: "silver",
		},
		logo: "#ffffff",
	},
	pink: {
		name: "pink",
		main: "#E91E63",
		secondary: "#FAD3E0",
		background: "#000000",
		text: {
			title: "#FFFFFF",
			simple: "#FFFFFF",
			link: "#E91E63",
		},
		loader: {
			main: "#E91E63",
			secondary: "rgba(246, 0, 82, 0.2)",
		},
		input: {
			b: "#FFFFFF",
			bg: "#FFFFFF",
			secondary: "#f6a5c0",
		},
		button: {
			main: "#f6a5c0",
			secondary: "#E91E63",
		},
		accordeon: {
			bg: "#f6a5c0",
		},
		logo: "#FFFFFF",
	},
	blue: {
		name: "blue",
		main: "#2196F3",
		secondary: "#BBDEFB",
		background: "#000000",
		text: {
			title: "#FFFFFF",
			simple: "#FFFFFF",
			link: "#2196F3",
		},
		loader: {
			main: "#2196F3",
			secondary: "rgba(33, 150, 243, 0.2)",
		},
		input: {
			b: "#FFFFFF",
			bg: "#FFFFFF",
			secondary: "#bbdefb",
		},
		button: {
			main: "#bbdefb",
			secondary: "#2196F3",
		},
		accordeon: {
			bg: "#bbdefb",
		},
		logo: "#FFFFFF",
	},
	green: {
		name: "green",
		main: "#4CAF50",
		secondary: "#C8E6C9",
		background: "#000000",
		text: {
			title: "#FFFFFF",
			simple: "#FFFFFF",
			link: "#4CAF50",
		},
		loader: {
			main: "#4CAF50",
			secondary: "rgba(76, 175, 80, 0.2)",
		},
		input: {
			b: "#FFFFFF",
			bg: "#FFFFFF",
			secondary: "#c8e6c9",
		},
		button: {
			main: "#c8e6c9",
			secondary: "#4CAF50",
		},
		accordeon: {
			bg: "#c8e6c9",
		},
		logo: "#FFFFFF",
	},
	yellow: {
		name: "yellow",
		main: "#FFEB3B",
		secondary: "#FFF9C4",
		background: "#000000",
		text: {
			title: "#FFFFFF",
			simple: "#FFFFFF",
			link: "#FFEB3B",
		},
		loader: {
			main: "#FFEB3B",
			secondary: "rgba(255, 235, 59, 0.2)",
		},
		input: {
			b: "#FFFFFF",
			bg: "#FFFFFF",
			secondary: "#fff9c4",
		},
		button: {
			main: "#fff9c4",
			secondary: "#FFEB3B",
		},
		accordeon: {
			bg: "#fff9c4",
		},
		logo: "#FFFFFF",
	},
	orange: {
		name: "orange",
		main: "#FF9800",
		secondary: "#FFE0B2",
		background: "#000000",
		text: {
			title: "#FFFFFF",
			simple: "#FFFFFF",
			link: "#FF9800",
		},
		loader: {
			main: "#FF9800",
			secondary: "rgba(255, 152, 0, 0.2)",
		},
		input: {
			b: "#FFFFFF",
			bg: "#FFFFFF",
			secondary: "#ffe0b2",
		},
		button: {
			main: "#ffe0b2",
			secondary: "#FF9800",
		},
		accordeon: {
			bg: "#ffe0b2",
		},
		logo: "#FFFFFF",
	},
	red: {
		name: "red",
		main: "#F44336",
		secondary: "#FFCDD2",
		background: "#000000",
		text: {
			title: "#FFFFFF",
			simple: "#FFFFFF",
			link: "#F44336",
		},
		loader: {
			main: "#F44336",
			secondary: "rgba(244, 67, 54, 0.2)",
		},
		input: {
			b: "#FFFFFF",
			bg: "#FFFFFF",
			secondary: "#ffcdd2",
		},
		button: {
			main: "#ffcdd2",
			secondary: "#F44336",
		},
		accordeon: {
			bg: "#ffcdd2",
		},
		logo: "#FFFFFF",
	},
	purple: {
		name: "purple",
		main: "#9C27B0",
		secondary: "#E1BEE7",
		background: "#000000",
		text: {
			title: "#FFFFFF",
			simple: "#FFFFFF",
			link: "#9C27B0",
		},
		loader: {
			main: "#9C27B0",
			secondary: "rgba(156, 39, 176, 0.2)",
		},
		input: {
			b: "#FFFFFF",
			bg: "#FFFFFF",
			secondary: "#e1bee7",
		},
		button: {
			main: "#e1bee7",
			secondary: "#9C27B0",
		},
		accordeon: {
			bg: "#e1bee7",
		},
		logo: "#FFFFFF",
	},
};
