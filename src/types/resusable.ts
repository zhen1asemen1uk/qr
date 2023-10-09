import { FileExtension } from "qr-code-styling";
import {
	ChangeEvent,
	DetailedHTMLProps,
	Dispatch,
	MouseEventHandler,
	OptionHTMLAttributes,
	ReactNode,
	SetStateAction,
} from "react";
import { Placement } from "./enumes";

export interface InputProps {
	onClick?: () => void;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;

	title?: string | ReactNode;

	value: string | number | undefined;
	setValue?: Dispatch<SetStateAction<string>>;

	secondary?: boolean;

	pos?: string;
	posT?: string;
	posL?: string;
	posR?: string;
	posB?: string;

	h?: string;
	w?: string;
	p?: string;
	m?: string;

	id?: string;
	bgColor?: string;
	c?: string;

	placeholder?: string;

	disabled?: boolean;
	isLoading?: boolean;

	min?: string;
	step?: string;
	max?: string;
	type?: string;
	name?: string;

	autoFocus?: boolean;
	maxLength?: number;

	onMouseDown?: () => void;
	onMouseUp?: () => void;
	onFocus?: () => void;
	onBlur?: () => void;
}

export interface ButtonProps {
	onClick?: (e: ChangeEvent<HTMLInputElement>) => void;

	title: string | ReactNode;

	pos?: string;
	posT?: string;
	posL?: string;
	posR?: string;
	posB?: string;

	secondary?: boolean;

	h?: string;
	w?: string;
	p?: string;
	m?: string;

	fw?: number;
	td?: string;

	flex?: string;
	minW?: string;

	disabled?: boolean;
	bgColor?: string;
	c?: string;
	as?: React.ElementType;
	type?: string;

	children?: React.ReactElement;
}

export interface IArrSize {
	title: string;
	pixels: number;
}

export interface IAccordion {
	title: string;
	content: string | ReactNode | ReactNode[];
}

export interface IOption {
	title: string;
	value: FileExtension;
}

export interface IInput {
	title?: string | ReactNode;
	secondary?: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string | undefined;

	h?: string;
	w?: string;
	p?: string;
	m?: string;
	disabled?: boolean;
	placeholder?: string;
	id?: string;
	type?: string;
	name?: string;
	maxLength?: number;
	onMouseDown?: MouseEventHandler<HTMLInputElement> | undefined;
	onMouseUp?: MouseEventHandler<HTMLInputElement> | undefined;
	onFocus?: (e: ChangeEvent<HTMLInputElement> | undefined) => void;
	onBlur?: (e: ChangeEvent<HTMLInputElement> | undefined) => void;
	step?: string;
	min?: string;
	max?: string;
	autoFocus?: boolean;
	isLoading?: boolean;
}

export interface IInputColor {
	id?: string;
	size?: number;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (e: ChangeEvent<HTMLInputElement> | undefined) => void;
	onBlur?: (e: ChangeEvent<HTMLInputElement> | undefined) => void;
	onMouseDown?: MouseEventHandler<HTMLInputElement> | undefined;
	onMouseUp?: MouseEventHandler<HTMLInputElement> | undefined;
}

export interface ISelect {
	children:
		| DetailedHTMLProps<
				OptionHTMLAttributes<HTMLOptionElement>,
				HTMLOptionElement
		  >
		| DetailedHTMLProps<
				OptionHTMLAttributes<HTMLOptionElement>,
				HTMLOptionElement
		  >[];
	name: string;
	id: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

export interface ITipsMini {
	id?: string;
	placement?: Placement;
	text: string;
}
