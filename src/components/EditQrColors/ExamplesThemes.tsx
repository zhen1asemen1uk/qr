import { FC } from "react";
import styled, { DefaultTheme, useTheme } from "styled-components";

import { Col, FlexBlock, Row } from "../../styles/styles";
import { ExampleTheme, IOptions } from "../../types/components";

const ImageEx = styled.img`
	width: 70px;
	height: 70px;
	object-fit: contain;
`;

const examplesThemes = ({ theme }: { theme: DefaultTheme }): ExampleTheme[] => [
	{
		link: `images/qr-example-1.webp`,
		dotsOptions: `${theme.main}`,
		backgroundOptions: `${theme.secondary}`,
		cornersSquareOptions: `${theme.main}`,
		cornersDotOptions: `${theme.main}`,
	},
	{
		link: `images/qr-example-2.webp`,
		dotsOptions: `${theme.secondary}`,
		backgroundOptions: `${theme.main}`,
		cornersSquareOptions: `${theme.secondary}`,
		cornersDotOptions: `${theme.secondary}`,
	},
	{
		link: `images/qr-example-3.webp`,
		dotsOptions: `#FFFFFF`,
		backgroundOptions: `#000000`,
		cornersSquareOptions: `#FFFFFF`,
		cornersDotOptions: `#FFFFFF`,
	},
	{
		link: `images/qr-example-4.webp`,
		dotsOptions: `#000000`,
		backgroundOptions: `#FFFFFF`,
		cornersSquareOptions: `#000000`,
		cornersDotOptions: `#000000`,
	},
];

const ExamplesThemes: FC<IOptions> = ({ options, setOptions }) => {
	const theme = useTheme();
	const examplesThemesArr = examplesThemes({ theme });
	return (
		<Col g={`5px`}>
			Examples Qr themes:
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
								setOptions({
									...options,
									dotsOptions: {
										...options.dotsOptions,
										color: example.dotsOptions,
									},
									backgroundOptions: {
										...options.backgroundOptions,
										color: example.backgroundOptions,
									},
									cornersSquareOptions: {
										...options.cornersSquareOptions,
										color: example.cornersSquareOptions,
									},
									cornersDotOptions: {
										...options.cornersDotOptions,
										color: example.cornersDotOptions,
									},
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
