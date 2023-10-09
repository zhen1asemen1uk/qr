import { useState, useEffect } from "react";

interface Size {
	width: number;
	height: number;
}

// Hook
const useWindowSize = (): Size => {
	const [windowSize, setWindowSize] = useState<Size>({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: +window.innerWidth,
				height: +window.innerHeight,
			});
		}

		window.addEventListener("resize", handleResize);

		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount

	return windowSize;
};

export default useWindowSize;
