import { Options } from "qr-code-styling";
import { Dispatch, SetStateAction } from "react";

export interface MainLayoutProps {
	children: React.ReactNode;
	title?: string;
	description?: string;
	robots?: string;
	keywords?: string;
}

export interface IOptions {
	options: Options;
	setOptions: Dispatch<SetStateAction<Options>>;
}

export interface IBackgroundOptions {
	backgroundOptions: {
		color: string;
		gradient: {
			type: string;
			rotation: number;
		};
	};
}
export interface ICornersSquareOptions {
	cornersSquareOptions: {
		type: string;
		color: string;
		gradient: {
			type: string;
			rotation: number;
		};
	};
}
export interface ICornersDotOptions {
	cornersDotOptions: {
		type: string;
		color: string;
		gradient: {
			type: string;
			rotation: number;
		};
	};
}
