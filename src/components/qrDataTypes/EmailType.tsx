import React, { useEffect, useState } from "react";

import { EmailKeys } from "../../types/enumes";
import RedStar from "../reusable/RedStar";
import { Col } from "../../styles/styles";
import Input from "../reusable/Input";
import { hideLogo, showLogo } from "../../utils/switchLogo";
import { IOptions } from "../../types/components";

interface IEmail {
	email: string;
	CC: string;
	BCC: string;
	subject: string;
	body: string;
}

const arrFields = [
	{
		title: `Email`,
		require: true,
		key: EmailKeys.EMAIL,
		ph: "email@mail.com",
	},
	{
		title: `CC`,
		require: false,
		key: EmailKeys.CC,
		ph: "someoneelse@mail.com,another@mail.com,email@mail.com",
	},
	{
		title: `BCC`,
		require: false,
		key: EmailKeys.BCC,
		ph: "lastemail@mail.com",
	},
	{ title: `Subject`, require: false, key: EmailKeys.SUBJECT, ph: "subject" },
	{ title: `Body`, require: false, key: EmailKeys.BODY, ph: "body" },
];

const EmailType: React.FC<IOptions> = ({ options, setOptions }) => {
	const [data, setData] = useState<IEmail>({
		email: "",
		CC: "",
		BCC: "",
		subject: "",
		body: "",
	});

	useEffect(() => {
		let formatedEmailCode = `mailto:${data.email}`;

		if (data.CC.length > 0) formatedEmailCode += `&cc=${data.CC}`;

		if (data.BCC.length > 0) formatedEmailCode += `&bcc=${data.BCC}`;

		if (data.subject.length > 0)
			formatedEmailCode += `&subject=${data.subject}`;

		if (data.body.length > 0) formatedEmailCode += `&body=${data.body}`;

		formatedEmailCode = formatedEmailCode.replace(`&`, `?`);

		setOptions?.({ ...options, data: formatedEmailCode });
	}, [data]);

	return (
		<Col g='20px'>
			{arrFields.map((el, i) => {
				return (
					<Col key={`${el.title}_${i}`}>
						<label htmlFor={`${el.key}`}>
							{el.title}
							{el.require && <RedStar />}:
						</label>
						<Input
							value={data[el.key]}
							onChange={(e) => setData({ ...data, [el.key]: e.target.value })}
							id={`${el.key}`}
							name={`${el.key}`}
							placeholder={el.ph}
							onFocus={() => {
								hideLogo(options, setOptions);
							}}
							onBlur={() => {
								showLogo(options, setOptions);
							}}
							autoFocus={el.require}
						/>
					</Col>
				);
			})}
		</Col>
	);
};

export default EmailType;
