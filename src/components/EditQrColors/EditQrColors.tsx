import { FC, useEffect, useState } from "react";

import { Row, Title } from "../../styles/styles";

import Input from "../reusable/Input";
import InputColor from "../reusable/InputColor";
import ExamplesThemes from "./ExamplesThemes";
import { IOptions } from "../../types/components";
import { KeysColor } from "../../types/enumes";
import useDebounce from "../../hooks/useDebounce";

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

interface IColors {
	dotsOptions: { color: string };
	backgroundOptions: { color: string };
	cornersSquareOptions: { color: string };
	cornersDotOptions: { color: string };
}

const EditQrColors: FC<IOptions> = ({ options, setOptions }) => {
	// regex for check hex code
	// const validateHex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

	const [colors, setColors] = useState<IColors>({
		dotsOptions: { color: options.dotsOptions?.color || `` },
		backgroundOptions: { color: options.backgroundOptions?.color || `` },
		cornersSquareOptions: { color: options.cornersSquareOptions?.color || `` },
		cornersDotOptions: { color: options.cornersDotOptions?.color || `` },
	});

	const debouncedColors = useDebounce(colors, 200);

	useEffect(() => {
		setOptions({
			...options,
			dotsOptions: {
				...options.dotsOptions,
				color: debouncedColors.dotsOptions.color,
			},
			backgroundOptions: {
				...options.backgroundOptions,
				color: debouncedColors.backgroundOptions.color,
			},
			cornersSquareOptions: {
				...options.cornersSquareOptions,
				color: debouncedColors.cornersSquareOptions.color,
			},
			cornersDotOptions: {
				...options.cornersDotOptions,
				color: debouncedColors.cornersDotOptions.color,
			},
		});
	}, [debouncedColors]);

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
								value={`${colors[el.key]?.color}`}
								onChange={(e) => {
									setColors({
										...colors,
										[el.key]: { color: e.target.value },
									});
								}}
								maxLength={10}
							/>

							<InputColor
								id={`${el.key}`}
								value={options[el.key]!.color || ""}
								onChange={(e) => {
									setColors({
										...colors,
										[el.key]: { color: e.target.value },
									});

									// setOptions({
									// 	...options,
									// 	[el.key]: { ...options[el.key], color: e.target.value },
									// });
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
