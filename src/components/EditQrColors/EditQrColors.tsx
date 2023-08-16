import { FC } from "react";
import styled from "styled-components";

import { Row } from "../../styles/styles";
import { hideLogo, showLogo } from "../../utils/switchLogo";

import Input from "../reusable/Input";
import InputColor from "../reusable/InputColor";
import ExamplesThemes from "./ExamplesThemes";
import { IOptions } from "../../types/components";

const Title = styled.h1``;

enum KeysColor {
	DOTSOPTIONS = `dotsOptions`,
	BACKGROUNDOPTIONS = `backgroundOptions`,
	CORNERSSQUAREOPTIONS = `cornersSquareOptions`,
	CORNERSDOTOPTIONS = `cornersDotOptions`,
}

const arrKeysForChangeColor = [
	{
		title: `Dots`,
		key: KeysColor.DOTSOPTIONS,
	},
	{
		title: `Background`,
		key: KeysColor.BACKGROUNDOPTIONS,
	},
	{
		title: `Сorners Square`,
		key: KeysColor.CORNERSSQUAREOPTIONS,
	},
	{
		title: `Сorners Dot`,
		key: KeysColor.CORNERSDOTOPTIONS,
	},
];

const EditQrColors: FC<IOptions> = ({ options, setOptions }) => {
	return (
		<>
			<Title>Colors:</Title>
			{arrKeysForChangeColor.map((el, i) => {
				return (
					<div key={`${el.title}_${i}`}>
						<label htmlFor={`${el.key}`}>{el.title}:</label>

						<Row g={`5px`} w={`100%`} jc={`space-between`}>
							<Input
								w={`100%`}
								id={`${el.key}`}
								value={`${options[el.key]?.color}`}
								onChange={(e) =>
									setOptions?.({
										...options,
										[el.key]: { color: e.target.value },
									})
								}
								// onFocus={() => {
								// 	hideLogo(options, setOptions);
								// }}
								// onBlur={() => {
								// 	showLogo(options, setOptions);
								// }}
							/>

							<InputColor
								id={`${el.key}`}
								value={options[el.key]!.color || ""}
								onChange={(e) => {
									setOptions?.({
										...options,
										[el.key]: { color: e.target.value },
									});
								}}
								onFocus={() => {
									hideLogo(options, setOptions);
								}}
								onBlur={() => {
									showLogo(options, setOptions);
								}}
							/>
						</Row>
					</div>
				);
			})}
			<ExamplesThemes options={options} setOptions={setOptions} />
		</>
	);
};

export default EditQrColors;
