import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html,
	body {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}

	* {
		font-family: 'Noto Sans', sans-serif;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	p {
		margin: 0;
	}

	ul,
	li {
		display: block;
		padding: 0;
		margin: 0;
	}

	div,
	p,
	form,
	input,
	a,
	span,
	button {
		text-decoration: none;
		box-sizing: border-box;
	}
`;

export default GlobalStyle;
