import React, { FC } from "react";
import styled from "styled-components";

import { Col, FlexBlock, Row } from "../../styles/styles";

import { IOptions } from "../../types/components";

const Title = styled.h1``;

const ImageEx = styled.img`
	width: 70px;
	height: 70px;
	object-fit: contain;
`;

const examplesThemes = [
	{
		link: `images/qr-example-1.png`,
		dotsOptions: "#0b064b",
		backgroundOptions: "#ffffff",
		cornersSquareOptions: "#c9a05d",
		cornersDotOptions: "#0b064b",
	},
	{
		link: `images/qr-example-2.png`,
		dotsOptions: "#c9a05d",
		backgroundOptions: "#0b064b",
		cornersSquareOptions: "#c9a05d",
		cornersDotOptions: "#c9a05d",
	},
	{
		link: `images/qr-example-3.png`,
		dotsOptions: "#ffffff",
		backgroundOptions: "#000000",
		cornersSquareOptions: "#ffffff",
		cornersDotOptions: "#ffffff",
	},
	{
		link: `images/qr-example-4.png`,
		dotsOptions: "#000000",
		backgroundOptions: "#ffffff",
		cornersSquareOptions: "#000000",
		cornersDotOptions: "#000000",
	},
];

const ExamplesThemes: FC<IOptions> = ({ options, setOptions }) => {
	return (
		<Col g={`5px`}>
			<Title>Colors:</Title>
			Examples:
			<Row g={`5px`} jc={`space-between`}>
				{examplesThemes.map((example, i) => {
					return (
						<FlexBlock
							key={`${example.link}_${i}`}
							jc={`center`}
							ai={`center`}
							b={
								example.dotsOptions === options.dotsOptions?.color &&
								example.backgroundOptions ===
									options.backgroundOptions?.color &&
								example.cornersSquareOptions ===
									options.cornersSquareOptions?.color &&
								example.cornersDotOptions === options.cornersDotOptions?.color
									? `2px solid #0b064b`
									: `2px solid #DDEBFF`
							}
							onClick={() => {
								setOptions?.({
									...options,
									dotsOptions: { color: example.dotsOptions },
									backgroundOptions: { color: example.backgroundOptions },
									cornersSquareOptions: {
										color: example.cornersSquareOptions,
									},
									cornersDotOptions: { color: example.cornersDotOptions },
								});
							}}>
							<ImageEx src={example.link} />
						</FlexBlock>
					);
				})}
			</Row>
		</Col>
	);
};

export default ExamplesThemes;
