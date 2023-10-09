import { Dispatch, FC, SetStateAction, Suspense, lazy } from "react";
import { FileExtension } from "qr-code-styling";

import Accordion from "../../reusable/Accordeon";
import Loader from "../../reusable/Loader";

const AccordionContent = lazy(() => import("./AccordionContent"));

interface ISettings {
	fileExt: FileExtension;
	setFileExt: Dispatch<SetStateAction<FileExtension>>;
	resolutionOfQr: number;
	setResolutionOfQr: Dispatch<SetStateAction<number>>;
}

export const Settings: FC<ISettings> = ({
	fileExt,
	setFileExt,
	resolutionOfQr,
	setResolutionOfQr,
}) => {
	return (
		<Accordion
			title={"Download Settings"}
			content={
				<Suspense fallback={<Loader />}>
					<AccordionContent
						fileExt={fileExt}
						setFileExt={setFileExt}
						resolutionOfQr={resolutionOfQr}
						setResolutionOfQr={setResolutionOfQr}
					/>
				</Suspense>
			}
		/>
	);
};
