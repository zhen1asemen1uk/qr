import { FC, memo, useCallback, useEffect, useState } from "react";

import { VCardKeys } from "../../types/enumes";
import RedStar from "../reusable/RedStar";
import { Col } from "../../styles/styles";
import Input from "../reusable/Input";
import { hideLogo, showLogo } from "../../utils/switchLogo";
import { IOptions } from "../../types/components";

const arrFields = [
	{ title: "First name", key: VCardKeys.VNAME, require: true },
	{ title: "Last name", key: VCardKeys.VLAST, require: true },
	{ title: "Phone number", key: VCardKeys.VMOBILE, require: true },
	{ title: "E-mail", key: VCardKeys.VEMAIL, require: true },
	{ title: "Website (URL)", key: VCardKeys.VURL, require: false },
	{ title: "Company", key: VCardKeys.VCOMPANY, require: false },
	{ title: "Job title", key: VCardKeys.VTITLE, require: false },
	{ title: "Address", key: VCardKeys.VADDRESS, require: false },
	{ title: "City", key: VCardKeys.VCITY, require: false },
	{ title: "State", key: VCardKeys.VSTATE, require: false },
	{ title: "Post code", key: VCardKeys.VZIP, require: false },
	{ title: "Country", key: VCardKeys.VCOUNTRY, require: false },
];
interface IVCard {
	vname: string;
	vlast: string;
	vmobile: string;
	vemail: string;
	vurl: string;
	vcompany: string;
	vtitle: string;
	vaddress: string;
	vcity: string;
	vstate: string;
	vzip: number | undefined;
	vcountry: string;
}

const VCardType: FC<IOptions> = memo(({ options, setOptions }) => {
	const [vCard, setVCard] = useState<IVCard>({
		vname: "",
		vlast: "",
		vmobile: "",
		vemail: "",
		vurl: "",
		vcompany: "",
		vtitle: "",
		vaddress: "",
		vcity: "",
		vstate: "",
		vzip: 12345,
		vcountry: "",
	});

	useEffect(() => {
		let formatedVCardCode = `
			BEGIN:VCARD
			VERSION:3.0
			N:${vCard.vlast};${vCard.vname};;;
			FN:${vCard.vname} ${vCard.vlast}
			EMAIL;TYPE=INTERNET;TYPE=WORK;TYPE=PREF:${vCard.vemail}`;

		// from new line is reqired!!!
		if (vCard.vtitle.length > 0)
			formatedVCardCode += `
			TITLE:${vCard.vtitle}`;

		if (vCard.vmobile.length > 0)
			formatedVCardCode += `
			TEL;CELL:${vCard.vmobile}`;

		if (vCard.vcompany.length > 0)
			formatedVCardCode += `
			ORG:${vCard.vcompany}`;

		if (vCard.vurl.length > 0)
			formatedVCardCode += `
			URL;TYPE=Homepage:${vCard.vurl}`;

		// big check for correct address
		if (
			vCard.vaddress.length > 0 &&
			vCard.vcity.length > 0 &&
			vCard.vstate.length > 0 &&
			vCard.vzip &&
			vCard.vcountry.length > 0
		) {
			formatedVCardCode += `
			ADR:;;${vCard.vaddress};${vCard.vcity};${vCard.vstate};${vCard.vzip};${vCard.vcountry}`;
		}

		// reqired row for correct finish !
		formatedVCardCode += `
			END:VCARD`;

		setOptions?.({ ...options, data: formatedVCardCode });
	}, [vCard]);

	const hideLogoClick = useCallback(() => {
		hideLogo(options, setOptions);
	}, [options, setOptions]);

	const showLogoClick = useCallback(() => {
		showLogo(options, setOptions);
	}, [options, setOptions]);

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
							id={`${el.key}`}
							type='text'
							name={`${el.key}`}
							value={`${vCard[el.key]}`}
							onChange={(e) => setVCard({ ...vCard, [el.key]: e.target.value })}
							onFocus={() => {
								hideLogoClick();
								// hideLogo(options, setOptions);
							}}
							onBlur={() => {
								showLogoClick();
								// showLogo(options, setOptions);
							}}
						/>
					</Col>
				);
			})}
		</Col>
	);
});

export default VCardType;
