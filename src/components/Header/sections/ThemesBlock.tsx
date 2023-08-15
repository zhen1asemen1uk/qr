import { Dispatch, FC, SetStateAction } from "react";
import { Themes } from "../../../types/enumes";

import { Select } from "../../reusable/Select";
import { DefaultTheme, useTheme } from "styled-components";
import { setTheme } from "../../../utils/themes";
import { theme } from "../../../styles/themes";
import { Wrapp } from "../../../styles/styles";

interface IThemesBlock {
	setThemeSwitcher: Dispatch<SetStateAction<DefaultTheme>>;
}

const ThemesBlock: FC<IThemesBlock> = ({ setThemeSwitcher }) => {
	const currentTheme = useTheme().name;

	return (
		<Wrapp w='200px'>
			<Select
				title='Select theme'
				id='theme'
				value={currentTheme}
				options={[
					{ value: Themes.WHITE, label: "White" },
					{ value: Themes.BLACK, label: "Black" },
					{ value: Themes.PINK, label: "Pink" },
					{ value: Themes.GREEN, label: "Green" },
					{ value: Themes.BLUE, label: "Blue" },
					{ value: Themes.PURPLE, label: "Purple" },
					{ value: Themes.ORANGE, label: "Orange" },
					{ value: Themes.YELLOW, label: "Yellow" },
					{ value: Themes.RED, label: "Red" },
				]}
				onClick={(th) => {
					setThemeSwitcher(theme[th as keyof typeof theme]);
					setTheme(th as Themes);
				}}
			/>
		</Wrapp>
	);
};

export default ThemesBlock;
