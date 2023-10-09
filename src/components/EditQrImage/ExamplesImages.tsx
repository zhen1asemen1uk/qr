import { Dispatch, FC, SetStateAction } from "react";
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
		link: `/logos/Apple_logo.webp`,
	},
	{
		title: "Example №2",
		link: `/logos/superman.webp`,
	},

	{
		title: "Example №3",
		link: `/logos/KFC_logo.webp`,
	},
	{
		title: "Example №4",
		link: `/logos/genesis.webp`,
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
							bg={
								example.link === options.image
									? `${theme.secondary}80`
									: `${theme.main}`
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
