import { FC, Suspense, lazy, memo } from "react";

import Accordion from "../reusable/Accordeon";

import { IOptions } from "../../types/components";
import Loander from "../reusable/Loander";

const EditQrColors = lazy(() => import("../EditQrColors/EditQrColors"));
const EditQrImage = lazy(() => import("../EditQrImage/EditQrImage"));
const EditQrSize = lazy(() => import("../EditQrSize"));

export const ListOfAccordion: FC<IOptions> = memo(({ options, setOptions }) => {
	return (
		<>
			<Accordion
				title={"Edit Qr Colors"}
				content={
					<Suspense fallback={<Loander />}>
						<EditQrColors options={options} setOptions={setOptions} />
					</Suspense>
				}
			/>
			<Accordion
				title={"Edit Qr Image"}
				content={
					<Suspense fallback={<Loander />}>
						<EditQrImage options={options} setOptions={setOptions} />
					</Suspense>
				}
			/>
			<Accordion
				title={"Edit Qr Size"}
				content={
					<Suspense fallback={<Loander />}>
						<EditQrSize options={options} setOptions={setOptions} />
					</Suspense>
				}
			/>
		</>
	);
});
