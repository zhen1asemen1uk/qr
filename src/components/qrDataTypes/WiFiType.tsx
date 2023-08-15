import { FC, useEffect, useState } from "react";

import { Col } from "../../styles/styles";

import RedStar from "../reusable/RedStar";
import Input from "../reusable/Input";

import { IOptions } from "../../types/components";
import Checkbox from "../reusable/Checkbox";
import { Select } from "../reusable/Select";

interface IWiFi {
	networkName: string;
	networkType: string;
	pass: string;
	hide: boolean;
}

const WiFiType: FC<IOptions> = ({ options, setOptions }) => {
	const [wiFi, setWiFi] = useState<IWiFi>({
		networkName: "",
		pass: "",
		networkType: "WPA",
		hide: false,
	});

	useEffect(() => {
		let formatedWiFiCode;

		if (wiFi.networkType) {
			formatedWiFiCode = `WIFI:T:${wiFi.networkType};S:${wiFi.networkName};P:${wiFi.pass};H:${wiFi.hide};;`;
		} else {
			formatedWiFiCode = `WIFI:S:${wiFi.networkName};H:${wiFi.hide};;`;
		}

		setOptions({ ...options, data: formatedWiFiCode });
	}, [wiFi]);

	return (
		<Col g='20px'>
			<Col ai='stretch'>
				<label htmlFor='networkName'>
					Network name:
					<RedStar />
				</label>
				<Input
					id='networkName'
					type='text'
					name='networkName'
					value={`${wiFi.networkName}`}
					onChange={(e) =>
						setWiFi({
							...wiFi,
							networkName: e.target.value,
						})
					}
				/>
			</Col>
			<Col ai='stretch'>
				<label htmlFor='networkType'>
					Network type:
					<RedStar />
				</label>

				<Select
					id='networkType'
					value={wiFi.networkType}
					onClick={(value) =>
						setWiFi({
							...wiFi,
							networkType: value,
						})
					}
					options={[
						{ value: "WEP", label: "WEP" },
						{ value: "WPA", label: "WPA/WPA2" },
						{ value: "", label: "No encryption" },
					]}
				/>
			</Col>
			{wiFi.networkType && (
				<Col ai='stretch'>
					<label htmlFor='pass'>
						Password:
						<RedStar />
					</label>
					<Input
						id='pass'
						type='text'
						name='pass'
						value={`${wiFi.pass}`}
						onChange={(e) =>
							setWiFi({
								...wiFi,
								pass: e.target.value,
							})
						}
					/>
				</Col>
			)}
			Hidden
			<Checkbox
				label='Hidden'
				id='hide'
				name='hide'
				onChange={(e) => {
					setWiFi({
						...wiFi,
						hide: e.target.checked,
					});
				}}
				defaultChecked={wiFi.hide}
			/>
		</Col>
	);
};

export default WiFiType;
