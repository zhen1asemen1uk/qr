import { useState, useEffect, ChangeEvent, FC } from "react";

import { Col, Row, Title } from "../../styles/styles";
// import UploadImage from "./UploadImage";

import { IArrSize } from "../../types/resusable";
import Input from "../reusable/Input";

import Button from "../reusable/Button";
import { IOptions } from "../../types/components";
import ExamplesImages from "./ExamplesImages";
import Checkbox from "../reusable/Checkbox";
import InputRagne from "../reusable/InputRagne";
import useDebounce from "../../hooks/useDebounce";

const arrSizes: IArrSize[] = [
	{
		title: "M",
		pixels: 0.2,
	},
	{
		title: "L",
		pixels: 0.4,
	},
	{
		title: "XL",
		pixels: 0.6,
	},
];

const EditQrImage: FC<IOptions> = ({ options, setOptions }) => {
	const [withoutImage, setWithoutImage] = useState<boolean>(true);
	const [linkImg, setLinkImg] = useState<string>(``);
	const [imageSize, setImageSize] = useState(
		options?.imageOptions?.imageSize || 0.2
	);
	const delay: number = 500;

	const debouncedImageSize = useDebounce(imageSize, 200);

	useEffect(() => {
		setOptions?.({
			...options,
			imageOptions: { imageSize: debouncedImageSize },
		});
	}, [debouncedImageSize]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (linkImg.length >= 5) {
				fetch(linkImg)
					.then((res) => {
						if (res.status === 200) {
							setOptions?.({
								...options,
								image: linkImg,
							});
						} else {
							if (options.image !== "") {
								setOptions?.({
									...options,
									image: "",
								});
							}
						}
					})
					.catch(() => {
						if (options.image !== "") {
							setOptions?.({
								...options,
								image: "",
							});
						}
					});
			}
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [linkImg]);

	return (
		<Col g='20px'>
			<Title>Logo:</Title>
			<Checkbox
				label={`Without logo`}
				id='withoutImage'
				name='withoutImage'
				defaultChecked={withoutImage}
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					setWithoutImage(e.target?.checked);
					setOptions?.({
						...options,
						image: e.target?.checked ? `` : ``,
					});
					setLinkImg?.(``);
				}}
			/>
			<Input
				disabled={withoutImage}
				title='Enter link on image:'
				placeholder='URL addres on img'
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setLinkImg(e.target.value)
				}
				value={linkImg}
			/>
			<Row g={`5px`}>
				{arrSizes.map((size) => {
					return (
						<Button
							flex={`1 1 auto`}
							key={size.title}
							secondary
							disabled={withoutImage}
							title={`${size.title}`}
							fw={size.pixels === options?.imageOptions?.imageSize ? 800 : 400}
							td={
								size.pixels === options?.imageOptions?.imageSize
									? "underline"
									: "none"
							}
							minW={`66px`}
							onClick={() => {
								setOptions?.({
									...options,
									imageOptions: { imageSize: size.pixels },
								});
							}}
						/>
					);
				})}
			</Row>
			<InputRagne
				disabled={withoutImage}
				min={`0.2`}
				step={`0.1`}
				max={`0.6`}
				title='Logo size:'
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setImageSize(+e.target.value)
				}
				value={`${imageSize}`}
			/>
			<ExamplesImages
				options={options}
				setOptions={setOptions}
				setWithoutImage={setWithoutImage}
				withoutImage={withoutImage}
			/>
			UploadImage
			{/* <UploadImage
				disabled={withoutImage}
				selectedImage={linkImg}
				setSelectedImage={setLinkImg}
			/> */}
		</Col>
	);
};

export default EditQrImage;
