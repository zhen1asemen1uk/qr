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
		link: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Aspect-ratio-4x3.svg/2560px-Aspect-ratio-4x3.svg.png`,
	},
	{
		title: "Example №2",
		link: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAADR0dGpqamDg4PLy8vs7OwUFBT8/PyHh4eKiopjY2MEBATt7e3y8vL4+Pi4uLhMTEzd3d1dXV3GxsadnZ1ra2tGRkaPj49TU1MTExM0NDTi4uJ5eXmsrKxCQkKXl5chISG9vb0oKCgrKyuHsKrmAAADq0lEQVR4nO2cC1PiMBRGU54BS4EqL0VR3P//G7epVAYauFFT3Ns9Z5xRZyifZxJLcnPBGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AfJ+4EMfp5lO2FRnf7k52GfjJNAuhHC7kPD+hHCKsZJGhb6EiHsLtSwEyGsYh1qGGMMf8XwprMUQwy/BYYYfgkMMfwWGGL4JTDE8Fu033Dk2T2lvg1VHMP0PMmbFXl/WFf0hjY0hs0bjjzP35Sh9VUxGjfcj84Zb7ypMcawWwtb73yCUQ09vHhDYxh68M2hxg27tzTsYdgEGEYFw0bA8CLWUf3svuzVh5doMzRm8LAY915nuTVH22voMjSmv6yWQ5uZCRlCZYbZ0j2wcpznIRNVj2ExJfO3s3X03pqpFKbI0OTD2jUP8kzVY2iy1dmWxP2Wi2GKDNe+izZimB7DifciN0+vo8dw4d+s30lhegzn/nrEMBPClBgWN8wLBRfxb1VjmF0omiUzIUyJYbEc9Y9hKrbhqDHM/JM0bc8Ytv3/sOB8RXPgUWr4U2JoL74e3kthSgxNuaapnbok8q1UkaG/BXDXor2FzZ58f6lYyVBkaPL67bQrFzI0GZqOe1i1tHHfFwFhegxdGWO7Kt0OF7yJOyeHHsOP+mj3859xOJqYkHKiHsMD0856OZ/f9/bSrqlCnaEJq5IeUWhYTs2ggn6JQsMPghXVGgaDYSNgGBUMGwHDqGDYCBhGRZmhPfkxaN2my7DsL7F5p5NPTptrrqDKsPCZzg6NzrvFoI3dJmZfbvEPpZrXlo3htNgvPZ9eMd8GDKMeQ1vrxE+T94E8ipoMn5OzgmmavE3FapQeQzM7Lwi7N4s8t6mq/+Q9fBJbhvQYPvhP13pSmB7Dpe8QOE3+SK17SgyL28mldzBJ01SJYfFy6L0mkdu+1BgOihnpGcPW9GLYS/00LeoYspc+5kb6tCAthtb4zrgdWyFMj+HIP01XUpgSw+qI+xRnLB50KzF01N4BW74+igeligxz3xi+tGnlXbusEFzKR/mKDK1ZJMe7TeoWAHfi+0k0GbpRfEk+V6fu27hdlajSZrA8Pn7Xb1m3if04ut8uNk/D4fuq1zdBgooMj2STSRbecaLRsCRYUaVh6JFFiUrDktZ3DAWDYSP8r4YxPmW3hv0tw2GdZgzdGNazHqN+UrKH6cBHwCr661ib3S7smNros5+H3TQNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH6bv5OENGNLw4GyAAAAAElFTkSuQmCC`,
	},

	{
		title: "Example №3",
		link: `https://images.wondershare.com/filmora/article-images/2021/how-do-you-find-the-picture-ratio-calculator-4.jpg`,
	},
	{
		title: "Example №4",
		link: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Aspect-ratio-3x2.svg/2560px-Aspect-ratio-3x2.svg.png`,
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
