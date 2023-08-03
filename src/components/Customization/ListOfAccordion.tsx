import React, { FC } from "react";

import Accordion from "../reusable/Accordeon";
import EditQrColors from "../EditQrColors/EditQrColors";
import EditQrImage from "../EditQrImage/EditQrImage";
import EditQrSize from "../EditQrSize";

import { IOptions } from "../../types/components";

export const ListOfAccordion: FC<IOptions> = ({ options, setOptions }) => {
	return (
		<>
			<Accordion
				title={"Edit Qr Colors"}
				content={<EditQrColors options={options} setOptions={setOptions} />}
			/>
			<Accordion
				title={"Edit Qr Image"}
				content={<EditQrImage options={options} setOptions={setOptions} />}
			/>
			<Accordion
				title={"Edit Qr Size"}
				content={<EditQrSize options={options} setOptions={setOptions} />}
			/>
		</>
	);
};
