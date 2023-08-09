import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import GlobalStyle from "./styles/globals";
import { ThemeProvider } from "styled-components";
import { detectTheme } from "./utils/helpers";
import { theme } from "./styles/themes";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme[detectTheme() as keyof typeof theme]}>
			<App />
			<GlobalStyle />
		</ThemeProvider>
	</React.StrictMode>
);
