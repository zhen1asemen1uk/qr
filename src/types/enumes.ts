export enum TypeQr {
	TEXT = `TEXT`,
	VCARD = `VCARD`,
	SMS = `SMS`,
	WiFi = `WiFi`,
	EMAIL = `EMAIL`,
}

export enum VCardKeys {
	VNAME = `vname`,
	VLAST = `vlast`,
	VMOBILE = `vmobile`,
	VEMAIL = `vemail`,
	VURL = `vurl`,
	VCOMPANY = `vcompany`,
	VTITLE = `vtitle`,
	VADDRESS = `vaddress`,
	VCITY = `vcity`,
	VSTATE = `vstate`,
	VZIP = `vzip`,
	VCOUNTRY = `vcountry`,
}

export enum EmailKeys {
	EMAIL = `email`,
	CC = `CC`,
	BCC = `BCC`,
	SUBJECT = `subject`,
	BODY = `body`,
}

export enum WiFiKeys {
	NETWORKNAME = `networkName`,
	NETWORKTYPE = `networkType`,
	PASS = `pass`,
	HIDE = `hide`,
}

export enum Placement {
	TOP = `top`,
	RIGHT = `right`,
	LEFT = `left`,
	BOTTOM = `bottom`,
}
