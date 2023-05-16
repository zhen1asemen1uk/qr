import { RefObject, useEffect, useState } from "react";

const useIsVisible = (ref: RefObject<HTMLDivElement>) => {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting)
		);

		if (ref && ref.current) observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref]);

	return isIntersecting;
};

export default useIsVisible;
