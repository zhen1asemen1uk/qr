import { FC, memo, useEffect, useState } from "react";

import RedStar from "../reusable/RedStar";
import { Col } from "../../styles/styles";
import Input from "../reusable/Input";

import { IOptions } from "../../types/components";
import { transformSymbols } from "../../utils/helpers";

interface ISms {
	tel: string;
	text: string;
}

const SmsType: FC<IOptions> = memo(({ options, setOptions }) => {
	const [sms, setSms] = useState<ISms>({
		tel: "",
		text: "",
	});

	useEffect(() => {
		let formatedSmsCode = `smsto:${sms.tel}`;

		if (sms.text.length > 0) {
			formatedSmsCode += `:${transformSymbols(sms.text)}`;
		}

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
				/>
			</Col>
		</Col>
	);
});

export default SmsType;
