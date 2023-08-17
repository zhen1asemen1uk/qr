import { FC, memo, useEffect, useState } from "react";

import Input from "../reusable/Input";
import { Row } from "../../styles/styles";
import Button from "../reusable/Button";
import { IOptions } from "../../types/components";

const TextType: FC<IOptions> = memo(({ options, setOptions }) => {
	const [isPast, setIsPast] = useState<string>("");
	const [isVisibilityChange, setVisibilityChange] = useState<boolean>(false);

	const changeVisibility = () => {
		setVisibilityChange(document.visibilityState === `visible` ? true : false);
	};
	useEffect(() => {
		document.addEventListener("visibilitychange", changeVisibility);

		if ("clipboard" in navigator) {
			navigator.clipboard
				?.readText()
				.then((text) => {
					setIsPast(text);
				})
				.catch((err) => {
					console.log("Something went wrong", err);

					setIsPast("");
				});
		}
		return () => {
			document.removeEventListener("visibilitychange", changeVisibility);
		};
	}, [isVisibilityChange]);

	return (
		<Row ai={`flex-end`} g={`5px`}>
			<Input
				title='Some text:'
				placeholder='Your URL address'
				value={options.data}
				onChange={(e) =>
					setOptions({ ...options, data: e.target.value.trimStart() || " " })
				}
				w='100%'
			/>

			{isPast && (
				<Button
					title={"Past"}
					h='38px'
					onClick={() => {
						setOptions({ ...options, data: `${isPast}` });

						console.log("Pasted content: ", isPast);

						// Clear the clipboard
						navigator.clipboard.writeText("");
						setVisibilityChange(false);
						setIsPast("");
					}}
				/>
			)}
		</Row>
	);
});

export default TextType;
