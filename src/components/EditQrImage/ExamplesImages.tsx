import React, { Dispatch, FC, SetStateAction } from "react";
import { Col, FlexBlock, Row } from "../../styles/styles";

import styled, { useTheme } from "styled-components";
import { IOptions } from "../../types/components";

const ImageEx = styled.img<{ disabled: boolean }>`
	width: 50px;
	height: 50px;
	object-fit: contain;

	flex: 1 1 auto;
	min-width: 70px;

	opacity: ${({ disabled }) => (disabled ? 0.1 : 1)};
	transition: 0.5s;
`;

const examplesImages = [
	{
		title: "Example №1",
		link: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png`,
	},
	{
		title: "Example №2",
		link: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/1200px-Superman_shield.svg.png`,
	},

	{
		title: "Example №3",
		link: `https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/2048px-KFC_logo.svg.png`,
	},
	{
		title: "Example №4",
		link: `/logos/genesis.png`,
	},
];

interface IExamplesImages extends IOptions {
	setWithoutImage: Dispatch<SetStateAction<boolean>>;
	withoutImage: boolean;
}

const ExamplesImages: FC<IExamplesImages> = ({
	options,
	setOptions,
	setWithoutImage,
	withoutImage,
}) => {
	const theme = useTheme();

	return (
		<Col g={`5px`}>
			Examples:
			<Row g={`5px`} ai={`center`}>
				{examplesImages.map((example, i) => {
					return (
						<FlexBlock
							key={example.title + "_" + i}
							b={
								example.link === options.image
									? `1px solid ${theme.secondary}`
									: `1px solid ${theme.main}`
							}
							flex={`1 1 auto`}>
							<ImageEx
								disabled={withoutImage}
								src={`${example.link}`}
								onClick={() => {
									if (withoutImage) return;

									setWithoutImage(false);

									setOptions?.({
										...options,
										image: example.link,
									});
								}}
							/>
						</FlexBlock>
					);
				})}
			</Row>
		</Col>
	);
};

export default ExamplesImages;
