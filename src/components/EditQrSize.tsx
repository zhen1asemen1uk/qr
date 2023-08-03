import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { roundToTheNearestTen } from "../utils/roundingNumbers";

import useWindowSize from "../hooks/useWindowSize";

import { Col, Row } from "../styles/styles";
import Button from "./reusable/Button";
import { IArrSize } from "../types/resusable";
import { IOptions } from "../types/components";
import { hideLogo, showLogo } from "../utils/switchLogo";
import InputRagne from "./reusable/InputRagne";

const Title = styled.h1``;

const EditQrSize: React.FC<IOptions> = ({ options, setOptions }) => {
	const size = useWindowSize();
	const [arrSize, setArrSize] = useState<IArrSize[]>([]);

	let arrSizes: IArrSize[] = [
		{
			title: "M",
			pixels: roundToTheNearestTen(size.width, 7), // count - "7" times smaller than the screen
		},
		{
			title: "L",
			pixels: roundToTheNearestTen(size.width, 4), // count - "4" times smaller than the screen
		},
		{
			title: "XL",
			pixels:
				size.width > 1280
					? roundToTheNearestTen(size.width, 3) // count - "3" times smaller than the screen
					: roundToTheNearestTen(size.width, 1), // count - "1" times smaller than the screen
		},
	];

	useEffect(() => {
		const newArr = [...arrSizes];

		if (newArr[1].pixels <= 100) {
			newArr.shift();
		}

		setArrSize(newArr);
	}, [size]);

	return (
		<Col g={`5px`}>
			<Title>Size:</Title>
			<Row g={`5px`}>
				{arrSize.map((size) => {
					return (
						<Button
							key={size.title}
							secondary
							title={`${size.title}`}
							fw={size.pixels === options.width ? 800 : 400}
							td={size.pixels === options.width ? "underline" : "none"}
							flex={`1 1 auto`}
							minW={`66px`}
							onClick={() => {
								setOptions?.({
									...options,
									width: size.pixels,
									height: size.pixels,
								});
							}}
						/>
					);
				})}
			</Row>

			<label htmlFor='size'>
				QR size: {options.width}px/{options.width}px
			</label>

			<InputRagne
				onMouseDown={() => {
					hideLogo(options, setOptions);
				}}
				onMouseUp={() => {
					showLogo(options, setOptions);
				}}
				id='size'
				name='size'
				min='100'
				max={
					size.width > 1280
						? `${roundToTheNearestTen(size.width, 3)}` // count - "3" times smaller than the screen
						: `${size.width - 50}` // 50px - padding and margin of "Container"
				}
				value={`${options.width}`}
				onChange={(e) => {
					setOptions?.({
						...options,
						width: +e.target.value,
						height: +e.target.value,
					});
				}}
			/>
		</Col>
	);
};

export default EditQrSize;
