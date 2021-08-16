export const thresholdNote = (value?: string): number => {
	const num = Number(value) || 0;
	return Math.max(Math.min(num, 20), 0);
}
