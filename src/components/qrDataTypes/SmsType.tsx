import React, { useEffect, useState } from "react";

import RedStar from "../reusable/RedStar";
import { Col } from "../../styles/styles";
import Input from "../reusable/Input";
import { hideLogo, showLogo } from "../../utils/switchLogo";
import { IOptions } from "../../types/components";

interface ISms {
	tel: string;
	text: string;
}

const SmsType: React.FC<IOptions> = ({ options, setOptions }) => {
	const [sms, setSms] = useState<ISms>({
		tel: "",
		text: "",
	});

	useEffect(() => {
		let formatedSmsCode = `smsto:${sms.tel}`;

		if (sms.text.length > 0) formatedSmsCode += `:${sms.text}`;

		setOptions?.({ ...options, data: formatedSmsCode });
	}, [sms]);

	return (
		<Col g='20px'>
			<Col>
				<label htmlFor='tel'>
					Phone number
					<RedStar />:
				</label>
				<Input
					id='tel'
					value={sms.tel}
					onChange={(e) => setSms({ ...sms, tel: e.target.value })}
					placeholder='+18005551212'
					onFocus={() => {
						hideLogo(options, setOptions);
					}}
					onBlur={() => {
						showLogo(options, setOptions);
					}}
					autoFocus={true}
				/>
			</Col>

			<Col>
				<label htmlFor='text'>Text:</label>
				<Input
					id='text'
					value={sms.text}
					onChange={(e) => setSms({ ...sms, text: e.target.value })}
					placeholder='Your SMS text'
					maxLength={159}
					onFocus={() => {
						hideLogo(options, setOptions);
					}}
					onBlur={() => {
						showLogo(options, setOptions);
					}}
				/>
			</Col>
		</Col>
	);
};

export default SmsType;
