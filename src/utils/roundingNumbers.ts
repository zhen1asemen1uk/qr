export const roundToTheNearestTen = (num: number, count: number) => {
	// num - size width screen, count - times smaller than the screen
	const result = Math.round((num - 50) / count / 10) * 10; // 50px - padding and margin of "Container"

	return result < 100 ? 100 : +result; // required minimum 100px
};
