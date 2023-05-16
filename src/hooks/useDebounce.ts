import { useState, useEffect, Dispatch, SetStateAction } from "react";

const useDebounce = <T>(
	value: T,
	delay: number,
	setIsLoading?: Dispatch<SetStateAction<boolean>>
): T => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		setIsLoading?.(true);
		const timer = setTimeout(() => {
			setDebouncedValue(value);

			setIsLoading?.(false);
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debouncedValue;
};

export default useDebounce;
