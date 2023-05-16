import React, { ChangeEvent, useEffect, useState } from "react";

import { WiFiKeys } from "../../types/enumes";

import { Col } from "../../styles/styles";
import { hideLogo, showLogo } from "../../utils/switchLogo";

import RedStar from "../reusable/RedStar";
import Input from "../reusable/Input";

import { IOptions } from "../../types/components";

const arrFields = [
	{
		title: "Network name:",
		key: WiFiKeys.NETWORKNAME,
		require: true,
		type: `text`,
	},
	{
		title: "Network type:",
		key: WiFiKeys.NETWORKTYPE,
		require: true,
		type: `select`,
	},
	{ title: "Password:", key: WiFiKeys.PASS, require: true, type: `text` },
	{ title: "Hidden", key: WiFiKeys.HIDE, require: false, type: `checkbox` },
];
interface IWiFi {
	networkName: string;
	networkType: string;
	pass: string;
	hide: boolean;
}

const WiFiType: React.FC<IOptions> = ({ options, setOptions }) => {
	const [wiFi, setWiFi] = useState<IWiFi>({
		networkName: "",
		pass: "",
		networkType: "WPA",
		hide: false,
	});

	useEffect(() => {
		const formatedWiFiCode = `WIFI:T:${wiFi.networkType};S:${wiFi.networkName};P:${wiFi.pass};H:${wiFi.hide};;`;

		setOptions?.({ ...options, image: "", data: formatedWiFiCode });
	}, [wiFi]);

	return (
		<Col g='20px'>
			{arrFields.map((el, i) => {
				return (
					<Col
						key={`${el.title}_${i}`}
						ai={[`checkbox`].includes(el.type) ? `flex-start` : `stretch`}>
						<label htmlFor={`${el.key}`}>
							{![`checkbox`].includes(el.type) && el.title}
							{el.require && <RedStar />}
						</label>
						{[`select`].includes(el.type) ? (
							<select
								name={`${el.key}`}
								id={`${el.key}`}
								onChange={(e) =>
									setWiFi({ ...wiFi, networkType: e.target.value })
								}
								value={wiFi.networkType}>
								<option value='WEP'>WEP</option>
								<option value='WPA'>WPA/WPA2</option>
								<option value=''>No encryption</option>
							</select>
						) : [`checkbox`].includes(el.type) ? (
							<>
								<label htmlFor='withoutImage'>{el.title}</label>
								<input
									type='checkbox'
									id='withoutImage'
									name={el.key}
									onChange={(e: ChangeEvent<HTMLInputElement>) => {
										setWiFi({ ...wiFi, [el.key]: e.target.checked });
									}}
									defaultChecked={!!wiFi[el.key]}
								/>
							</>
						) : (
							<Input
								id={`${el.key}`}
								type={el.type}
								name={`${el.key}`}
								value={`${wiFi[el.key]}`}
								onChange={(e) => setWiFi({ ...wiFi, [el.key]: e.target.value })}
								onFocus={() => {
									hideLogo(options, setOptions);
								}}
								onBlur={() => {
									showLogo(options, setOptions);
								}}
							/>
						)}
					</Col>
				);
			})}
		</Col>
	);
};

export default WiFiType;
