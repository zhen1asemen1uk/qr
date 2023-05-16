import React, { useEffect, useState } from "react";

import Input from "../reusable/Input";
import { Row } from "../../styles/styles";
import Button from "../reusable/Button";
import { IOptions } from "../../types/components";

const TextType: React.FC<IOptions> = ({ options, setOptions }) => {
	const [isPast, setIsPast] = useState<string>("");

	useEffect(() => {
		if ("clipboard" in navigator) {
			navigator.clipboard
				?.readText()
				.then((text) => {
					setIsPast(text);
				})
				.catch((err) => {
					setIsPast("");
				});
		}
	});

	return (
		<Row ai={`flex-end`} g={`5px`}>
			<Input
				title='Some text:'
				placeholder='Your URL address'
				value={options.data}
				onChange={(e) =>
					setOptions({ ...options, data: e.target.value || " " })
				}
				w='100%'
				autoFocus={true}
			/>

			{isPast && (
				<Button
					title={"Past"}
					h='38px'
					onClick={() => {
						setOptions({ ...options, data: `${isPast}` });

						console.log("Pasted content: ", isPast);

						navigator.clipboard.writeText("");
					}}
				/>
			)}
		</Row>
	);
};

export default TextType;
