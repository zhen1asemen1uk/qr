import React, { FC } from "react";
import styled, { DefaultTheme, useTheme } from "styled-components";

import { Col, FlexBlock, Row } from "../../styles/styles";
import { ExampleTheme, IOptions } from "../../types/components";

const Title = styled.h1``;

const ImageEx = styled.img`
	width: 70px;
	height: 70px;
	object-fit: contain;
`;

const examplesThemes = ({ theme }: { theme: DefaultTheme }): ExampleTheme[] => [
	{
		link: `images/qr-example-1.png`,
		dotsOptions: `${theme.main}`,
		backgroundOptions: `${theme.secondary}`,
		cornersSquareOptions: `${theme.main}`,
		cornersDotOptions: `${theme.main}`,
	},
	{
		link: `images/qr-example-2.png`,
		dotsOptions: `${theme.main}`,
		backgroundOptions: `${theme.secondary}`,
		cornersSquareOptions: `${theme.main}`,
		cornersDotOptions: `${theme.main}`,
	},
	{
		link: `images/qr-example-3.png`,
		dotsOptions: `${theme.main}`,
		backgroundOptions: `${theme.secondary}`,
		cornersSquareOptions: `${theme.main}`,
		cornersDotOptions: `${theme.main}`,
	},
	{
		link: `images/qr-example-4.png`,
		dotsOptions: `${theme.main}`,
		backgroundOptions: `${theme.secondary}`,
		cornersSquareOptions: `${theme.main}`,
		cornersDotOptions: `${theme.main}`,
	},
];

const ExamplesThemes: FC<IOptions> = ({ options, setOptions }) => {
	const theme = useTheme();
	const examplesThemesArr = examplesThemes({ theme });
	return (
		<Col g={`5px`}>
			<Title>Colors:</Title>
			Examples:
			<Row g={`5px`} jc={`space-between`}>
				{examplesThemesArr.map((example, i) => {
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
									? `2px solid ${theme.main}`
									: `2px solid ${theme.secondary}`
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
